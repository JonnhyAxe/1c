var fs = require("fs")
var path = require("path")

var build = require("./commands/build")
var help = require("./commands/help")
var init = require("./commands/init")
var install = require("./commands/install")
var run = require("./commands/run")

var libdir = path.dirname(process.argv[1])
var libmod = libdir + (fs.existsSync(libdir + "/node_modules") ? "/node_modules" : "/..")
var command = process.argv[2]
var context = path.resolve(process.argv[3] || "")
var target = process.argv[3] && path.resolve(process.argv[3])

if (command === "init") init(context)
else if (command === "install:npm") install.npm()
else if (command === "install:mvn") install.mvn()
else if (command === "build:react") build.react(libdir, libmod, context)
else if (command === "build") build.entry(libdir, libmod, context)
else if (command === "watch") build.watch(libdir, libmod, context)
else if (command === "run" && target) run(target)
else if (command === "help") help(libdir)
else help(libdir, 1)