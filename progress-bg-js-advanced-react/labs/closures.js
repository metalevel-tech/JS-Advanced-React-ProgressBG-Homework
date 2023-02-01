// ProgressBG course JS Advanced by Iva Popova, Lesson 2
// - Allows a function which is executed outside its lexical scope,
//   to preserve the values of scoped variables.
// - Closure is observed when a function uses variable(s) from outer scope(s)
//   even while running in a scope where those variable(s) wouldn't be accessible.

function outer() {
    let x = 5;

    function inner() {
        console.log(x);
    }

    return inner;
}

let f = outer();
f(); // f can access the value of local x !