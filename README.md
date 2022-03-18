# JS-Advanced-React-ProgressBG-Homework

## Tasks [2022.03.13](./hw.2022.03.13)
Task: [*Developer_Manager_Person - Task Description*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/prototypalInheritance/prototypalInheritance.html#/DeveloperManagerPersonTaskDescription)

* Solution with Constructors: [**task-1.Developer_Manager_Person.with.constructor.js**](./hw.2022.03.13/task-1.Developer_Manager_Person.with.constructor.js) ([live preview](https://metalevel-tech.github.io/js_homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.constructor.html))

* Solution with ES6 Classes: [task-1.Developer_Manager_Person.with.es6.classes.js](./hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.js) ([live preview](https://metalevel-tech.github.io/js_homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.html))

Question 1: ***What is the matter of the constructor's reassignment?** Is it just for information?*

* For example to achieve the same result as...

  ```js
  Ford.prototype.__proto__ = Car.prototype;
  ```
  ...we need to...

  ```js
  Ford.prototype = Object.create(Car.prototype);
  Ford.prototype.constructor = Ford;
  ```

  Script file: [example.constructor.function.js](./hw.2022.03.13/example.constructor.function.js) ([live preview](https://metalevel-tech.github.io/js_homework/hw.2022.03.13/example.constructor.function.html))


## Tasks [2022.03.12](./hw.2022.03.12)

TASK 2: [*Fix the problem in countdown function, so that we see in console the numbers 1,2,3 instead of NaN*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/thisContext/thisContext.html#/task2).

* Solution: [task-2.numbers-1-2-3-instead-NaN.html](./hw.2022.03.12/task-2.numbers-1-2-3-instead-NaN.html) ([live preview](https://metalevel-tech.github.io/js_homework/hw.2022.03.12/task-2.numbers-1-2-3-instead-NaN.live.html))


TASK 1: [*Fix the problem, so that we see in console numbers 1,2,3 instead of NaNs, on each click*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/thisContext/thisContext.html#/task1).

* Solution (2 variants): [task-1.numbers-1-2-3-instead-NaN.js](./hw.2022.03.12/task-1.numbers-1-2-3-instead-NaN.js)

* Questions:

  * Which solution must prefer whn there is a number of equal solutions? Can we say, as rule of thumb, the shorter syntax is preferable?

  * Is there an easy way to prevent asynchronous work of JS in such cases where, for example, we have consecutive invocations of *setTimeout()*?


  
## Tasks [2022.03.05](./hw.2022.03.05)

TASK: [*The Factory as mechanism to enforce encapsulation*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/OOPinJS/OOPinJS.html#/taskTheFactoryAsMechanismToEnforceEncapsulation)

* Solution: [t1.The_Factory_as_mechanism_to_enforce_encapsulation.Closure.js](./hw.2022.03.05/t1.The_Factory_as_mechanism_to_enforce_encapsulation.Closure.js)



## Tasks [2022.03.04](./hw.2022.03.04)

TASK: *[Recursion - Traversing the DOM](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/Functions/Functions.html#/13/7): Change the elements' color based on the color names, mentioned within their text.*

* [Solution](./hw.2022.03.04/index.html) ([live preview](https://metalevel-tech.github.io/js_homework/hw.2022.03.04/index.html))
