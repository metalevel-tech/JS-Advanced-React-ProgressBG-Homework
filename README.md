# JS-Advanced-React-ProgressBG-Homework

## Tasks [2022.04.03](./hw.2022.04.03)

Exercise: Play with RegExp at [Regular expressions 101](https://regex101.com/account/library) and also here:

 * [exercise-1.regexp-match.html](./hw.2022.04.03/exercise-1.regexp-match.html)

 * Live preview: [**exercise-1.regexp-match.html**](https://metalevel-tech.github.io/js_homework/hw.2022.04.03/exercise-1.regexp-match.html)

## Tasks [2022.04.02](./hw.2022.04.02)

Task 1: [*From a given string find and print all words, which are 3 characters or more length and doesn't start with a number*](https://gist.githubusercontent.com/WWWCourses/f9212e587f8cf874c5b198c99147a27e/raw/b1797eba087773c354da00e75814592fdd8626f1/findAllWords.js)

* Solution: [task-1.find-and-print-all-words-3-or-more-chars-long.js](./hw.2022.04.02/task-1.find-and-print-all-words-3-or-more-chars-long.js)

Exercise 1: Learn how actually `RexExp.exec()` works and why `rx.lastIndex` is not terminated after each execution - [exercise-1.String.methods-vs.RegExp.methods.js](./hw.2022.04.02/exercise-1.String.methods-vs.RegExp.methods.js)


## Tasks [2022.03.26](./hw.2022.03.26)

Task 5: [*Map array of objects*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/analyseGroupProductsByCategory)

* Solution: [task-5.analyze-groupProductsByCategory.js](./hw.2022.03.26/task-5.analyze-groupProductsByCategory.js)

Task 4: [*Map array of objects*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/mapArrayOfObjects)

* Solution: [task-4.mapArrayOfObjects.js](./hw.2022.03.26/task-4.mapArrayOfObjects.js)

Task 3: [*Calc products prices*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/calcProductsPrices)

* Solution: [task-3.calcProductsPrices.js](./hw.2022.03.26/task-3.calcProductsPrices.js)

Task 2: [*Sum of squares of even numbers*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/sumOfSquaresOfEvenNumbers)

* Solution: [task-2.sumOfSquaresOfEvenNumbers.js](./hw.2022.03.26/task-2.sumOfSquaresOfEvenNumbers.js)

Task 1: [*Filter Words Starting WithLetter*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/filterWordsStartingWithLetter)

* Solution: [task-1.filterWordsStartingWithLetter.js](./hw.2022.03.26/task-1.filterWordsStartingWithLetter.js)

## Tasks [2022.03.20](./hw.2022.03.20)
Task 3: [*Sort array of objects by key*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/newES6syntax/newES6syntax.html#/25/2)

* Solution: [task-3.Sort_array_of_objects_by_key.js](./hw.2022.03.20/task-3.Sort_array_of_objects_by_key.js)

Task 2: [*Sort array of strings*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/newES6syntax/newES6syntax.html#/createNewSortedArray)

* Solution: [task-2.Sort_array_of_strings.js](./hw.2022.03.20/task-2.Sort_array_of_strings.js)

Task 1: [*Developer_Manager_Person with Class Syntax- task description*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/newES6syntax/newES6syntax.html#/DeveloperManagerPersonClassSyntaxTaskDescription)

* Solution (already made - see the Tasks from 2022.03.13): [**task-1.Developer_Manager_Person.with.es6.classes.js**](./hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.js) ([live preview](https://metalevel-tech.github.io/js_homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.html))

* Extend exercise which includes private members, static constructor members and more: [**es6-classes.js**](labs/es6-classes.js)

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
