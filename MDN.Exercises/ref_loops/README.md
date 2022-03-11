## Looping code, references

* [MDN: Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_codes)

* [MDN: `break` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break), read [`break` in `label`-ed blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#break_in_labeled_blocks).
 
* [MDN: `continue` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue), read [using `continue` with a `label`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue#using_continue_with_a_label).
 
* [MDN: `label` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label). The labeled statement can be used with `break` or `continue` statements. 
 
* [MDN: `while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
 
* [MDN: `do..while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

* [MDN: **Loops and iteration** guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

* [MDN: `for..of` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

## Notes about the most interesting parts

* [Useful Looping Methods](./useful_looping_methods.js).

* [The standard `for` loop](./the_standard_for_loop.js).

* [The `while` and `do..while` loops](./while_and_do_while_loops.js).

**1.** Draw 100 random circles or squares:

* JavaScript file: [example_drawRandomItems.js](./example_drawRandomItems.js).

* Live example: [here](./loops.index.html#drawRandomItems).

**2.** An example where the *standard* `for` loop could be preferred over the `for..of` or `for..in` loops.

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

**3.** **Exiting loops with `break`.** If you want to exit a loop before all the iterations have been completed, you can use the `break` statement. The `break` statement will immediately exit the loop (as it is when we use it with a `switch` statement) and make the browser move on to any code that follows it.

* Example task: [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#exiting_loops_with_break):

    > *Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find?* 

* JavaScript file: [example_search_contact_break_loop.js](./example_search_contact_break_loop.js).

* Live example: [here](./loops.index.html#contactsBreakLoop).

**4.** Accomplish the same ask as in **<3>** but by using the `.find()` method.

* JavaScript file: [example_search_contact_find.js](./example_search_contact_find.js).

* Live example: [here](./loops.index.html#contactsFind).

**5.** **Skipping iterations with `continue`.** The `continue` statement works in a similar manner to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.

* Example task: [here](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#skipping_iterations_with_continue):

    > *Let's look at another example that takes a number as an input, and returns only the numbers that are squares of integers (whole numbers).* 

* JavaScript file: [example_return_squares_by_skip_loop_iteration.js](./example_return_squares_by_skip_loop_iteration.js).

* Live example: [here](./loops.index.html#squaresLoopContinue).

**6.** Achieve the same result as in **<2>**, but by using `while` and `do..while` loops.

* Here are the input variables.

    ```js
    const cats = ['Pete', 'Biggles', 'Jasmine'];
    const msg = 'My cats are called ';
    ```
* `while` loop solution.

    ```js
    let msgWhile = msg;

    let i = 0;

    while (i < cats.length) {
        if (i === cats.length - 1) msgWhile += `and ${cats[i]}.`;
        else msgWhile += `${cats[i]}, `;
        i++;
    }
    console.log(msgWhile);
    // My cats are called Pete, Biggles, and Jasmine.
    ```
* `do..while` loop solution.

    ```js
    let msgDoWhile = msg;

    let j = 0;

    do {
        if (j === cats.length - 1) msgDoWhile += `and ${cats[j]}.`;
        else msgDoWhile += `${cats[j]}, `;
        j++;
    } while (j < cats.length);
    console.log(msgDoWhile);
    // My cats are called Pete, Biggles, and Jasmine.
    ```
## Exercises

**Exercise 1.** Create list items:

* The task: [Loops 1](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops#loops_1),

* [HTML](./exercise_loops1.html),

* JavaScript added:

    ```js
    /**
     *  for.. solution:
     * 
        for (i = 0; i < myArray.length; i++) {
            const newLi = document.createElement('li');
            newLi.textContent = myArray[i];
            list.appendChild(newLi);
        }
    *
    *  for..of solution:
    *
        for (const entry of myArray) {
            const newLi = document.createElement('li');
            newLi.textContent = entry;
            list.appendChild(newLi);
        }
    *
    *  .forEach() solution:
    *
        myArray.forEach(entry => {
            const newLi = document.createElement('li');
            newLi.textContent = entry;
            list.appendChild(newLi)
        });

    *
    * .map().foreEach() solution [Here we have two loops!]:
    * 
        myArray.map(entry => {
            const newLi = document.createElement('li');
            newLi.textContent = entry;
            return newLi;
        }).forEach(item => list.appendChild(item));
    *
    *  .map() solution:
    */
    list.innerHTML = myArray.map(entry => `<li>${entry}</li>`).join('');
    ```

**Exercise 2.** Phone book:

* The task: [Loops 2](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops#loops_2),

* [HTML](./exercise_loops2.html),

* JavaScript added:

    ```js
    /**
     * .find() solution:
     * 
        const found = phonebook.find(obj => obj.name === name);
        para.innerHTML = `Name: <b>${found.name}</b>, Number: <b>${found.number}</b>.`;
     *
     * for..of and break solution:
     */
    for (const obj of phonebook) {
        if (obj.name === name) {
            para.innerHTML = `Name: <b>${obj.name}</b>, Number: <b>${obj.number}</b>.`;
            break;
        }
    }
    ```



**Exercise 3.** ...:

* The task: [Loops 3](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops#loops_3),

* [HTML](./exercise_loops3.html),

* JavaScript added:

    ```js
    /**
     * while solution:
     * 
        while (i > 1) {
            if (isPrime(i)) {
                para.innerHTML += `${i} <br>`;
            }
            i--;
        }
     *
     * for.. continue solution:
     */
    for (i; i > 2; i--) {
        if (!isPrime(i)) continue;
        para.innerHTML += `${i} <br>`
    }
    ```