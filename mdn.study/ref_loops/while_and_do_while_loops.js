// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while

/**
 * The WHILE Loop
 * 
    initializer
    while (condition) {
        // code to run

        final-expression
    }
 * 
 *  This works in a very similar way to the for loop,
 *  except that the `initializer` variable is set before the loop,
 *  and the `final-expression` is included inside the loop after the code to run,
 *  rather than these two items being included inside the parentheses.
 */

const cats = ['Pete', 'Biggles', 'Jasmine'];
let msg = 'My cats are called ';

let msgWhile = msg;
let i = 0;

while (i < cats.length) {
    if (i === cats.length - 1) msgWhile += `and ${cats[i]}.`;
    else msgWhile += `${cats[i]}, `;
    i++;
}
console.log(msgWhile);
// My cats are called Pete, Biggles, and Jasmine.

/**
 * The DO..WHILE Loop
 * 
    initializer
    do {
        // code to run

        final-expression
    } while  (condition)
 * 
 *  The do...while loop is very similar, but provides a variation on the while structure.
 */

let msgDoWhile = msg;
let j = 0;

do {
    if (j === cats.length - 1) msgDoWhile += `and ${cats[j]}.`;
    else msgDoWhile += `${cats[j]}, `;
    j++;
} while (j < cats.length);
console.log(msgDoWhile);
// My cats are called Pete, Biggles, and Jasmine.