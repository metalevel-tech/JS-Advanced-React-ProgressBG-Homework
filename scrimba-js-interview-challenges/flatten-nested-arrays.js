/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but practice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

// const kittyScores = [
//     [39, 99, 76], 89, 98, [87, [56], [90, 13]],
//     [96, 95], 40, 78, 50, [63]
// ];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  [["🐟", "💐", "💐"], ["💵", "🏆"], "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];
let start, end;

// ~ 2.5 ms 'with and without recursion'
function flatten(arr) {
  let output = [];

  for (const entry of arr) {
    if (Array.isArray(entry)) output = [...output, ...entry];
    else output.push(entry);
  }

  // Even slower...
  // arr.forEach(entry => {
  //     if (Array.isArray(entry)) output = [...output, ...entry];
  //     else output.push(entry);
  // });

  for (let i = 0; i < output.length; i++) {
    if (Array.isArray(output[i])) {
      output.splice(i, 1, ...flatten(output[i]));
    }
  }

  return output;
}

// console.log(flatten(kittyPrizes));
// console.log(flatten(kittyScores));
start = performance.now();
console.log(flatten(kittyPrizes));
end = performance.now();
console.log(`${end - start} ms`);

console.log("*".repeat(30));

// ~ 0.3 ms 'with and without recursion', (5) is the depth of the recursion
function flatten_builtIn(arr) {
  return arr.flat(5);
}

// console.log(flatten_builtIn(kittyPrizes));
// console.log(flatten_builtIn(kittyScores));
start = performance.now();
console.log(flatten_builtIn(kittyPrizes));
end = performance.now();
console.log(`${end - start} ms`);

console.log("*".repeat(30));

// ~ 1.0 ms 'no recursion'
function flatten_courseSolution(arr) {
  const newArr = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      el.forEach((el) => newArr.push(el));
    } else {
      newArr.push(el);
    }
  });

  return newArr;
}

// console.log(flatten_courseSolution(kittyPrizes));
// console.log(flatten_courseSolution(kittyScores));
start = performance.now();
console.log(flatten_courseSolution(kittyPrizes));
end = performance.now();
console.log(`${end - start} ms`);

console.log("*".repeat(30));
