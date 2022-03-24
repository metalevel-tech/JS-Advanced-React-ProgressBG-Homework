/**
 * Create 'super' 'class' Person
 */
class Person {
    // field declaration: list of the members of the new objects
    name;
    age;
    #password;

    // model of the new objects that will be constructed by this class
    constructor(name = 'anonymous', age = 0, password) {
        this.name = name;
        this.age = age;
        this.#password = password;
        this.constructor.counter();
    }
    
    // Model of the prototype of the new objects
    get password()  {
        return this.#password;
    }
    set password(value)  {
        this.#password = value;
        console.log(`${this.name}'s password was changed!`)
    }
    greet() {
        return `Hello, my name is ${this.name}. I'm ${this.age} years ols and I'm a ${this.constructor.name}!`;
    }

    // Model of the class (constructor object),
    // defined by static methods, properties and/or/within initialization blocks.
    // Note 'this' within the static members refers to the class itself.
    // See also "Using `this` and `super.property`" in MDN...
    static count = 0;                   // static property
    static counter() { this.count++; }  // static method
    static {                            // static initialization block (could be 0 or more)
        console.log(`The class ${this.name} was created.`);
        
        this.countByCreateMethod = 0;
        this.create = (name, age, password) => {
            this.countByCreateMethod++;
            return new this(name, age, password);
        };

        this.getCreated = () => this.countByCreateMethod;
    }
    static superName = this.name;
    static employeePercentage() {
        return `The ${this.name}s are ${Math.floor((this.count / Person.count) * 100)}% of all ${this.superName}s.`;
    };
}

/**
 * Check the number of the objects created by 'Person'
 */
console.log(Person.count);

/**
 *  Create a new object with the default values
 */
const person_0 = new Person();
console.log(person_0);

// Check the number of the objects created by 'Person'
console.log(Person.count);

/**
 * Create a new object with custom properties
 */
const person_1 = new Person('Pesho', 33, 'hasta la vista');
console.log(person_1);

// Check the number of the objects created by 'Person'
console.log(Person.count);

/**
 * Iterate over the members of the new object
 */
// Note the private member `#password` is not printed...
for (const key in person_1) { console.log(key, person_1[key]); }

/**
 * Access the private member `#password` via the 'getter' created
 */
console.log(person_1.password);

/**
 * Change the private member `#password`  via the 'setter' created
 */
person_1.password = 'new password'.toUpperCase();
console.log(person_1.password);

// Output the greeting message
console.log(person_1.greet());

/**
 * Create a new object by using Person.create();
 */
const person_2 = Person.create('Gogo', '27', 'secret password');
const person_3 = Person.create('Zaro', '39', 'nothing to show');
console.log(person_2);
console.log(person_3);
console.log(Person.count);          // 4
console.log(Person.getCreated());   // 2
console.log(person_3.greet());

/** 
 * Create 'sub' 'class' Developer
 * Inheritance: class NewClass extends Class {}
 */
class Developer extends Person {
    // field declaration: list of only the new members of the new objects
    // name;
    // age;
    // #password;
    #skills = [];

    // model of the new objects that will be constructed by this class
    constructor(name = 'dev', age = 0, password, skills = []) {
        super(name, age, password);
        this.#skills = skills;
        // note we don't need to call counter(),
        // because it is called by super(),
        // no matter we have method override...
    }

    // Model of the prototype of the new objects
    get skills() {
        return `Hello, I'm ${this.name} and I know: ${this.#skills.join(', ').replace(/,(\s+[^,]+)/, ' and$1')}.`;
    }
    set addSkill(skill) {
        if (skill) {
            this.#skills.push(skill);
            console.log(`${this.name}'s skills were upgraded!`);
        }
    }

    static count = 0;
    static counter() { this.count++; Person.counter(); }
    // we can't use `super.counter()` here,
    // because it does the same as `this.constructor.counter()`, 
    // but `this.constructor === Developer` so it increments
    // the `static count` value of Developer class...
}

console.log(`\nPerson count: ${Person.count}, Developer count: ${Developer.count}`); // 4, 4

/**
 * Create a new Developer objects
 */
const dev_1 = new Developer('Ivan', 41, 'some seecreeet pwd', ['Java', 'C++', 'Python']);
//
console.log(`\nPerson count: ${Person.count}, Developer count: ${Developer.count}`);
console.log(dev_1);
console.log(Developer.employeePercentage());
console.log(dev_1.greet());
console.log(dev_1.skills);

const dev_2 = new Developer('Yani', 31, 'some $eecreeet pwd', ['C++', 'Python', 'Pascal']);
//
console.log(`\nPerson count: ${Person.count}, Developer count: ${Developer.count}`);
console.log(dev_2);
console.log(Developer.employeePercentage());
console.log(dev_2.greet());
console.log(dev_2.skills);
dev_2.addSkill = 'Assembler';
console.log(dev_2.skills);
//
dev_2.password = 'some simple';
console.log(dev_2);

const dev_3 = new Developer('Jury', 31, 'the password', ['JavaScript', 'AJAX', 'jQuery']);
//
console.log(`\nPerson count: ${Person.count}, Developer count: ${Developer.count}`);
console.log(dev_3);
console.log(Developer.employeePercentage());
console.log(dev_3.greet());
console.log(dev_3.skills);
console.log(dev_3.password);

/** 
 * Create 'sub' 'class' Manager
 */
 class Manager extends Person {
     // field declaration: list of only the new members of the new objects
    #managed = [];  // array of objects
    
    // model of the new objects that will be constructed by this class
    constructor(name = 'manager', age = 0, password, managed = []) {
        super(name, age, password);
        this.#managed = managed;
    }
    
    // Model of the prototype of the new objects
    get managed() {
        return `Hello, I'm ${this.name} and I menage: ${this.#managed.map(employee => employee.name).join(', ').replace(/,(\s+[^,]+)$/, ' and$1')}.`;
    }
    set addTeamMember(member) {
        if (typeof(member) === 'object') {
            this.#managed.push(member);
            console.log(`${this.name}'s team was grown!`);
        }
    }
    
    static count = 0;
    static counter() { this.count++; Person.counter(); }
}
const manager = new Manager('George', 45, 'gogo\'s password', [dev_1, dev_2]);
console.log(`\nPerson count: ${Person.count}, Developer count: ${Developer.count}, Manager count: ${Manager.count}`);
console.log(manager.greet());
console.log(manager.managed);
manager.addTeamMember = dev_3;
console.log(manager.managed);
manager.addTeamMember = person_3;
console.log(manager.managed);

//
console.log(`\nPerson count: ${Person.count}, Developer count: ${Developer.count}, Manager count: ${Manager.count}`);
console.log(Developer.employeePercentage());
console.log(Manager.employeePercentage());