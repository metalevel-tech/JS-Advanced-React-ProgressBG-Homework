// Number to string;
let num1 = 123;
let str1 = num1.toString();
console.log( typeof(str1) ); //string

// String to number
let str2 = '123';
let num2 = Number(str2);
console.log( typeof(num2) ); //number

// Length
const string = 'This is my string.';
console.log( string.length ); //18

// Retrieve a Specific String Character
console.log( string[string.length - 4] + string[string.length - 3] + string[string.length - 2] ); //ing

// Test if a string contains substring
if (string.includes('is my')) {
    console.log( `Included OK:\t${string}` );
}

// Test if string start with
if (string.startsWith('Thi')) {
    console.log( `Start with OK:\t${string}` );
}

// Test if string end with
if (string.endsWith('ing.')) {
    console.log( `End with OK:\t${string}` );
}

// Extracting sub string from a string
console.log( string.slice(5, 10) ); //is my
console.log( string.slice(5) );     //is my string.

// Changing case
console.log( string.toLowerCase() );  //this is my string.
console.log( string.toUpperCase() );  //THIS IS MY STRING.

console.log( string.toLowerCase() );  //this is my string.
console.log( string.toUpperCase() );  //THIS IS MY STRING.

// Updating (replace) parts of the string
// .replace() doesn't change the original string
const str3 = string.replace('my', 'yours');
console.log( str3 ); //This is yours string.

// Update (replace) by RegExp()

const str4 = string.replace(/(^.*)( is my )(.*$)/, '$1 is not my $3');
console.log( str4 ); //This is not my string.

let str = "John Bull";
let regexp = /(\w+) (\w+)/;
console.log( str.replace(regexp, '$2, $1') ); //Bull, John