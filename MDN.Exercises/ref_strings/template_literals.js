// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const person = 'Spas';
const age = 41;
const score = 0.35;

/**
 * Multiline including vars and expressions:
 */
const multiLineVarsAndExpressions = `My name is ${person}.
My scores: ${score * 100}`;

console.log(multiLineVarsAndExpressions);

/**
 * Re-usable template:
 */
const greetFn = theName => `Hello ${theName}!`;
const greetUsr1 = greetFn(person);

console.log(greetUsr1);

// Nesting Templates
const isLargeScreen = false;
const itemCollapsed = true;
const classes = `...header ${(isLargeScreen) ? '' : `... icon-${(itemCollapsed) ? 'expand' : 'collapse'}`} ...`;

console.log(classes);

/**
 * Tagged templates
 */
// Tags allow you to parse template literals with a function.
// The first argument of a tag function contains an array of string values.
// The remaining arguments are related to the expressions.
function myTag(strings, personExp, ageExp) {
    let str0 = strings[0]; // "That "
    let str1 = strings[1]; // " is a "
    let str2 = strings[2]; // "."

    let ageStr;
    if ( ageExp > 99) {
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let myTagOutput1 = myTag`That ${person} is a ${age}.`
console.log(myTagOutput1);

let myTagOutput2 = myTag`That ${`Turtle`} is a ${105}.`
console.log(myTagOutput2);

// Tag functions don't even need to return a string!
function template(strings, ...keys) {
    return function(...values) {
        let dict = values[values.length -1] || {};
        let result = [strings[0]];

        keys.forEach(function(key, i) {
            let value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });

        return result.join('');
    }
}

let t1Closure = template`${0}${1}${0}!`;
//let t1Closure = template(["","","","!"],0,1,0);
console.log( t1Closure('Y', 'A') ); // "YAY!"

let t2Closure = template`${0} ${'foo'}!`;
//let t2Closure = template([""," ","!"],0,"foo");
console.log( t2Closure("Hello", {foo: "Word"}) );
console.log( t2Closure("Hello", {foo: "Spas"}) );

let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} old!`;
//let t3Closure = template(["I'm ", ". I'm almost ", " years old."], "name", "age");
console.log (t3Closure('foo', {name: person, age: (age + 1)}) ); //I'm Spas. I'm almost 42 old!
console.log (t3Closure({name: 'MDN', age: 30}) );                //I'm MDN. I'm almost 30 old!

/**
 * Raw strings
 */
function tag(string) {
    return string.raw[0];
}
console.log( tag`This is a \ncomplex \tstring\t...` );
console.log( `This \tis a \ncomplex \tstring\t...` );