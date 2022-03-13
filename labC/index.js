const { isAccessor } = require("typescript");

// Add property to an object by Object.defineProperty();
const user = {
    name: 'ada',
    age: 23
}
const keys0 = Object.keys(user);
console.log(keys0); // (2) ['name', 'age']

Object.defineProperty(user, 'new-prop', {
    value: 123,
    writable: true,
    enumerable: true,
});
const keys1 = Object.keys(user);
console.log(keys1); // (3) ['name', 'age', 'new-prop']

// omitting this in method
function Constructor(id) {
    this.id = id;
    this.showId = () => {
        console.log(`id as param: ${id}`);          // this wont be changed further...
        console.log(`id as property: ${this.id}`);
    }
}
const user1 = new Constructor(1);
user1.id = 99;
user1.showId();
// id as param: 1
// id as property: 99


