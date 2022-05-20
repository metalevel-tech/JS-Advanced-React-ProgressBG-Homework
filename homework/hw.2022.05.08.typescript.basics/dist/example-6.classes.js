"use strict";
// - In TypeScript we define classes similarly to the ES6 class syntax.
// - But in TypeScript public parameters in a constructor is a shorthand
//   to automatically create properties with that name.
// - In TypeScript we can also define methods with the same syntax as in ES6,
//   including the usage of the 'private' keyword.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = "".concat(firstName, " ").concat(lastName);
    }
    Person.prototype.greet = function () {
        console.log("Hello, I'm ".concat(this.name, "."));
    };
    return Person;
}());
// - All properties and methods defined in parent class are
//   inherited from the derived class.
// - Each derived class that contains a constructor function
//   must call the super() constructor
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, college) {
        var _this = 
        // constructor(firstName: string, lastName: string, college: string) {
        _super.call(this, firstName, lastName) || this;
        _this.college = college;
        return _this;
    }
    Student.prototype.greet = function () {
        // If we want, we can reuse the parent's greet() method (if we want to extend it)
        _super.prototype.greet.call(this);
        console.log("I study in ".concat(this.college, "."));
        // Or we can just override it as it is in the ES6 JS class syntax
    };
    return Student;
}(Person));
var maria = new Person("Maria", "Smith");
var ivan = new Student("Ivan", "Ivanov", "MIT");
maria.greet();
ivan.greet();
