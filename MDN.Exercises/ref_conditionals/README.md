## Conditionals - references

* [MDN: Making decisions in your code - conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

* [MDN: `if...else` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
 
* [MDN: `switch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
 
* [MDN: GlobalEventHandlers`.onchange`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange)
 
* [MDN: HTMLElement: `change` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)

## Conditionals - some tests

**1.** If..else statement:

* Example file [conditionals.a_real_example_if_else_else-if.js](conditionals.a_real_example_if_else_else-if.js).

* Live example: [here](conditionals.a_real_example.index.html#ifElse).

**2.** Switch statement:

* Example file: [conditionals.a_real_example_switch_case.js](./conditionals.a_real_example_switch_case.js).

* Live example: [here](conditionals.a_real_example.index.html#switchCase).

**3.** Ternary operator:

* Example file: [conditionals.a_real_example_ternary_operator.js](./conditionals.a_real_example_ternary_operator.js).

* Live example: [here](conditionals.a_real_example.index.html#ternary).

## The most interesting parts

* The `'change'` event:

    ```js
    function setWeather() {...}
    select.addEventListener('change', setWeather);
    ```

* Another example wit the same `onchange` event:
 
    ```html
    <input type="text" placeholder="Type something here, then click outside of the field." size="50">
    <p id="log"></p>
    ```
    ```js
    const input = document.querySelector('input');
    const log = document.getElementById('log');

    input.onchange = handleChange;

    function handleChange(e) {
        log.textContent = `The field's value is
            ${e.target.value.length} character(s) long.`;
    }
    ```

    * Example file: [globalEventHandler.onchange.js](./globalEventHandler.onchange.js).

    * Live example [here](conditionals.a_real_example.index.html#onChangeDemo).