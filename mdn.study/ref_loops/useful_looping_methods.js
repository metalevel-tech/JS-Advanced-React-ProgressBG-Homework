// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

// Our 'cats' array used in the examples below
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
const mapA = [ ['a', 1], ['c', 3], ['b', 2] ];
const objA = {id: 1, name: 'A', model: 'B', length: '100', year: 1980 };
let i = 0;

// for..of loop - could be used over Arrays, Maps, Sets
console.log(`----- ${++i} ------`);
//
for (const cat of cats) {
    console.log(cat, '   \t:', cats.indexOf(cat));
}
//
for (const entry of mapA) {
    console.log(entry[0], entry[1], '\t:', entry);
}

// for..in loop could be used with Arrays too
console.log(`----- ${++i} ------`);
//
for (const index in cats) {
    console.log(cats[index], '   \t:', index);
}

// for..in loop is most useful with Objects (which are not iterable)
console.log(`----- ${++i} ------`);
//
for (const key in objA) {
    console.log(key, '\t:', objA[key]);
}

// .forEach() method
console.log(`----- ${++i} ------`);
//
const forEachCallbackLog = (item) => { console.log(`${item}`) };
cats.forEach(forEachCallbackLog);
//
const catsNew = [];
const forEachCallbackNewCats = (item, index) => catsNew[index] = `Name is: ${item}`;
cats.forEach(forEachCallbackNewCats);
//
catsNew.forEach(forEachCallbackLog);

// .map() method - to do something to each item in a collection
// and create a new collection containing the changed items.
console.log(`----- ${++i} ------`);
//
const mapCallback = item => item.toUpperCase();
const catsToUpperCase = cats.map(mapCallback);
//
catsToUpperCase.forEach(forEachCallbackLog);

// .filter() method - to test each item in a collection,
// and create a new collection containing only items that match.
console.log(`----- ${++i} ------`);
// If the callback function returns true, then the item is included in the new array.
const filterCallback = item => item.startsWith('L');
const catsFiltered = cats.filter(filterCallback);
//
catsFiltered.forEach(forEachCallbackLog);

// Chaining methods 
console.log(`----- ${++i} ------`);
//
cats.filter(filterCallback).map(mapCallback).forEach(forEachCallbackLog);
// not we cant chain .forEach(forEachCallbackLog) below, because
// forEachCallbackLog() doesn't return anything, within the current implementation.
const catsChainingMethods = cats.filter(filterCallback).map(mapCallback);
console.log( catsChainingMethods );