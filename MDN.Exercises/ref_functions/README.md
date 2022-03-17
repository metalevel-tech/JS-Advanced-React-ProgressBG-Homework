## Functions, references

* [MDN: Functions - Reusable blocks of code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

* [MDN: Functions (Guide)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
 
* [MDN: Functions (Guide): **Predefined functions**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#predefined_functions)
 
    * `eval()`
  
    * `uneval()`

    * `parseInt()`

    * etc.

* [MDN: Function (Glossary)](https://developer.mozilla.org/en-US/docs/Glossary/Function)

* [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
  
* [MDN: Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
 
* [MDN: IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
  
* [MDN: IIFE (Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
  
* [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
  

## Exercises and the most interesting parts

**No separate this.** Until arrow functions, every new function defined its own this value (a new object in the case of a constructor, undefined in strict mode function calls, the base object if the function is called as an "object method", etc.). This proved to be less than ideal with an object-oriented style of programming.

Function definitions are:

* function declaration

* function expression

Ways to call `()` a function are:

* as function,

* as method,

* as constructor function with the `new` operator,

* with `call()`, `apply` or `bind()`.

### Function declaration (hoisted)

```js
function fun() {
    // ...
}
```

### Function expression (not hoisted)

Named:
```js
const fun = function fun() {
    // ...
}
```

Anonymous:
```js
const fun = fun() {
    // ...
}
```

*Methods and callback functions are expressions.*


### Arrow function expressions

* Does not have its own bindings to `this` or `super`, and [**should not be used as methods**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#arrow_functions_used_as_methods).

* Does not have `new.target` keyword.

* [**Not suitable for `call`, `apply` and `bind` methods**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#call_apply_and_bind), which generally rely on establishing a scope.

* [**Can not be used as constructors**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#use_of_the_new_operator).

* [Can not use `yield`, within its body](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#use_of_the_yield_keyword).

* [No binding of arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#no_binding_of_arguments).

```js
// Traditional Anonymous Function
function (a) {
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

Multiline statements require body braces and return:

```js
param => {
  let a = 1;
  return a + param;
}
```

Multiple params require parentheses. Multiline statements require body braces and return:

```js
// Traditional Anonymous Function
function (a, b) {
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;
```

To r**eturn an object literal expression** requires parentheses around expression:

```js
params => ({foo: "a"}) // returning the object {foo: "a"}
```

**Rest parameters** are supported:
```js
(a, b, ...r) => expression
```
**Default parameters** are supported:
```js
(a=400, b=20, c) => expression
```

**Destructuring** within params supported:
```js
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
```