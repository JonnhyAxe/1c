import * as fs from "fs"

export function version(instdir: string) {
    return JSON.parse(fs.readFileSync(`${instdir}/package.json`, "utf-8")).version
}

export function help(instdir: string, status: number) {
    console.log()
    console.log(`
Version: ${version(instdir)}

Usage:
  1c help                               print this message
  1c version                            print the version number
  1c env                                check all prerequisites of 1c
  1c install                            install dependencies in package.json
  1c build [options] <entry>...         build one/multiple entries (.ts/.tsx)
  1c run [-w] [jjs options] <output>    run an output file (.js)

build options:
  -c <dir>          output build result in <dir>
  -o <file>         output build result to <file>
  --skipJDK         skip JDK definition checking
  -u                uglify build result
  -w                watch changes and re-build

run options:
  -w                watch changes and re-run
  jjs options       check out 'jjs -h' (must be after -w if used)
                    e.g. -J-Xms64m -J-Xmx256m -Dfile.encoding=UTF-8
    `.trim())
    console.log()
    process.exit(status)
}
