## Typescript references

* Official site: [typescriptlang.org](https://www.typescriptlang.org/)
* Official docs: [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [TypeScript in Visual Studio Code](https://code.visualstudio.com/docs/languages/typescript)


## Typescript features

* Static typing - In dynamically typed languages(JavaScript, Python, PHP, Ruby...) types of variables are generally not known at compile time. In a statically typed language, variables, parameters, and objects members (i.e properties and methods) have types that the compiler knows at compile time. The compiler use that information to perform type checks and to optimize the compiled code. TypeScript introduces static types into JavaScript!

  * Catch more errors at compile time (and less bugs at run time)

  * It helps IDEs with code-completion (IntelliSense)

  * Type annotations are useful for documentation, which helps large teams to collaborate

  * Static Typing in JavaScript makes it less "ugly" for developers coming from Java, #C, and so on.

* Interfaces

* Decorators

* Transpile into old ES versions (`tsc` can be uses as substitution of `babel`)

* Many others...

## Install Typescript

```bash
# Local installation
npm install typescript
npx tsc -v
```

```bash
# Global installation
sudo npm install typescript -g
tsc -v
```

## Basic usage

```bash
# Convert .ts to .js
tsc src/example-1.ts
```

```bash
# Watch a directory...
tsc -w src/* --outDir dist/
tsc --watch src/* --outDir dist/ --target es5 # Default es3
```

## Init TSC

```bash
cd typescript.demo.proj
mkdir {dist,src}
```

Create the `package.json` with some default settings:

```bash
npm init -y
```

Then update the scripts section in `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start": "npm run build -- -w"
},
```

Create the `tsconfig.json` with some default settings:

```bash
tsc --init
```

Then update the scripts section in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": false,
    "module": "commonjs",
    "target": "es5",
  },
  "exclude": [
    "node_modules"
  ]
}
```

## TypeScript Types

JavaScript have several native types, which also exist in TypeScript:

* `boolean` - true/false
* `number` - integers, floats, Infinity and NaN
* `[]` - arrays of other types
* `{}` - object literal
* `undefined` - for not set value

But TypeScript also adds:

* `enum` - enumerations like { Red, Blue, Green }
* `any` - use any type
* `void` - nothing

Example:

* [`src/example-4.types.ts`](src/example-4.types.ts) > [`dist/example-4.types.js`](dist/example-4.types.js)

Reference: 

* [Basic Types @typescriptlang.org](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Functions

Example:

* [`src/example-5.functions.types.ts`](src/example-5.functions.types.ts) > [`dist/example-5.functions.types.js`](dist/example-5.functions.types.js)

## Classes

Example:

* [`src/example-6.classes.ts`](src/example-6.classes.ts) > [`dist/example-6.classes.js`](dist/example-6.classes.js)

Reference:
* [Classes @typescriptlang.org](https://www.typescriptlang.org/docs/handbook/classes.html)

## Interfaces

* [`src/example-7.interfaces.ts`](src/example-7.interfaces.ts) > [`dist/example-7.interfaces.js`](dist/example-7.interfaces.js)

* [`src/example-8.class.as.interface.ts`](src/example-8.class.as.interface.ts) > [`dist/example-8.class.as.interface.js`](dist/example-8.class.as.interface.js)

## Directory tree tree

 * [package-lock.json](./package-lock.json)
 * [package.json](./package.json)
 * [tsconfig.json](./tsconfig.json)
 * [src](./src)
   * [example-1.ts](./src/example-1.ts)
   * [example-2.ts](./src/example-2.ts)
   * [example-3.hello.ts](./src/example-3.hello.ts)
   * [example-4.types.ts](./src/example-4.types.ts)
   * [example-5.functions.types.ts](./src/example-5.functions.types.ts)
   * [example-6.classes.ts](./src/example-6.classes.ts)
   * [example-7.interfaces.ts](./src/example-7.interfaces.ts)
   * [example-8.class.as.interface.ts](./src/example-8.class.as.interface.ts)
 * [dist](./dist)
   * [example-4.js](./dist/example-4.js)
   * [example-1.js](./dist/example-1.js)
   * [example-2.js](./dist/example-2.js)
   * [example-3.hello.js](./dist/example-3.hello.js)
   * [example-4.types.js](./dist/example-4.types.js)
   * [example-5.functions.types.js](./dist/example-5.functions.types.js)
   * [example-6.classes.js](./dist/example-6.classes.js)
   * [example-7.interfaces.js](./dist/example-7.interfaces.js)
   * [example-8.class.as.interface.js](./dist/example-8.class.as.interface.js)
 * [README.md](./README.md)
