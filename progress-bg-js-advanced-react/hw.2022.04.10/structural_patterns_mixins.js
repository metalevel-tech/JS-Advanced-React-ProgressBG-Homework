// Mixins
// https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/StructuralPatterns/StructuralPatterns.html#/2

// Mixin Pattern represents an object (or a class) that defines a set of functions intended to be inherited from other sub classes.
// Mixins classes are considered 'abstract', as they will not themselves be instantiated.
// A class can inherit functionality from multiple mixins through multiple inheritance.
// Mixins are a form of object composition, where component features get mixed
//   into a composite object so that properties of each mixin become properties
//   of the composite object.

const mixin1 = {
    method1() {
        console.log(`I'm method1 from mixin1`);
    },
    method2() {
        console.log(`I'm method2 from mixin1`);
    }
}

const mixin2 = {
    method3() {
        console.log(`I'm method3 from mixin2`);
    }
}

// Use Object.assign()
const mixedObj_A = Object.assign({ id: 'A' }, mixin1, mixin2)
console.log(mixedObj_A);    // {id: 'A', method1: ƒ, method2: ƒ, method3: ƒ}

// Use the ...spread operator
const mixedObj_B = { ...{ id: 'B' }, ...mixin1, ...mixin2 }
console.log(mixedObj_B);    // {id: 'B', method1: ƒ, method2: ƒ, method3: ƒ}

// Use a class that will produce Mixins(ed) objects
class MixinUser {
    constructor(id) {
        this.id = id;
        Object.assign(this, mixin1, mixin2);
    }
}
const mixedObj_C = new MixinUser('C');
console.log(mixedObj_C);    // MixinUser {id: 'C', method1: ƒ, method2: ƒ, method3: ƒ}

// Use a factory function that will produce Mixins(ed) objects
function mixinsFactory(id) {
    const obj = { id: id };
    Object.assign(obj, mixin1, mixin2);
    return obj;
}
const mixedObj_D = mixinsFactory('D');
console.log(mixedObj_D);    // {id: 'D', method1: ƒ, method2: ƒ, method3: ƒ}
