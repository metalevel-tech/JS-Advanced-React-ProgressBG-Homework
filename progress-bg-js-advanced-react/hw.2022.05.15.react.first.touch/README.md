## References

* Learn React: https://reactjs.org/

* Read: https://ibaslogic.com/react-tutorial-for-beginners/

* Create-react-app: https://create-react-app.dev/docs/deployment/

## JSX (JavaScript XML)

JSX code is handled by Babel ot TypeScript transpilers. ake note of the following about the JSX:

* You can use a valid JavaScript expression inside the JSX through curly braces, `{}`.
* In JSX, elements attributes, event handlers are always in `camelCase`. The few exceptions are `aria-*` and `data-*` attributes, which are lowercase.
* User defined components starts with capital letter: `<ListItem>`.


## Using React with NPM (react.demo.proj.manual/) 

```bash
mkdir -p react.demo.proj/{src,dist}
cd react.demo.proj/
npm init -y
npm i react react-dom webpack webpack-cli --save-dev
```

```bash
# Then create it by hand...
touch index.html webpack.config.js src/index.js 
```

```bash
npx webpack --mode production
```

```bash
npm run build
```

## Create-react-app CLI (react.demo.proj.create-react-app/) 

* When learning react is convenient to bootstrap your application with create-react-app
* It’s an opinionated yet zero-configuration starter kit for React introduced by Facebook in 2016.
* `create-react-app` allows you to abstract from the the tooling and configuration, and to focus to the application implementation

Using `npx`:

```bash
npx create-react-app react.demo.proj.create-react-app.try-1
cd react.demo.proj.create-react-app/
```

Using global installation:

```bash
sudo npm i create-react-app -g
create-react-app react.demo.proj.create-react-app.try-2
cd react.demo.proj.create-react-app.try-2/
```

## Directory tree tree

 * [react.demo.proj.npm.manual](./react.demo.proj.npm.manual)
   * [package-lock.json](./react.demo.proj.npm.manual/package-lock.json)
   * [src](./react.demo.proj.npm.manual/src)
     * [index.js](./react.demo.proj.npm.manual/src/index.js)
   * [package.json](./react.demo.proj.npm.manual/package.json)
   * [webpack.config.js](./react.demo.proj.npm.manual/webpack.config.js)
   * [dist](./react.demo.proj.npm.manual/dist)
     * [index.bundle.js.LICENSE.txt](./react.demo.proj.npm.manual/dist/index.bundle.js.LICENSE.txt)
     * [index.bundle.js](./react.demo.proj.npm.manual/dist/index.bundle.js)
   * [index.html](./react.demo.proj.npm.manual/index.html)
 * [react.demo.proj.create-react-app.try-1](./react.demo.proj.create-react-app.try-1)
   * [README.md](./react.demo.proj.create-react-app.try-1/README.md)
   * [public](./react.demo.proj.create-react-app.try-1/public)
     * [favicon.ico](./react.demo.proj.create-react-app.try-1/public/favicon.ico)
     * [index.html](./react.demo.proj.create-react-app.try-1/public/index.html)
     * [logo192.png](./react.demo.proj.create-react-app.try-1/public/logo192.png)
     * [logo512.png](./react.demo.proj.create-react-app.try-1/public/logo512.png)
     * [manifest.json](./react.demo.proj.create-react-app.try-1/public/manifest.json)
     * [robots.txt](./react.demo.proj.create-react-app.try-1/public/robots.txt)
   * [src](./react.demo.proj.create-react-app.try-1/src)
     * [App.css](./react.demo.proj.create-react-app.try-1/src/App.css)
     * [App.js](./react.demo.proj.create-react-app.try-1/src/App.js)
     * [App.test.js](./react.demo.proj.create-react-app.try-1/src/App.test.js)
     * [index.css](./react.demo.proj.create-react-app.try-1/src/index.css)
     * [index.js](./react.demo.proj.create-react-app.try-1/src/index.js)
     * [logo.svg](./react.demo.proj.create-react-app.try-1/src/logo.svg)
     * [reportWebVitals.js](./react.demo.proj.create-react-app.try-1/src/reportWebVitals.js)
     * [setupTests.js](./react.demo.proj.create-react-app.try-1/src/setupTests.js)
   * [package-lock.json](./react.demo.proj.create-react-app.try-1/package-lock.json)
   * [package.json](./react.demo.proj.create-react-app.try-1/package.json)
 * [react.demo.proj.in.html](./react.demo.proj.in.html)
   * [favicon.ico](./react.demo.proj.in.html/favicon.ico)
   * [index.html](./react.demo.proj.in.html/index.html)
   * [babel.jsx](./react.demo.proj.in.html/babel.jsx)
 * [README.md](./README.md)
 * [react.demo.proj.create-react-app.try-2](./react.demo.proj.create-react-app.try-2)
     * [README.md](./react.demo.proj.create-react-app.try-2/README.md)
     * [public](./react.demo.proj.create-react-app.try-2/public)
       * [favicon.ico](./react.demo.proj.create-react-app.try-2/public/favicon.ico)
       * [index.html](./react.demo.proj.create-react-app.try-2/public/index.html)
       * [logo192.png](./react.demo.proj.create-react-app.try-2/public/logo192.png)
       * [logo512.png](./react.demo.proj.create-react-app.try-2/public/logo512.png)
       * [manifest.json](./react.demo.proj.create-react-app.try-2/public/manifest.json)
       * [robots.txt](./react.demo.proj.create-react-app.try-2/public/robots.txt)
     * [src](./react.demo.proj.create-react-app.try-2/src)
       * [App.css](./react.demo.proj.create-react-app.try-2/src/App.css)
       * [App.js](./react.demo.proj.create-react-app.try-2/src/App.js)
       * [App.test.js](./react.demo.proj.create-react-app.try-2/src/App.test.js)
       * [index.css](./react.demo.proj.create-react-app.try-2/src/index.css)
       * [index.js](./react.demo.proj.create-react-app.try-2/src/index.js)
       * [logo.svg](./react.demo.proj.create-react-app.try-2/src/logo.svg)
       * [reportWebVitals.js](./react.demo.proj.create-react-app.try-2/src/reportWebVitals.js)
       * [setupTests.js](./react.demo.proj.create-react-app.try-2/src/setupTests.js)
     * [package-lock.json](./react.demo.proj.create-react-app.try-2/package-lock.json)
     * [package.json](./react.demo.proj.create-react-app.try-2/package.json)
