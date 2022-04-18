## Regular Expressions, references

* [**regular-expressions.info**](https://www.regular-expressions.info/lookaround.html)

* [**regex101.com**](https://regex101.com/)

* [YouTube: Best of Fluent 2012: /Reg(exp){2}lained/: Demystifying Regular Expressions](https://www.youtube.com/watch?v=EkluES9Rvak&list=PL-BwA4EWrxLCZ73--QvjEd1IOkJsfTa05&index=1)

* [MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)


* [`RegExp()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) most popular instance methods:
  
  * [`rx.exec(str)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) - executes a search for a match in a specified string. Returns a result `array`, or `null`. **Example with [named capture groups](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups).**
  
  * [`rx.test(str)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) - executes a search for a match between a regular expression and a specified string. Returns `true` or `false` .

* [`String()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) most popular instance methods:

  * [`str.match(rx)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) - retrieves the result of matching a string against a regular expression.
  
    * `const res = str.match(/rx/)` - **returns an array like object** where `res[0]` contains the matched string.
  
    * `const res = str.match(/rx/g)` - **returns an array/iterator** of the matches - interchangeable of some simple usages of `str.matchAll(rx)` and `rx.exec(str)`.
    
  * [`str.matchAll(rx)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) - **returns an iterator** of all results matching a string against a regular expression, including capturing groups - interchangeable of `str.matchAll(rx)`. 

  * [`str.replace(rx, 'replacement')`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) - **returns a new string** with some or all matches of a `pattern` replaced by a replacement. The `pattern` can be a *string* or a *RegExp*, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced. With `RexExp` and the global `/g` flag (switch) it can be used of interchangeable of `str.replaceAll(rx)`

  * [`str.replaceAll(rx, 'replacement')`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) - **returns a new string** with all matches of a `pattern` replaced by a `replacement`. The `pattern` can be a *string* or a *RegExp*, and the `replacement` can be a string or a function to be called for each match.

  * [`str.search(rx)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search) executes a search for a match between a regular expression and this String object. **Returns the index of the first match** between the regular expression and the given string, **or `-1`** if no match was found.

    If you only want to know if it exists, use the similar `test()` method on the `RegExp` prototype, which **returns a boolean** and it is faster.

  * [`str.split(separator, limit)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - divides a `String` into an ordered list of substrings, puts these substrings into an array, and **returns the array**. The division is done by searching for a pattern; where the `pattern` is provided as the first parameter in the method's call.
 
    The `separator` can be a simple *string* or it can be a *RegExp*. If `separator` is a **regular expression** that contains capturing parentheses ( ), matched results are included in the array.


## Exercises and the most interesting parts

| Flag | Description | Corresponding property |
| --- | :-- | :-- | 
|`d` |	Generate indices for substring matches.	| `RegExp.prototype.hasIndices` |
|`g` |	Global search.	| `RegExp.prototype.global` |
|`i` |	Case-insensitive search.	|` RegExp.prototype.ignoreCase` |
|`m` |	Multi-line search.	| `RegExp.prototype.multiline` |
|`s` |	Allows `.` to match newline characters.	| `RegExp.prototype.dotAll` |
|`u` |	"unicode"; treat a pattern as a sequence of unicode code points.	| `RegExp.prototype.unicode` |
|`y` |	Perform a "sticky" search that matches starting at the current position in the target string. See `sticky`.	| `RegExp.prototype.sticky` |

* Note that the flags are an integral part of a regular expression. They cannot be added or removed later.

* Creating regular expressions by the `RegExp()` constructor is preferable in the cases where we need to create a regexp dynamically from a string, for example based on the user's input or some other variable.

    ```js
    let rxVar = '\b\d+?\b';
    let rxVarFlags = 'ig';
    const rh = new RegExp(rxVar, rxVarFlags);
    ```

  In all other cases we should prefer the literal syntax - it's shorter; it's faster - because the regex object is created once...
    ```js
    const rx = /\b\d+?\b/ig;
    ```

* Phone number exercise: [`exercise-1.validate-phone-number.html`](./exercise-1.validate-phone-number.html)

* [Exercises: homework/hw.2022.04.02](../../homework/hw.2022.04.02/)

* [Exercises: homework/hw.2022.04.03](../../homework/hw.2022.04.03/)