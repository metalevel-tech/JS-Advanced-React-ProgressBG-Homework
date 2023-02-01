/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon",
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli",
    "🧀 cheese",
    "🥦 broccoli",
    "🌶️ hot sauce"
];

// const rul = [
//     "🌈 rainbow",
//     "🦄 unicorn",
//     "🍭 lollipops",
//     "🦄 unicorn",
//     "🍭 lollipops"
// ];

let start, end;

// 2.121855 ms
function removeDupesFromArray_1(arr = []) {
    const newArr = [];

    for (const entry of arr) {
        if (newArr.includes(entry)) continue;
        newArr.push(entry);
    }

    return newArr;
}

start = performance.now();
console.log(removeDupesFromArray_1(eggScrambleRecipe));
end = performance.now();
console.log(`${end - start} ms`);
// console.log(removeDupesFromArray_1(rul));

console.log("*".repeat(30));

// Use an object to track the new array includes,
// instead using the nesting loop newArr.includes(entry)
// 0.1757799 ms
function removeDupesFromArray_2(arr = []) {
    const obj = [];
    for (const entry of arr) {
        // if (obj[entry]) continue;
        obj[entry] = true;
    }

    const newArr = [];
    for (const key in obj) {
        newArr.push(key);
    }

    return newArr;
}
start = performance.now();
console.log(removeDupesFromArray_2(eggScrambleRecipe));
end = performance.now();
console.log(`${end - start} ms`);
// console.log(removeDupesFromArray_2(rul));

console.log("*".repeat(30));

// Similar to the above but using filter
// 0.1652799 ms
function removeDupesFromArray_3(arr = []) {
    const trackDupesObj = [];

    return arr.filter(entry => {
        if (trackDupesObj[entry]) return false;
        trackDupesObj[entry] = true; return true;
    });
}
start = performance.now();
console.log(removeDupesFromArray_3(eggScrambleRecipe));
end = performance.now();
console.log(`${end - start} ms`);
// console.log(removeDupesFromArray_3(rul));

console.log("*".repeat(30));

// By using a Set of items :)
// 0.15741600 ms
function removeDupesFromArray_4(arr = []) {
    return [...new Set(arr)];
}
start = performance.now();
console.log(removeDupesFromArray_4(eggScrambleRecipe));
end = performance.now();
console.log(`${end - start} ms`)
// console.log(removeDupesFromArray_4(rul));