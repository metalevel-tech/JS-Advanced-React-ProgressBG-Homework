// Decorator: Dynamically augments the behavior of an existing functions or objects
// https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/StructuralPatterns/StructuralPatterns.html#/3

// How Decorator differs from Classical Inheritance?
// - The behavior is not added to all of the objects from the same class.
// - We can add behavior only to the object being decorated.

// Function decorator is a function which accepts 
// a base function and returns the decorated function.
// Example:

// the decorator function
function dateDecorator(callbackBaseFunction) {
    return function (...rest) {
        // decorating phase
        const d = new Date();
        const formattedDateStr = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
        console.log(formattedDateStr);

        // now call the base function, make sur the decorator function
        // will return the same result as the base function
        return callbackBaseFunction(...rest);
    }
}

// the function to be decorated
function helloWord(name, msg) {
    console.log(`Hello, ${name}! ${msg}`);
}
helloWord('Spas', 'Great day.')

helloWordDate = dateDecorator(helloWord);
helloWordDate('Igor', 'Nice day.')

console.log('*'.repeat(20));

// Object decoration
class Element {
    id;
    #hiddenContent;
    constructor(id, content) {
        this.id = id;
        this.#hiddenContent = content;
    }
    get content() {
        return this.#hiddenContent;
    }
}

const element_1 = new Element(1, 'ABC');

// object decorator, it could be much complex...
function objectDecorate(object) {
    object.description = `Element '${object.id}' with content: ${object.content}`;
}

objectDecorate(element_1);

console.log(element_1.content);
console.log(element_1.description);