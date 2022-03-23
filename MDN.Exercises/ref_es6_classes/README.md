## ES6 Classes, references

* [MDN: Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
  
* [MDN: Classes Reference Manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

* [MDN: Classes Reference Manual - Static methods and properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_properties)

* [MDN: Classes Reference Manual - Class static initialization blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_static_initialization_blocks)
  
* [MDN: Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
  
  
* [ProgressBG: JS Advanced React Course](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/newES6syntax/newES6syntax.html#/22)
  


## Exercises and the most interesting parts

* Task: [*Developer_Manager_Person - Task Description*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/prototypalInheritance/prototypalInheritance.html#/DeveloperManagerPersonTaskDescription).


  * **Solution with ES6 Classes**: [**task-1.Developer_Manager_Person.with.es6.classes.js**](../../hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.js) ([live preview](https://metalevel-tech.github.io/js_homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.html))

  * Solution with Constructors: [task-1.Developer_Manager_Person.with.constructor.js](../../hw.2022.03.13/task-1.Developer_Manager_Person.with.constructor.js) ([live preview](https://metalevel-tech.github.io/js_homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.constructor.html))

* [labs/**es6-classes.js**](../../labs/es6-classes.js) exercise: Play with ES6 Classes: prototype, constructor, inheritance, static members, etc.

* See also how to create even more protected members by `WeakMap()`: [`hw.2022.03.05/`](../../hw.2022.03.05)[**`t1.WeakMap.and.ES6.Class.Proto.js`**](../../hw.2022.03.05/t1.WeakMap.and.ES6.Class.Proto.js)

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

* Note that classes cannot extend regular (non-constructible) objects If you want to inherit from a regular object, you can instead use Object.setPrototypeOf():

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
