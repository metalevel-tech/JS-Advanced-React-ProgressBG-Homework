// - We can add types to each of the parameters and to the function's return type.
// - TypeScript can figure the return type out by looking at the return statements,
//   so we can also optionally leave this off in many cases.

function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1, 2));

// Optional parameters
function greet1(firstName: string, lastName?: string): string {
    return lastName ? `Hello ${firstName} ${lastName}!` : `How are you, ${firstName}?`;
}
console.log(greet1("John"));
console.log(greet1("John", "Doe"));

function greet2(firstName: string, lastName?: string, age?: number): string {
    return lastName? age? `Hello ${firstName} ${lastName}, you are ${age} years old.` : `Hello ${firstName} ${lastName}` : `Hello ${firstName}`;
}
console.log(greet2("John"));
console.log(greet2("John", "Doe"));
console.log(greet2("John", "Doe", 42));
 