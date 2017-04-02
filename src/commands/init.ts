import * as fs from "fs"

// package.json
const PACKAGE_JSON = `
{
  "dependencies": {
    "mockxhr": "^1.3.0"
  },
  "mvnDependencies": [
    "org.tinylog:tinylog:1.2"
  ]
}
`.trim()

// .gitignore
const _GITIGNORE = `
.gradle
build
build.gradle
lib
node_modules
tsconfig.json
yarn.lock
`.trim()

// tsconfig.json
const tsconfig = libdir => `
{
  "compilerOptions": {
    "jsx": "react",
    "lib": ["dom", "es2017"],
    "skipLibCheck": true,
    "target": "es5",
    "typeRoots": [
      "${libdir}/@types",
      "lib/@types",
      "node_modules/@types",
      "src/js/@types"
    ]
  },
  "include": [
    "${libdir}/@types/**/*.ts",
    "**/*.ts",
    "**/*.tsx"
  ]
}
`.trim()

export default function (libdir: string) {
    ["build", "lib", "lib/@types", "node_modules", "src"].forEach(dir => {
        console.log("mkdir " + dir)
        try {
            fs.mkdirSync(dir)
        } catch (err) {
            console.error(err.message)
        }
    });
    ["assets", "assets/img", "css", "html", "js", "js/entry", "js/@types"].forEach(dir => {
        console.log("mkdir src/" + dir)
        try {
            fs.mkdirSync("src/" + dir)
        } catch (err) {
            console.error(err.message)
        }
    });

    [
        ["package.json", PACKAGE_JSON],
        ["tsconfig.json", tsconfig(libdir)],
        [".gitignore", _GITIGNORE],
        ["src/assets/test.txt", ""],
        ["src/assets/img/test.jpg", ""],
        ["src/css/test.less", ""],
        ["src/html/test.html", "<!DOCTYPE html>"],
        ["src/js/entry/test.tsx", `import "../../css/test.less"`],
        ["src/js/entry/test.j.ts", `org.pmw.tinylog.Logger.info(java.lang.System.getProperty("java.version"))`],
        ["src/js/@types/test.d.ts", ""],
    ].forEach(([path, content]: string[]) => {
        if (!fs.existsSync(path)) {
            console.log("create " + path)
            fs.writeFile(path, content, err => err && console.log(err.message))
        }
    })
}