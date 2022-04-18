## JavaScript modules, references

* [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

* [MDN at GitHub: JS Examples / Modules](https://github.com/mdn/js-examples/tree/master/modules)

## The most interesting parts

### [Applying the module to your HTML](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#applying_the_module_to_your_html)

Now we just need to apply the `main.js` module to our HTML page. This is very similar to how we apply a regular script to a page, with a few notable differences.

First of all, you need to include `type="module"` in the `<script>` element, to declare this script as a module. To import the main.js script, we use this:

```html
<script type="module" src="main.js"></script>
```

You can also embed the module's script directly into the HTML file by placing the JavaScript code within the body of the `<script>` element:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

The script into which you import the module features basically acts as the top-level module. If you omit it, Firefox for example gives you an error of "SyntaxError: import declarations may only appear at top level of a module".

You can only use `import` and `export` statements inside modules, not regular scripts.

### [Other differences between modules and standard scripts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts)

* You need to pay attention to local testing — if you try to load the HTML file locally (i.e. with a `file://` URL), you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.

* Also, note that you might get different behavior from sections of script defined inside modules as opposed to in standard scripts. This is because **modules use strict mode automatically**.

* **There is no need to use the defer attribute** (see [`<script>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attributes)) when loading a module script; modules are deferred automatically.

* Modules are **only executed once**, even if they have been referenced in multiple `<script>` tags.

* **Module features are imported into the scope of a single script — they aren't available in the global scope**. Therefore, you will only be able to access imported features in the script they are imported into, and you won't be able to access them from the JavaScript console, for example. You'll still get syntax errors shown in the DevTools, but you'll not be able to use some of the debugging techniques you might have expected to use.

### [Exporting module features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features)

The first thing you do to get access to module features is export them. This is done using the [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statement.

The easiest way to use it is to place it in front of any items you want exported out of the module, for example:
```js
export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
```
You can export `functions`, `var`, `let`, `const`, and  `classes`. They need to be top-level items; you can't use export inside a function, for example.

A more convenient way of exporting all the items you want to export is to use a single export statement at the end of your module file, followed by a comma-separated list of the features you want to export wrapped in curly braces. For example:

```js
export { name, draw };
```

### [Importing features into your script](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features)

Once you've exported some features out of your module, you need to [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) them into your script to be able to use them. The simplest way to do this is as follows:

```js
import { name, draw } from './modules/square.js';
```
Once you've imported the features into your script, you can use them just like they were defined inside the same file. The following is found in `main.js`, below the import lines:

```js
import { name, draw } from './modules/square.js';

console.log(name);
const shape1 = draw(myCanvas.ctx, 50, 50, 100, 'blue')
```

### [Renaming imports and exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#renaming_imports_and_exports)

Inside your `import` and `export` statement's curly braces, you can use the keyword `as` along with a new feature name, to change the identifying name you will use for a feature inside the top-level module.

Export as:
```js
// inside module.js
export {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName
};
```
```js
// inside main.js
import { newFunctionName, anotherNewFunctionName } from './modules/module.js';
```
Import as:
```js
// inside module.js
export { function1, function2 };
```
```js
// inside main.js
import { function1 as newFunctionName, 
         function2 as anotherNewFunctionName } from './modules/module.js';
```

### [Default exports versus named exports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#default_exports_versus_named_exports)

`default export` — this is designed to make it easy to have a default function provided by a module, and also helps JavaScript modules to interoperate with existing CommonJS and AMD module systems.

In the module file:
```js
export default randomSquare;
```
Note the lack of curly braces.

We could instead prepend export default onto the function and define it as an anonymous function, like this:
```js
export default function(ctx) {
  // ...
}
```
Over in our `main.js` file, we `import` the `default function` using this line:
```js
import randomSquare from './modules/square.js';
```
Again, note the lack of curly braces. This is because there is only one default export allowed per module, and we know that `randomSquare` is it. The above line is basically shorthand for:
```js
import {default as randomSquare} from './modules/square.js';
```

***Note we can have named export/import along with default ones.***

### [Creating a module object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#creating_a_module_object)

To import each module's features inside a module object we can use the following syntax form:
```js
import * as Module from './modules/module.js';
```

This grabs all the exports available inside `module.js`, and makes them available as members of an object `Module`, effectively giving it its own namespace. So for example:

```js
Module.function1()
Module.function2()
```

### [Aggregating modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aggregating_modules)

There will be times where you'll want to aggregate modules together. You might have multiple levels of dependencies, where you want to simplify things, combining several submodules into one parent module. This is possible using export syntax of the following forms in the parent module:

```js
export * from 'x.js'
export { name } from 'x.js'
```

Let's say we having a project with the following structure:
```yaml
index.html
main.js         # Use aggregated modules
modules/        : Modules
  canvas.js
  shapes.js     # Aggregate shape modules
  shapes/       : Submodules
    circle.js
    square.js
    triangle.js
```

Let's say the files of the Submodules category have identical structure as the structure of `circle.js`:

```js
class Circle {
    // ...
}
export { Circle };
```

Next up comes the aggregation part. Inside **`shapes.js`**, we include the following lines:

```js
export { Square } from './shapes/square.js';
export { Triangle } from './shapes/triangle.js';
export { Circle } from './shapes/circle.js';
```

These grab the exports from the individual submodules and effectively make them available from the `shapes.js` module.

> Note: The exports referenced in `shapes.js` basically get redirected through the file and don't really exist there, so you won't be able to write any useful related code inside the same file.

So now in the **`main.js`** file, we can get access to all three module classes by the following single line:

```js
import { Square, Circle, Triangle } from './modules/shapes.js';
```

### [Dynamic module loading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading)

This allows you to dynamically load modules only when they are needed, rather than having to load everything up front. This has some obvious performance advantages.

This new functionality allows you to call [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) as a function, passing it the path to the module as a parameter. It returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), which fulfills with a module object (see [Creating a module object](#creating-a-module-object)) giving you access to that object's exports, e.g.

```js
import('./modules/myModule.js')
  .then((Module) => {
      // Do something with the module. Let's say it has `objectFactory`
      // function exported (which accepts there arguments):
      const obj1 = Module.objectFactory('Object 1', 15 , 1);
  });
```

Note that, because the promise fulfillment returns a module object, the class is then made a subfeature of the object, hence we now need to access the constructor with `Module`. prepended to it, e.g.` Module.Square( ... )`:

```js
squareBtn.addEventListener('click', () => {
  import('./modules/square.js').then((Module) => {
    let square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  })
});
```

[**Top level await.**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#top_level_await) Top level await is a feature available within modules. This means the await keyword can be used. It allows modules to act as big asynchronous functions meaning code can be evaluated before use in parent modules, but without blocking sibling modules from loading.

Firstly we'll declare our color palette in a separate **`colors.json`** file:

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Then we'll create a module called **`getColors.js`** which uses a fetch request to load the `colors.json` file and return the data as an object.

```js
// fetch request
const colors = fetch('../data/colors.json')
  .then(response => response.json());

export default await colors;
```

Notice the last export line here.

We're using the keyword `await` before specifying the constant `colors` to export. This means any other modules which include this one will wait until `colors` has been downloaded and parsed before using it.

Let's include this module in our **`main.js`** file - we'll use `colors` when calling our *shape* functions:

```js
import colors from './modules/getColors.js';
import { Canvas } from './modules/canvas.js';

let circleBtn = document.querySelector('.circle');

// create the canvas and reporting list
let myCanvas = new Canvas('myCanvas', document.body, 480, 320);
myCanvas.create();
myCanvas.createReportList();

// draw a circle
circleBtn.addEventListener('click', () => {
  import('./modules/circle.js').then((Module) => {
    let circle1 = new Module.Circle(myCanvas.ctx, myCanvas.listId, 75, 200, 100, colors.green);
    circle1.draw();
    circle1.reportArea();
    circle1.reportPerimeter();
  })
});
```

This is useful because the code within `main.js` won't execute until the code in `getColors.js` has run. However it won't block other modules being loaded. For instance our `canvas.js` module will continue to load while `colors` is being fetched.