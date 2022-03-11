## Conditionals - references

* [MDN: Making decisions in your code - conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

* [MDN: `if...else` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
 
* [MDN: `switch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
 
* [MDN: GlobalEventHandlers`.onchange`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange)
 
* [MDN: HTMLElement: `change` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)

## Exercises

**1.** If..else statement:

* JavaScript file [conditionals.a_real_example_if_else_else-if.js](conditionals.a_real_example_if_else_else-if.js).

* Live example: [here](conditionals.index.html#ifElse).

**2.** Switch statement:

* JavaScript file: [conditionals.a_real_example_switch_case.js](./conditionals.a_real_example_switch_case.js).

* Live example: [here](conditionals.index.html#switchCase).

**3.** Ternary operator:

* JavaScript file: [conditionals.a_real_example_ternary_operator.js](./conditionals.a_real_example_ternary_operator.js).

* Live example: [here](conditionals.index.html#ternary).

**4.** More color choices by using switch..case statement:

* JavaScript file: [conditionals.active_learning_more_color_choices.js](./conditionals.active_learning_more_color_choices.js).

* Live example: [here](conditionals.index.html#switchCaseColorChoice).

**5.** Simple calendar:

* JavaScript file: [conditionals.active_learning_simple_calendar.js](./conditionals.active_learning_simple_calendar.js).

* Live example: [here](conditionals.index.html#simpleCalendar).



## The most interesting parts

* The `'change'` event:

    ```js
    function setWeather() {...}
    select.addEventListener('change', setWeather);
    ```

* Another example wit the same `onchange` event:

    * JavaScript file: [globalEventHandler.onchange.js](./globalEventHandler.onchange.js).

    * Live example [here](conditionals.index.html#onChangeDemo).
 
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

* In order to create `switch`..`case` statement with expression, you need to evaluate the switch's test to `true`. The following pieces of code will do the same job - [reference](https://www.freecodecamp.org/news/javascript-switch-statement-with-js-switch-case-example-code/):


    ```js
    // Switch..case solution
    function testScore(score) {
        switch (true) {
            case score > 50 && score <= 100:
                console.log("Score is higher than 50");
                break;
            case score <= 50 && score >= 0:
                console.log("Score is 50 or lower");
                break;
            default:
                console.log("The Score is not in the range [0-100]!");
        }
    }
    ```

    ```js
    // If..else solution
    function testScore(score) {
        if (score > 50 && score <= 100) {
            console.log("Score is higher than 50");
        } else if (score <= 50 && score >= 0) {
            console.log("Score is 50 or lower");
        } else {
            console.log("The Score is not in the range [0-100]!");
        }
    }
    ```
