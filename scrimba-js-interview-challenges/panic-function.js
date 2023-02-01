/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

console.log("****** SOLUTION 1 ********");

function panic1(input = "") {
    return input.toUpperCase().replace(/ /g, " 😱 ") + "!";
}

// Test your function
console.log(panic1("I'm almost out of coffee"));
console.log(panic1("winter is coming"));


console.log("****** SOLUTION 2 ********");

function panic2(str) {
    return str.toUpperCase().split(" ").join(" 😱 ") + "!";
}

// Test your function
console.log(panic2("I'm almost out of coffee"));
console.log(panic2("winter is coming"))

