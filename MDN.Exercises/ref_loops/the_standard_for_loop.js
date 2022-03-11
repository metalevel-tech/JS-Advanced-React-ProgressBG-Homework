// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop

/**
 * The Standard FOR Loop

    for (initializer; condition; final-expression-executed-after-each-iteration) {
        // code to run
    }
 *
 * Note:  
 * - Within the `initializer`, we can`t use `const i = 0;`, because 
 *   the variable `i` will be changed within the `final-expression`
 *   at the end of each loop - eg. `i++`.
 * - In contrast in the `for (const i of items) {..}` loop the variable 
 *   have a block scope, which is terminated at each iteration`s end.
 *   and then a new scope for the next iteration is created.
 */
let i = 0;

// Calculating squares
console.log(`----- ${++i} ------`);
//
let resultStr = '';
function calculate() {
    for (let i = 1; i < 10; i++) {
        resultStr += `${i} x ${i} = ${i * i}\n`;
    }
    return resultStr += `\nFinished...\n`;
}
console.log( calculate() );

// Looping through a collection with the standard for loop
console.log(`----- ${++i} ------`);
//
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
//
for (let i = 0; i < cats.length; i++) {
    console.log( cats[i] );
}
//
// You might start with `i = 1`, then the condition should bg `i <= cats.length`
console.log(`----- ${++i} ------`);
//
for (let i = 1; i <= cats.length; i++) {
    console.log( cats[i] );
}

//
// An example where the *standard* `for` loop could be preferred over the `for..of`.
// The desired output is well formatted text sentence.
//
console.log(`----- ${++i} ------`);
//
const myCats = ['Pete', 'Biggles', 'Jasmine', 'Tom'];
let myFavoriteCats = `My cats are called `;

// for..of solution
let myFavoriteCatsForOf = myFavoriteCats;
for (const cat of myCats) {
    myFavoriteCatsForOf = `${myFavoriteCatsForOf}${cat}, `;
}
console.log(myFavoriteCatsForOf);
//
// My cats are called Pete, Biggles, Jasmine, Tom,

// standard for.. solution
let myFavoriteCatsFor = myFavoriteCats;
for (let i = 0; i < myCats.length; i++) {
    if (i === myCats.length - 1) myFavoriteCatsFor = `${myFavoriteCatsFor}${myCats[i]}.`;
    else if (i === myCats.length - 2) myFavoriteCatsFor = `${myFavoriteCatsFor}${myCats[i]} and `;
    else myFavoriteCatsFor = `${myFavoriteCatsFor}${myCats[i]}, `;
}
console.log(myFavoriteCatsFor);
//
// My cats are called Pete, Biggles, Jasmine and Tom.

// for..in solution almost the same as the above
let myFavoriteCatsForIn = myFavoriteCats;
for (const index in myCats) {
    const i = Number(index);
    if (i === myCats.length - 1) myFavoriteCatsForIn = `${myFavoriteCatsForIn}${myCats[i]}.`;
    else if (i === myCats.length - 2) myFavoriteCatsForIn = `${myFavoriteCatsForIn}${myCats[i]} and `;
    else myFavoriteCatsForIn = `${myFavoriteCatsForIn}${myCats[i]}, `;
}
console.log(myFavoriteCatsForIn);
//
// My cats are called Pete, Biggles, Jasmine and Tom.
