// Lexical 'this' example

const lexicalThis = this;

const obj = {
    expressionFunction: function() {
        console.log(this === lexicalThis); 
    },
    arrowFunction: () => {
        console.log(this === lexicalThis);
    },
    expressionLogThis: function() {
        console.dir(this); 
    },
    arrowLogThis: () => {
        console.dir(this);
    }
}

obj.expressionFunction();   // false
obj.arrowFunction();        // true
obj.expressionLogThis();    // obj
obj.arrowLogThis();         // window, global

//
console.log('*'.repeat(21));

// Return an ({object}) from an arrow function
const fn = (id, label) => ({id, label});
const newObj = fn(1, 'ABC');
console.log(newObj);