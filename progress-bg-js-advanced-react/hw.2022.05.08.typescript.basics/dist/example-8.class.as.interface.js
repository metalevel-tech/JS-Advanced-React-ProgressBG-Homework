"use strict";
// A class as an interface
// - A class declaration in TypeScript creates two things:
//   - `a type` representing instances of the class and
//   - `a constructor function`.
// - Consider next example and the error that throws:
var Duck = /** @class */ (function () {
    function Duck(name) {
        this.name = name;
        this.name = name;
    }
    Duck.prototype.quacks = function () { };
    Duck.prototype.swim = function () { };
    return Duck;
}());
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
        this.name = name;
    }
    Cat.prototype.quacks = function () { };
    return Cat;
}());
function isItDuck(obj) {
    // error TS2774: This condition will always return true since this function 
    // is always defined. Did you mean to call it instead?
    // obj.quacks?
    //     console.log(`${obj.name} is a Duck`) :
    //     console.log(`${obj.name} is not a Duck`);
}
var download = new Duck("Donald");
var tom = new Cat("Tom");
isItDuck(download);
isItDuck(tom);
