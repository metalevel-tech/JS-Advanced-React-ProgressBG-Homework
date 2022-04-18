## JSON, references

* JavaScript Object Notation ([JSON](https://developer.mozilla.org/en-US/docs/Glossary/JSON)) is a data-interchange format. Although not a strict subset, JSON closely resembles a subset of JavaScript syntax. Though many programming languages support JSON, it is especially useful for JavaScript-based apps, including websites and browser extensions.

* [MDN: Working with JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

* [MDN: `JSON` object](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)

* [JSON.org: Introducing JSON](https://www.json.org/json-en.html)


## Notes about JSON

* JSON is purely a string with a specified data format — it contains only properties, no methods.

* JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.

* Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like [JSONLint](https://jsonlint.com/).

* JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be valid JSON.

* Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.

The [`JSON`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON#static_methods) object has the following *static methods*:

* [`JSON.parse(text[, reviver])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
  
  Parse the string `text` as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a `SyntaxError` to be thrown. The `reviver` option allows for interpreting what the replacer has used to stand in for other datatype.

* [`JSON.stringify(value[, replacer[, space]])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) Accepts an object as a parameter, and returns the equivalent JSON string.

  Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner. By default, all instances of `undefined` are replaced with `null`, and other unsupported native data types are censored. The `replacer` option allows for specifying other behavior.

* Create a deep copy of an object/array (remember the Arrays are Objects too):
  
    ```js
    const newObject = JSON.parse(JSON.stringify(existingObject));
    ```


## Exercises

* Exercise-1: [Active learning: Working through a JSON example](./exercise-1_working_through_a_JSON/) - [**end result**](./exercise-1_working_through_a_JSON/heroes.html).

* Exercise-2: [Test your skills JSON](./exercise-2-json-kittens/) - [**end result**](./exercise-2-json-kittens/exercise-json1-download-kittens.html).