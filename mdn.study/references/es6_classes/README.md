## ES6 Classes, references

* [MDN: Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
  
* [MDN: Classes Reference Manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

* [MDN: Classes Reference Manual - Static methods and properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties)

* [MDN: Classes Reference Manual - Class static initialization blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks)
  
* [MDN: Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
  
  
* [ProgressBG: JS Advanced React Course](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/newES6syntax/newES6syntax.html#/22)
  

## Exercises and the most interesting parts

* Task: [*Developer_Manager_Person - Task Description*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/prototypalInheritance/prototypalInheritance.html#/DeveloperManagerPersonTaskDescription).


  * **Solution with ES6 Classes**: [**task-1.Developer_Manager_Person.with.es6.classes.js**](../../homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.js) ([live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.html))

  * Solution with Constructors: [task-1.Developer_Manager_Person.with.constructor.js](../../homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.constructor.js) ([live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.constructor.html))

* [labs/**es6-classes.js**](../../labs/es6-classes.js) exercise: Play with ES6 Classes: prototype, constructor, inheritance, static members, etc.

* See also how to create even more protected members by `WeakMap()`: [`homework/hw.2022.03.05/`](../../homework/hw.2022.03.05)[**`t1.WeakMap.and.ES6.Class.Proto.js`**](../../homework/hw.2022.03.05/t1.WeakMap.and.ES6.Class.Proto.js)

* Class expression syntax is also possible, but not seen in the practice.

    ```js
    // unnamed
    const Person = class { /* ... */ }
    console.log(Person.name) // 'Person'

    // named
    const Person = class SomeName { /* ... */ }
    console.log(Person.name) // 'SomeName'
    ```

* One may also extend traditional function-based "classes":

    ```js
    function Animal (name) {
        this.name = name;
    }

    Animal.prototype.speak = function () {
        console.log(`${this.name} makes a noise.`);
    }

    class Dog extends Animal {
        speak() {
            console.log(`${this.name} barks.`);
        }
    }

    let d = new Dog('Mitzie');
    d.speak(); // Mitzie barks.

    // For similar methods, the child's method takes precedence over parent's method
    ```

* Note that classes cannot extend regular (non-constructible) objects If you want to inherit from a regular object, you can instead use `Object.setPrototypeOf()`:

    ```js
    const Animal = {
        speak() {
            console.log(`${this.name} makes a noise.`);
        }
    };

    class Dog {
        constructor(name) {
            this.name = name;
        }
    }

    // If you do not do this you will get a TypeError when you invoke speak
    Object.setPrototypeOf(Dog.prototype, Animal);

    let d = new Dog('Mitzie');
    d.speak(); // Mitzie makes a noise.

    ```
* **Static methods and properties.** The `static` keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and **cannot** be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

    ```js
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static displayName = "Point";
        static distance(a, b) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;

            return Math.hypot(dx, dy);
        }
    }

    const p1 = new Point(5, 5);
    const p2 = new Point(10, 10);
    p1.displayName; // undefined
    p1.distance;    // undefined
    p2.displayName; // undefined
    p2.distance;    // undefined

    console.log(Point.displayName);      // "Point"
    console.log(Point.distance(p1, p2)); // 7.0710678118654755
    ```

* **Binding `this` with prototype and static methods.** When a static or prototype method is called without a value for `this`, such as by assigning the method to a variable and then calling it, the this value will be undefined inside the method. This behavior will be the same even if the `"use strict"` directive isn't present, because code within the class body's syntactic boundary is always executed in strict mode.

    ```js
    class Animal {
        speak() {
            return this;
        }
        static eat() {
            return this;
        }
    }

    let obj = new Animal();
    obj.speak(); // the Animal object
    let speak = obj.speak;
    speak(); // undefined

    Animal.eat() // class Animal
    let eat = Animal.eat;
    eat(); // undefined
    ```

    If we rewrite the above using traditional function-based syntax in non–strict mode, then `this` method calls are automatically bound to the initial `this` value, which by default is the global object. In strict mode, autobinding will not happen; the value of this remains as passed.

    ```js
    function Animal() { }

    Animal.prototype.speak = function() {
        return this;
    }

    Animal.eat = function() {
        return this;
    }

    let obj = new Animal();
    let speak = obj.speak;
    speak(); // global object (in non–strict mode)

    let eat = Animal.eat;
    eat(); // global object (in non-strict mode)
    ```

* **Encapsulation. Private field declarations.**

    ```js
    class Rectangle {
        #height = 0;
        #width;
        constructor(height, width) {
            this.#height = height;
            this.#width = width;
        }
    }
    ```