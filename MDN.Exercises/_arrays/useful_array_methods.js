/**
 * Read more
 * - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * - https://wiki.szs.space/wiki/JavaScript_Arrays
 * - https://dev.to/juniordevforlife/javascript-find-vs-filter-array-methods-5fge
 */

// An array used in the following examples
const array = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log( array );

// Find the length of an array
console.log( array.length );

// Get the first element of an array
console.log( array[0] );

// Get the last element of an array
console.log( array[array.length - 1] );

// Change an element of an array
array[1] = 'MILK';
array[2] = array[2].toUpperCase();
console.log( array );

// Access item in multidimensional array
const random = [
    'tree',
    {id: 1, value: 'A'},
    [10, 11, 12]
];
console.log( random );
console.log( random[2][1], random[2][2] ); // 11 12

// Finding item in an array - Find the index of an element
const birds = ['Parrot', 'Falcon', 'Owl', 'Pigeon', 'Pigeon', 'Queer'];
console.log( birds.indexOf('Owl') );        //  2
console.log( birds.indexOf('Rabbit') );     // -1  : such item doesn't exist

// Get the .lastIndexOf() when there are  more than items with same values
console.log( birds.indexOf('Pigeon') );     // 3
console.log( birds.lastIndexOf('Pigeon') ); // 4

// The both methods - .indexOf() and .lastIndexOf() - accepts second parameter
// which is the index where the search starts
console.log( birds.indexOf('Pigeon', 4) );                      // 4
console.log( birds.lastIndexOf('Pigeon', (birds.length - 3)) ); // 3

// Adding item to an array - Appending item to the end of an array: .pus()
const cities = ['Manchester', 'Liverpool'];
console.log( cities );

cities.push('Sofia');
console.log( cities );

// Add an item and get the new array length: .push()
const citiesNewLength = cities.push('Plovdiv', 'Chicago');
console.log( cities );
console.log( citiesNewLength ); // 5

// PUSH/ADD two or more items to an array 
let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
const myArrayNewLength = myArray.push('item1', 'item2', ...cities);
console.log('LOOOONG Array: ', myArrayNewLength, myArray)

// Add item to the beginning (start) of an array: .unshift()
const arrayOfLetters = ['C', 'D'];
console.log( arrayOfLetters );

arrayOfLetters.unshift('B')
console.log( arrayOfLetters );

// Add item to the beginning and get the new length: .unshift()
const arrayOfLettersNewLength = arrayOfLetters.unshift('A');
console.log( arrayOfLetters );
console.log( arrayOfLettersNewLength ); // 4

// Remove item from the end of an array: .pop()
arrayOfLetters.pop();
console.log( arrayOfLetters );

// Remove item from the end of an array and get the removed element: .pop()
const theLastElement = arrayOfLetters.pop();
console.log( arrayOfLetters );
console.log( theLastElement ); // C

// Remove the first element of an array: .shift();
arrayOfLetters.shift();
console.log( arrayOfLetters );

// Remove the first element of an array and get the removed element: .shift();
const theFirstElement = arrayOfLetters.shift();
console.log( arrayOfLetters );
console.log( theFirstElement ); // B

// Remove an item of an array by its index and .splice()
const someCities = ['Sofia', 'Plovdiv', 'Pazardjik', 'Sliven', 'Stara Zagora', 'Burgas', 'Vidin'];
console.log( someCities );

const indexOfPlovdiv = someCities.indexOf('Plovdiv');
if (indexOfPlovdiv !== -1) {
    someCities.splice(indexOfPlovdiv, 1);
}
console.log( someCities );

// Remove number of items of an array by index and length and .splice()
const indexOfPazardjik = someCities.indexOf('Pazardjik');
let removedItems;

if (indexOfPazardjik !== -1) {
    removedItems = someCities.splice(indexOfPazardjik, 2);
}
console.log( someCities );      // ['Sofia', 'Stara Zagora', 'Burgas', 'Vidin']
console.log( removedItems );    // ['Pazardjik', 'Sliven']

// Replace an item by .splice()
const replacedItem = someCities.splice(1, 1, 'Nova Zagora');
console.log( someCities );      // ['Sofia', 'Nova Zagora', 'Burgas', 'Vidin']
console.log( replacedItem );    // ['Stara Zagora']

// Empty an array - Remember array is reference type,
// some results could be confusing, so within the functions
// it is good practice (in most cases) to create a local
// copy of the array: localArr = [...arr];
let arrayWithLet = [1, 2, 3];
arrayWithLet = [];
console.log( arrayWithLet ); // (0) []

const arrayWithConst = [1, 2, 3];
arrayWithConst.length = 0;
console.log( arrayWithConst ); // (0) []

// Combining arrays: .concat()
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log( combined );            // (6) [1, 2, 3, 4, 5, 6]

// Combine by the ...spread operator (note the reversion is intentional)
const combinedBySpread = [...second, ...first];
console.log( combinedBySpread );    // (6) [4, 5, 6, 1, 2, 3]

// Combine by .push() -- NOTE here the original array is changed
const firstPushCopy = [...first];

const combinedByLength = firstPushCopy.push(...second, 'more1', 'more2');
console.log( 'PUSH COMBINE...:' );
console.log( combinedByLength, firstPushCopy );

// Create a copy of array by .slice() 
// and by the ...spread operator
const firstCopy = first.slice();
const secondCopy = [...second];
console.log(firstCopy, secondCopy); // (3) [1, 2, 3] (3) [4, 5, 6]


// .join(IFS); JOIN array to string
const numbersJoin = [...firstCopy, ...secondCopy].join('-');
console.log( numbersJoin );          // 1-2-3-4-5-6

// .toString(); Joining array elements to a strung, but the IFS is always ','
const numbersToString = [...firstCopy, ...secondCopy].toString();
console.log( numbersToString ); // 1,2,3,4,5,6

// .split(IFS); SPLIT array to string
const numbersSplit = numbersToString.split(',');
console.log( numbersSplit );        // (6) ['1', '2', '3', '4', '5', '6']

//
// Iterating an array
//

// Accessing every item: for...of loop
const someBirds = ['Parrot', 'Pigeon', 'Falcon', 'Queer'];

for (const bird of someBirds) {
    console.log( bird );
}

// Accessing every item: .forEach()
// !The method doesn't change the original array!
const forEachCallback = (element, index) => {
    console.log( `HERE IT IS!! -- ${++index} -- ${element.toUpperCase()}` ); 
};

someBirds.forEach(forEachCallback);

// Array .map() :operates with the value of the item and return it as item;
// !The method returns a new array and doesn't change the original array!
function createListItems(item) {
    return `<li>${item}</li>`; 
}

const listOfSomeBirds = someBirds.map(createListItems);
console.log( listOfSomeBirds.join(' ') ); // Join the array to string with whitespace as delimiter

// MAP: Array .map() : double the numbers example
const someNumbers = [1, 2, 3, 4, 5];
console.log( someNumbers );

const double = (number) => { return number * 2; };

const someNumbersDoubled = someNumbers.map( double );
console.log( someNumbersDoubled );

// FILTER: Array .filter((item, index, arrayItself) => {...}) :operate with the value of the item and return the same item,
// if the call back function returns 'true' or 'truthy'...
// !The method returns a new array and doesn't change the original array!
const randomNumbers = [54, 64, 23, 89, 121, 23, 90, 32];
console.log( randomNumbers );

const filterNumbersGreaterThen50 = (number) => { return number > 50; };

const randomNumbersFiltered = randomNumbers.filter(filterNumbersGreaterThen50);
console.log( randomNumbersFiltered );

// FIND: Array .find((item, index, thisArg) => {...}) :Find objects with certain properties in an array
// !The method returns a new array and doesn't change the original array!
// !Returns undefined if nothing found!
//
// In some cases the .find() method could be used as conjunction of .filter()
// and in these cases .find() will be faster and convenient.
// This is because .find() will return _just_the_first_occurrence! and will be returned as object.
const searchedArray = [
    {id: 1, value: 'cde'},
    {id: 2, value: 'abc'},
    {id: 3, value: 'ytz'},
    {id: 4, value: 'abc'}
];

const findCallback1 = (obj) => { return obj.value === 'cde'; };
const found1 = searchedArray.find(findCallback1);
console.log( found1, found1.id, found1.value);      // {id: 1, value: 'cde'} 1 cde

const findCallback2 = (obj) => { return obj.value === 'abc'; };
const found2 = searchedArray.find(findCallback2);   // Note the second element with .value:'abc' (.id:4) is ignored
console.log( found2, found2.id, found2.value);      // {id: 2, value: 'abc'} 2 abc 

// FIND INDEX: .findIndex() :Return the array index of the founded object 
// !Returns undefined if nothing found!
const findIndexCallback = (obj) => { return obj.value === 'abc'; };
const indexFound = searchedArray.findIndex(findIndexCallback);
console.log( indexFound );      // 1    // Note the second element with .value:'abc' (.id:4) is ignored

// REDUCE: Using for of loop
const myNumbers = [1, 2, 3, 4, 5, 6, -5];
let sumByForOf = 0;

for (const number of myNumbers) {
    sumByForOf += number;
}
console.log( sumByForOf );      // 16

// REDUCE: Using .reduce() 
//               .reduce((sum, current) => { sum += current; }, <sum init value>);
// when the <sum init value> is omitted 'sum' will be initialized
// with the first element of the array
// var. 1
let sumByReduce = myNumbers.reduce(function(accumulator, value) { return accumulator += value; }, 0);
// var. 2
sumByReduce = myNumbers.reduce((accumulator, value) => { return accumulator += value; });
// var. 3
sumByReduce = myNumbers.reduce((accumulator, value) => accumulator + value);
// Identical result of the three variants:
console.log( sumByReduce );     // 16

//
// Sorting arrays of NUMBERS
//
const numbers = [2, 3, 1, 5, 4];

// Use .sort()
numbers.sort();
console.log( numbers );

// Use .revers()
numbers.reverse();
console.log( numbers );

//
// Sorting arrays of REFERENCE TYPES (Objects)
//
const numbersObj = [
    {id: 1, name: 'Node.js'},   // When sorting by name this should be Third - see the ASCII table
    {id: 3, name: 'C++'},       // When sorting by name this should be First
    {id: 2, name: 'JavaScript'} // When sorting by name this should be Second
];

// Use .sor( callbackFn() )
numbersObj.sort(function(a, b) {
    // remove case sensitivity
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
// Log:
    numbersObj.forEach((obj) => { console.log(obj); });
    console.log('---------');

// Use .sor( callbackFn() ) !!! Simpler solution
// !!! This example will arrange the elements 1 line!!!
// Note in the above example the 'if' does the sane automatically...
//
// Reverse order, note: (a, b)
numbersObj.sort((a, b) => b.name[0].toLowerCase().charCodeAt(0) - a.name[0].toLowerCase().charCodeAt(0));
// Log:
    numbersObj.forEach((obj) => { console.log(obj); });
    console.log('---------');
//
// With case sensitivity but simplified at maximum - right order, note: (b, a)
numbersObj.sort((b, a) => b.name.charCodeAt() - a.name.charCodeAt());
// Log:
    numbersObj.forEach((obj) => { console.log(obj); });


//
// Testing the elements of the Whole Array
//

// Use .every() :Test for all elements
const shortArray = [3, 2, 1, 4];
//
const allPositive = shortArray.every((value) => { return value >= 0 } );
// even shorter syntax
const allPositiveShort = shortArray.every(val => val >= 0);
//
console.log( allPositive, allPositiveShort ); // true true

// Use .some() :Tes for at least one element
shortArray[3] = -7;
// The most simpler syntax from the above:
const atLeastOneNegative = shortArray.some(val => val < 0);
//
console.log( atLeastOneNegative );  // true