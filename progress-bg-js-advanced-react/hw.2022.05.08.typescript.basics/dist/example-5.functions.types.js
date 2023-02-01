"use strict";
// - We can add types to each of the parameters and to the function's return type.
// - TypeScript can figure the return type out by looking at the return statements,
//   so we can also optionally leave this off in many cases.
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
// Optional parameters
function greet1(firstName, lastName) {
    return lastName ? "Hello ".concat(firstName, " ").concat(lastName, "!") : "How are you, ".concat(firstName, "?");
}
console.log(greet1("John"));
console.log(greet1("John", "Doe"));
function greet2(firstName, lastName, age) {
    return lastName ? age ? "Hello ".concat(firstName, " ").concat(lastName, ", you are ").concat(age, " years old.") : "Hello ".concat(firstName, " ").concat(lastName) : "Hello ".concat(firstName);
}
console.log(greet2("John"));
console.log(greet2("John", "Doe"));
console.log(greet2("John", "Doe", 42));
