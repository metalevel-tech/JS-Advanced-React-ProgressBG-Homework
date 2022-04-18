// De-structuring assignments

// Assign variables from Array
let [a, b] = [1, 2];
console.log(a, b);  // 1 2

let [c, d] = [1, 2, 3, 4];
console.log(c, d);   // 1 2

// by using ...rest
let [e, ...f] = [1, 2, 3, 4];
console.log(e, f);   // 1 (3) [2, 3, 4]

// swapping variables values
let x = 1, 
    y =2;
[x, y] = [y, x];
console.log(x, y); // 2 1

//
console.log('*'.repeat(21));

// Assign variables from Objects
// There is a nice syntactical shortcut when 
// the property and the variable has the same name
const obj1 = {id: 153, label: 'abc'};

let {id} = obj1;
console.log(id);

let {label} = obj1;
console.log(label);

const obj2 = {p1: 'A', p2: 'B', p3: 'C'};
const {p1, p2, p3} = obj2;
console.log(p1, p2, p3);