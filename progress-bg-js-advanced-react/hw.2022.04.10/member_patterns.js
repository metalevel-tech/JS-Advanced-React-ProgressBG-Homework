// JS Members Patterns

// Concept classification
// - Public/Private/Privileged Members are concepts coming from class-based languages (Java, C++, ...)
// - A public object member is a member (i.e. object field) who is accessible outside the object itself.
// - Private members are those which are accessible only in the object itself and not from the outside.
// - By private members we can implement the principle of data encapsulation and information hiding
// - A privileged method is able to access the private variables and methods, and is itself accessible to the public methods and the outside.
//   In JavaScript Privileged Method is just a name for Public Method which access private data

// Fake private data - 'underscore as prefix' convention 
let _createdOn = new Date();

// The only way to really hide a variable from the outside in JS is to wrap the variable in a function!
var event = {
    // public
    name: 'Mariinsky Theatre Orchestra with Gergiev',
    date: '22.05.2017',
    time: '19.30',
    place: 'Bulgaria Hall',
    timestamp: (function () {
        //private
        var ts = Date();
        return ts;
    })()
}

// All local variables and parameters are private members for the constructor function
var Event = function () {
    //private data
    var timestamp = Date();

    // privileged method
    this.timestamp = (function () {
        return timestamp;
    })();

    // public
    this.name = 'Mariinsky Theatre Orchestra with Gergiev';
    this.date = '22.05.2017';
    this.time = '19.30';
    this.place = 'Bulgaria Hall';
}
// We can made such or even more flexible implementation with Factory function...
// Also we can use this approach within the ES6 Class Constructor function...
class ES6Class1 {
    constructor() {
        const creationTS = new Date();

        this.getTS = function() {
            return creationTS;
        }
    }
}
const obj1 = new ES6Class1();
console.log(obj1.getTS());

// Along with function and closures,
// within ES6 classes we can use the `#` notation 
// to create private property or method
class ES6Class2 {
    #privateData;

    constructor(inData) {
        this.#privateData = inData;
    }

    get printData() {
        return this.#privateData1;
    }
}
const obj2 = new ES6Class2('ABC');
console.log(obj2.printData); // ABC

// Another way to make a private member is by using WeakMap()
// This approach could me used with Factory and Constructor functions along with ES6 Classes.
// See the exercises at: homework/hw.2022.03.05/
const _sensitive = new WeakMap();

class DevConstructor {
    constructor(name, salary) {
        this.name = name;

        _sensitive.set(this, {
            salary,
            pwd: 'abracadabra'
        });
    }
    getSalary() {
        return _sensitive.get(this).salary;
    }
    increaseSalary(value, pwd) {
        if (pwd === _sensitive.get(this).pwd) {
            _sensitive.get(this).salary += value;
        } else
            console.log(`\nWrong password! ${this.name} salary will not be increased!\n`);
    }
}
const dev1 = new DevConstructor('Peter', 1000);
// But in this case we can access the private members in a way as this:
console.log(dev1.name, _sensitive.get(dev1));

// Private Members in Prototype: count instances example
// https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/membersPatterns/membersPatterns.html#/5/2
const Event = function(name) {
    // public
    this.name = name;
    this.id = Object.getPrototypeOf(this).countObj();
}
Event.prototype = (function() {
    // private
    let count = 1;

    // this is the actual prototype
    return {
        // privileged method
        countObj: () => count++
    }
})();

const events = [];
for (let i = 0; i < 5; i++) {
    events.push(new Event(`Event ${i}`));
}

for (const event of events) {
    console.log(`${event.name} has Id: ${event.id}`)
}

// Private Members in Prototype - do we need them?
// - Remember, that private members is a class-based OOP paradigm, not a JavaScript!
// - Whenever possible try to not using them
const EventConstruct = function(name) {
    // public
    this.name = name || '';
    this.id = EventConstruct.count++;
  
  }
  EventConstruct.count = 1;
  // ...