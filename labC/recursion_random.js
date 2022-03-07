let bar = 0;
function foo() {
    let baz = Math.floor(Math.random() * 100);
    console.log(bar++, baz);
    foo();
}
foo();