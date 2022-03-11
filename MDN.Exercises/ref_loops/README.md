## Conditionals - references

* [MDN: Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_codes)

* [MDN: `break` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break), read [`break` in `label`-ed blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#break_in_labeled_blocks).
 
* [MDN: `continue` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue), read [using `continue` with a `label`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#using_continue_with_a_label).
 
* [MDN: `label` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label). The labeled statement can be used with `break` or `continue` statements. 
 
* [MDN: ]()
 
* [MDN: ]()

## Exercises and the most interesting parts

**1.** Draw 100 random circles or squares:

* JavaScript file: [example_drawRandomItems.js](./example_drawRandomItems.js).

* Live example: [here](./loops.index.html#drawRandomItems).

**2.** One example where the *standard* `for` loop could be preferred over the `for..of` or `for..in` loops.

* The desired output is well formatted text sentence, as *My cats are called Pete, Biggles, Jasmine and Tom.* Here are the input variables.

    ```js
    const myCats = ['Pete', 'Biggles', 'Jasmine', 'Tom'];
    const msg = `My cats are called `;
    ```

* `for..of` solution - we can't provide easily a well formatted output.

    ```js
    let msgForOf = msg;
    for (const cat of myCats) {
        msgForOf = `${msgForOf}${cat}, `;
    }
    console.log(msgForOf);
    // My cats are called Pete, Biggles, Jasmine, Tom,
    ```

* Solution by the standard `for` loop - most useful and simple in this case.

    ```js
    let msgFor = msg;
    for (let i = 0; i < myCats.length; i++) {
        if (i === myCats.length - 1) msgFor = `${msgFor}${myCats[i]}.`;
        else if (i === myCats.length - 2) msgFor = `${msgFor}${myCats[i]} and `;
        else msgFor = `${msgFor}${myCats[i]}, `;
    }
    console.log(msgFor);
    // My cats are called Pete, Biggles, Jasmine and Tom.
    ```

* `for..in` solution - almost the same as the above, but note the we need to convert the `index` to a number.

    ```js

    let msgForIn = msg;
    for (const index in myCats) {
        const i = Number(index);
        if (i === myCats.length - 1) msgForIn = `${msgForIn}${myCats[i]}.`;
        else if (i === myCats.length - 2) msgForIn = `${msgForIn}${myCats[i]} and `;
        else msgForIn = `${msgForIn}${myCats[i]}, `;
    }
    console.log(msgForIn);
    // My cats are called Pete, Biggles, Jasmine and Tom.
    ```

**3.** Exiting loops with `break;`. If you want to exit a loop before all the iterations have been completed, you can use the `break` statement. The `break` statement will immediately exit the loop (as it is when we use it with a `switch` statement) and make the browser move on to any code that follows it.

* Example task: [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break):

    > *Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find?* 

* JavaScript file: [example_search_contact_break_loop.js](./example_search_contact_break_loop.js).

* Live example: [here](./loops.index.html#contactsBreakLoop).

**4.** Accomplish the same ask as in **<3>** but by using the `.find()` method.

* JavaScript file: [example_search_contact_find.js](./example_search_contact_find.js).

* Live example: [here](./loops.index.html#contactsFind).