function push(stack, line, type, name, generic) {
    var str = new String(line)
    str.type = type
    str.name = name
    str.generic = generic
    stack.push(str)
}

function nextToken(source, offset, stack) {
    var skip = 0
    while (/\s/.test(source.charAt(offset + skip))) {
        skip += 1
    }

    var char = source.charAt(offset + skip)
    if (["(", ")", ",", ";"].indexOf(char) >= 0) {
        return { token: char, skip: skip + 1 }
    }

    var token = ""
    var count = 0
    while (count > 0 || /\S/.test(source.charAt(offset + skip))) {
        var char = source.charAt(offset + skip)
        if (char === "<") count += 1
        if (char === ">") count -= 1
        if (count === 0 && ["(", ")", ",", ";"].indexOf(char) >= 0) break
        token += char === "?" ? "any" : char
        skip += 1
    }

    return {
        token: token,
        skip: skip,
    }
}

function parseClassMember(source, offset, stack) {
    var line = "    "
    var returnType = ""
    var typeVariable = ""
    var t = null
    while (t = nextToken(source, offset, stack)) {
        offset += t.skip
        if (["public", "protected", "static"].indexOf(t.token) >= 0) {
            line += t.token + " "
        } else if (t.token.charAt(0) === "<") {
            typeVariable = t.token
        } else if (["final", "abstract", "native", "synchronized", "volatile", "strictfp", "transient"].indexOf(t.token) < 0) {
            returnType = t.token
            break
        }
    }

    if (returnType === "{}") {
        return {
            source: source,
            offset: offset + 1,
            stack: stack,
        }
    }

    t = nextToken(source, offset, stack)
    var memberName = t.token
    line += memberName + typeVariable
    offset += t.skip

    t = nextToken(source, offset, stack)
    offset += t.skip
    var isMethod = false
    if (t.token === "(") {
        isMethod = true
        line += "("
        var i = 0
        while (t = nextToken(source, offset, stack)) {
            offset += t.skip
            if (t.token === ")") {
                line += ")"
                break
            } else if (t.token === ",") {
                line += ", "
            } else {
                if (t.token.endsWith("...")) {
                    line += "...arg" + i + ": " + t.token.replace("...", "[]")
                } else {
                    line += "arg" + i + ": " + t.token
                }
                i += 1
            }
        }
    }
    line += ": " + returnType
    push(stack, line, isMethod ? "METHOD" : "MEMBER", memberName, !!typeVariable)

    while (source.charAt(offset) !== "\n") offset += 1

    return {
        source: source,
        offset: offset,
        stack: stack,
    }
}

function parseClass(source, offset, stack, classType) {
    var t = nextToken(source, offset, stack)
    if (t.token !== "class" && t.token !== "interface") return null
    offset += t.skip
    var line = classType + t.token + " "

    t = nextToken(source, offset, stack)
    offset += t.skip
    var className = t.token
    line += className.split(".").reverse()[0]
    while (t = nextToken(source, offset, stack)) {
        line += " " + t.token
        offset += t.skip
        if (t.token === "{") break
    }
    push(stack, line, "BEGIN", "")

    var scope = ""
    while (t = nextToken(source, offset, stack)) {
        if (t.token === "}") {
            offset += t.skip
            push(stack, "}\n", "END", "")
            break
        } else if (t.token === "public" || t.token === "protected") {
            scope = t.token + " "
            offset += t.skip
        } else if (t.token === className && source.charAt(offset + t.skip) === "(") {
            offset += t.skip
            var line = "    constructor"
            var i = 0
            while (t = nextToken(source, offset, stack)) {
                offset += t.skip
                if (t.token === "(") {
                    line += "("
                } else if (t.token === ")") {
                    line += ")"
                    break
                } else if (t.token === ",") {
                    line += ", "
                } else {
                    if (t.token.endsWith("...")) {
                        line += "...arg" + i + ": " + t.token.replace("...", "[]")
                    } else {
                        line += "arg" + i + ": " + t.token
                    }
                    i += 1
                }
            }
            push(stack, line.replace(/^(\s+)/, "$1" + scope), "CONS", "")
            scope = ""
            while (source.charAt(offset) !== "\n") offset += 1
        } else {
            var context = parseClassMember(source, offset, stack)
            if (!context) return null
            source = context.source
            offset = context.offset
            stack = context.stack
            push(
                stack,
                stack[stack.length - 1].replace(/^(\s+)/, "$1" + scope),
                stack[stack.length - 1].type,
                stack[stack.length - 1].name,
                stack[stack.length - 1].generic
            )
            stack.splice(stack.length - 2, 1)
            scope = ""
        }
    }

    return {
        source: source,
        offset: offset,
        stack: stack,
    }
}

function parse(source, offset, stack) {
    var type = ""
    while (offset < source.length) {
        var next = nextToken(source, offset, stack)
        var token = next.token
        var skip = next.skip
        if (token === "final" || token === "public") {
            offset += skip
        } else if (token === "abstract") {
            type += token + " "
            offset += skip
        } else if (token === "class" || token === "interface") {
            context = parseClass(source, offset, stack, type)
            if (!context) return { stack: stack }
            source = context.source
            offset = context.offset
            stack = context.stack
            type = ""
        } else {
            offset += skip
        }
    }
    return { stack: stack }
}

module.exports = function(source) {
    var stack = parse(source, 0, []).stack
    var newStack = []
    var memberMap = {}
    for (var i = 0; i < stack.length; i++) {
        var line = stack[i]
        switch (line.type) {
            case "BEGIN":
                memberMap = {}
                newStack.push(line.toString())
                break
            case "CONS":
                if (memberMap["&"]) {
                    memberMap["&"] = "    constructor(...args: any[])"
                } else {
                    memberMap["&"] = line.toString()
                }
                break;
            case "MEMBER":
            case "METHOD":
                if (memberMap[line.name]) {
                    memberMap[line.name] = `    ${line.name}<T>(...args: any[]): any`
                } else {
                    memberMap[line.name] = line.toString()
                }
                break
            case "END":
                Object.keys(memberMap).forEach(function(key) {
                    newStack.push(memberMap[key])
                })
                newStack.push(line.toString())
                break
            default:
                console.error("Invalid stack")
                process.exit(1)
        }
    }
    return newStack.join("\n").replace(/<any extends (\S+)>/g, "<$1>")
}
