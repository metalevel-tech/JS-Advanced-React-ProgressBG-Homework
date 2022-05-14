var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " make an animal noise."));
    };
    return Animal;
}());
