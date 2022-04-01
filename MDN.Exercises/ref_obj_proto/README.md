## OOP, Object, Object prototypes, references

* [MDN: Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

* [MDN: Object-oriented programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
  

## Exercises and the most interesting parts

* The main concepts of OOP:
  * **abstraction** - objects, classes and instances;
  * **inheritance** - classes, instances, objects;
  * **encapsulation** - objects, properties and methods;
  * **polymorphism** - classes and instances.

* **Classes and instances.** On its own, a **class** doesn't do anything. It's a kind of template for creating concrete objects of that type. Each concrete object we create is called an **instance** of the **class**. The process of creating an instance is performed by a special function called a **constructor**. We pass the constructor values for any internal state that we want to initialize in the new instance.

* **Inheritance.** We could represent the fact that different classes of objects - like *students* and *professors* - share some properties: or more accurately, the fact that at some level they are the same kind of thing. **Inheritance** lets us do this. 
  
  We start by observing that *students* and *professors* are both *people*, and people have names and want to introduce themselves. 
  
  We can then model that by defining a new class `Person`, where we define all the common properties of people. Then `Professor` and `Student` can both **derive** from `Person`, adding their extra properties.

  In this case we would say that `Person` is the **superclass** or ***parent class*** of both `Professor` and `Student`. Conversely `Professor` and `Student` are **subclasses** or ***child classes*** of `Person`.

* **Polymorphism.** This feature - when a method has the same name, but a different implementation in different classes - is called **polymorphism**. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass **overrides** the version in the superclass.


* **Encapsulation.** Objects provide an interface to other code that wants to use them, but maintain their own internal state. The object's internal state is kept **private**, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and in general making a clear division between its public interface and its private internal state, is called **encapsulation**.
  
* The standard way to access an object's prototype is the `Object.getPrototypeOf(ourObject)` method.
  
* Check the exercise [Developer Manager Person](../../hw.2022.03.13/) to see examples of inheritance.

    ```js
    // Using constructor function

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I'm ${this.constructor.name}.`);
    };
    
    function Developer(name, age, skillset = []) {
        Person.apply(this, [name, age]);
        this.skillset = skillset;
    }
    Developer.prototype = Object.create(Person.prototype);
    Developer.prototype.constructor = Developer;
    ```

    ```js
    // Using ES6 Classes
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        greet() {
            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I'm ${this.constructor.name}.`);
        }
    }

    class Developer extends Person {
        constructor(name, age, skillset = []) {
            super(name, age);
            this.skillset = skillset;
        }
    }
    ```

* Properties that are defined directly in the object, like name here, are called own properties, and you can check whether a property is an own property using the static `Object.hasOwn()` method:

    ```js
    const irma = new Person('Irma');

    console.log(Object.hasOwn(irma, 'name')); // true
    console.log(Object.hasOwn(irma, 'greet')); // false
    ```

  Note: You can also use the non-static `Object.hasOwnProperty()` method here, but we recommend that you use **`Object.hasOwn()`** if you can.