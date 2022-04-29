# JavaScript Advanced Course Homework

## Homework [2022.04.17](./homework/hw.2022.04.17) (AsyncJS/JSON/HTTP)

**Task 2:** [**Simple Task Manager**](./homework/hw.2022.04.17/task-2.to-do-app/) - [**Screenshot of the end result**](./homework/hw.2022.04.17/task-2.to-do-app/_archive/simple-task-manager-print-screen.png).

* The task: [Hands on HTTP requests with demo project (TodoApp)](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/handsOnHTTPrequests/handsOnHTTPrequests.html#/)

* The application require [`json-server`](https://github.com/typicode/json-server), so within the application directory you need to do: `npm install; npm start`


**Task 1:** [**Tell Me a Joke Typewriter**](./homework/hw.2022.04.17/task-1.tell-me-a-joke/) - [**Live preview**](https://metalevel-tech.github.io/js_homework/homework/hw.2022.04.17/task-1.tell-me-a-joke/index.html).

* The task: [Simple Joke Apps](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/WebServicesAndJSON/WebServicesAndJSON.html#/13).

* The current solution provides much functionalities, including: **1)** Typewriter effect with sound; **2)** DOM element to image implementation; **3)** Session records of the fetched jokes; **4)** Cookies to store the user preferences; **5)** Dynamic fetch of all resources; **6)** Auto play feature; and more.

* There are two variants of the `main.js` file. The only difference is within the main `Joke.prototype.jokeType()` method:

  * [`main-one-speed-param.js`](./homework/hw.2022.04.17/task-1.tell-me-a-joke/main-one-speed-param.js?plain=1#L178) has a single parameter for a single character write time (speed) - it uses the following code to loop over the text.

    ```js
    [...text].forEach((char, index, array) => {
        setTimeout(() => { typeSingleCharacter(char, index, array) }, index * speed);
    });
    ```
  
  * [`main-two-speed-params.js`](./homework/hw.2022.04.17/task-1.tell-me-a-joke/main-two-speed-params.js?plain=1#L178) has two parameters for a single character write time (speed), one for the character write itself and one for a delay after that - it uses the code below to loop over the text, respectively the function `typeSingleCharacter()` is modified to work with promises.

    ```js
    for (const index in text) {
        await typeSingleCharacter(text[index], index, text);
    }
    ```
    
  
  * **Question 1:** How do I use [`dom-to-image.js`](https://github.com/tsayen/dom-to-image) with `require` ot `import`? 
  
  * **Question 2:** Is it possible to instruct the browser to cache `dom-to-image.js` within the [current](./homework/hw.2022.04.17/task-1.tell-me-a-joke/main-one-speed-param.js?plain=1#L366) way of invocation?


## Homework [2022.04.16](./homework/hw.2022.04.16) (HTTP/AJAX/AsyncJS)

**Task 1:** [**Songs Gallery**](./homework/hw.2022.04.16/task-1.song-lyrics-extended/) - [**Live preview**](https://metalevel-tech.github.io/js_homework/homework/hw.2022.04.16/task-1.song-lyrics-extended/index.html).

* The task: [Songs Lyrics](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/AJAX/AJAX.html#/11/1).

* The current solution is a little bit extended - it fetch dynamically: **1)** The collection of the favorite songs in JSON format; **2)** then for each song, when it comes time to play it fetch: **2.1)** the album cover, **2.2)** the lyrics of the song and **2.3)** the song itself in ogg format as blob.

* **Question 2:** What about the `blob` objects?

  * Where they are stored in the RAM or at the data drive?

  * Is it worth to cache them?

  * How to tell the browser to cache them as regular objects?

* **Question 1:** When exactly to use `async`?

  * When inside a function we need to use `await` it is mandatory.

  * But whether we need it when the function just `return new Promise()`? For example these two cases:

    * [`async animateCover(init)`](./homework/hw.2022.04.16/task-1.song-lyrics-extended/main.js?plain=1#L149) and

    * `async?` [`replaceAudioAndPlay(init)`](./homework/hw.2022.04.16/task-1.song-lyrics-extended/main.js?plain=1#L181)

**Exercise 2:** Play with [Node.js Express module](./node.js/express/) - all of the following exercises require `npm install`, or you have to install the necessary modules globally:

* [`basic-requests/`](./node.js/express/basic-requests/) Handle GET, POST, DELETE, HEAD, etc. requests with Express and do a response.

* [`login-form-post/`](./node.js/express/login-form-post/) Do a POST request to the Express server by HTML form.

* [`login-form-post-ajax/`](./node.js/express/login-form-post-ajax/) Do a POST request to the Express server by `XMLHttpRequest()`.

* [`login-form-post-fetch-then-catch/`](./node.js/express/) Do a POST request to the Express server by `fetch()` and use the `.then()` and `.catch()` methods to handle the response.

* [`login-form-post-fetch-async-await/`](./node.js/express/) Do a POST request to the Express server by `fetch()` and use the `async` function and `await` to handle the response.

* **Exercise 1:** [Use AJAX: `new XMLHttpRequest()` and do GET request](./homework/hw.2022.04.16/example-1.XMLHttpRequest.index.html)

# Revised Homework

## Homework [2022.04.10](./homework/hw.2022.04.10) (Structural Patterns)

Exercises:

* [Member patterns](homework/hw.2022.04.10/member_patterns.js)
* [Decorator Structural Pattern](homework/hw.2022.04.10/structural_patterns_decorator.js)
* [Mixins Structural Pattern](homework/hw.2022.04.10/structural_patterns_mixins.js)
* [Observer/Subject Structural Pattern](homework/hw.2022.04.10/structural_patterns_observer) ([Live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.04.10/structural_patterns_observer/index.html) of the end result)


## Homework [2022.04.09](./homework/hw.2022.04.09) (Design Patterns)

Singleton pattern in JS exercises:

* [Object literal](homework/hw.2022.04.09/singleton_pattern.js?plain=1#L17)
* [Caching the singular instance, **ES6 Classes** style](homework/hw.2022.04.09/singleton_pattern.js?plain=1#L28)
* [Caching the singular instance, **Constructor function** style](homework/hw.2022.04.09/singleton_pattern.js?plain=1#55)
* [Caching the singular instance, **Factory function** style](homework/hw.2022.04.09/singleton_pattern.js?plain=1#80)
* [Instance in a closure - rewrite the constructor, **Constructor function** style](homework/hw.2022.04.09/singleton_pattern.js?plain=1#97)
* [Instance in a closure - rewrite the constructor, **Factory function** style](homework/hw.2022.04.09/singleton_pattern.js?plain=1#122)

Modules in JS examples:

* [The Module pattern](homework/hw.2022.04.09/module_pattern.js) example
* ES6 Modules references: 
  * [Modules - chapter from Exploring ES6 by Axel Rauschmayer](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/CreationalPatterns/CreationalPatterns.html#/10/3)
  * [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  * [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
* [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (CommonJS, AMD, RequireJS, WebPack, Babel)

Different ways to create and object in JS examples:

 * [Creational patterns](homework/hw.2022.04.09/creational_patterns.js)
 
 * [Factory pattern](homework/hw.2022.04.09/factory_pattern.js)


## Homework [2022.04.03](./homework/hw.2022.04.03)

 JavaScript Objects, Events and Functions recap:

* **Bouncing Balls Game: [JavaScript code](./mdn.study/exercises/bounce_balls/main.js) and [Live preview](https://metalevel-tech.github.io/js_homework/mdn.study/exercises/bounce_balls/index.html).**
  
Exercise: Play with RegExp at [Regular expressions 101](https://regex101.com/account/library) and also here:

 * [exercise-1.regexp-match.html](./homework/hw.2022.04.03/exercise-1.regexp-match.html)

 * Live preview: [**exercise-1.regexp-match.html**](https://metalevel-tech.github.io/js_homework/homework/hw.2022.04.03/exercise-1.regexp-match.html)

## Homework [2022.04.02](./homework/hw.2022.04.02)

Task 1: [*From a given string find and print all words, which are 3 characters or more length and doesn't start with a number*](https://gist.githubusercontent.com/WWWCourses/f9212e587f8cf874c5b198c99147a27e/raw/b1797eba087773c354da00e75814592fdd8626f1/findAllWords.js)

* Solution: [task-1.find-and-print-all-words-3-or-more-chars-long.js](./homework/hw.2022.04.02/task-1.find-and-print-all-words-3-or-more-chars-long.js)

Exercise 1: Learn how actually `RexExp.exec()` works and why `rx.lastIndex` is not terminated after each execution - [exercise-1.String.methods-vs.RegExp.methods.js](./homework/hw.2022.04.02/exercise-1.String.methods-vs.RegExp.methods.js)


## Homework [2022.03.26](./homework/hw.2022.03.26)

Task 5: [*Map array of objects*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/analyseGroupProductsByCategory)

* Solution: [task-5.analyze-groupProductsByCategory.js](./homework/hw.2022.03.26/task-5.analyze-groupProductsByCategory.js)

Task 4: [*Map array of objects*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/mapArrayOfObjects)

* Solution: [task-4.mapArrayOfObjects.js](./homework/hw.2022.03.26/task-4.mapArrayOfObjects.js)

Task 3: [*Calc products prices*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/calcProductsPrices)

* Solution: [task-3.calcProductsPrices.js](./homework/hw.2022.03.26/task-3.calcProductsPrices.js)

Task 2: [*Sum of squares of even numbers*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/sumOfSquaresOfEvenNumbers)

* Solution: [task-2.sumOfSquaresOfEvenNumbers.js](./homework/hw.2022.03.26/task-2.sumOfSquaresOfEvenNumbers.js)

Task 1: [*Filter Words Starting WithLetter*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/mapFilterReduceMethods/mapFilterReduceMethods.html#/filterWordsStartingWithLetter)

* Solution: [task-1.filterWordsStartingWithLetter.js](./homework/hw.2022.03.26/task-1.filterWordsStartingWithLetter.js)

## Homework [2022.03.20](./homework/hw.2022.03.20)
Task 3: [*Sort array of objects by key*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/newES6syntax/newES6syntax.html#/25/2)

* Solution: [task-3.Sort_array_of_objects_by_key.js](./homework/hw.2022.03.20/task-3.Sort_array_of_objects_by_key.js)

Task 2: [*Sort array of strings*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/newES6syntax/newES6syntax.html#/createNewSortedArray)

* Solution: [task-2.Sort_array_of_strings.js](./homework/hw.2022.03.20/task-2.Sort_array_of_strings.js)

Task 1: [*Developer_Manager_Person with Class Syntax- task description*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/newES6syntax/newES6syntax.html#/DeveloperManagerPersonClassSyntaxTaskDescription)

* Solution (already made - see the Tasks from 2022.03.13): [**task-1.Developer_Manager_Person.with.es6.classes.js**](./homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.js) ([live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.html))

* Extend exercise which includes private members, static constructor members and more: [**es6-classes.js**](labs/es6-classes.js)

## Homework [2022.03.13](./homework/hw.2022.03.13)
Task: [*Developer_Manager_Person - Task Description*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/prototypalInheritance/prototypalInheritance.html#/DeveloperManagerPersonTaskDescription)

* Solution with Constructors: [**task-1.Developer_Manager_Person.with.constructor.js**](./homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.constructor.js) ([live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.constructor.html))

* Solution with ES6 Classes: [task-1.Developer_Manager_Person.with.es6.classes.js](./homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.js) ([live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.03.13/task-1.Developer_Manager_Person.with.es6.classes.html))

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

  Script file: [example.constructor.function.js](./homework/hw.2022.03.13/example.constructor.function.js) ([live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.03.13/example.constructor.function.html))


## Homework [2022.03.12](./homework/hw.2022.03.12)

TASK 2: [*Fix the problem in countdown function, so that we see in console the numbers 1,2,3 instead of NaN*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/thisContext/thisContext.html#/task2).

* Solution: [task-2.numbers-1-2-3-instead-NaN.html](./homework/hw.2022.03.12/task-2.numbers-1-2-3-instead-NaN.html) ([live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.03.12/task-2.numbers-1-2-3-instead-NaN.live.html))


TASK 1: [*Fix the problem, so that we see in console numbers 1,2,3 instead of NaNs, on each click*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/thisContext/thisContext.html#/task1).

* Solution (2 variants): [task-1.numbers-1-2-3-instead-NaN.js](./homework/hw.2022.03.12/task-1.numbers-1-2-3-instead-NaN.js)

* Questions:

  * Which solution must prefer whn there is a number of equal solutions? Can we say, as rule of thumb, the shorter syntax is preferable?

  * Is there an easy way to prevent asynchronous work of JS in such cases where, for example, we have consecutive invocations of *setTimeout()*?


  
## Homework [2022.03.05](./homework/hw.2022.03.05)

TASK: [*The Factory as mechanism to enforce encapsulation*](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/OOPinJS/OOPinJS.html#/taskTheFactoryAsMechanismToEnforceEncapsulation)

* Solution: [t1.The_Factory_as_mechanism_to_enforce_encapsulation.Closure.js](./homework/hw.2022.03.05/t1.The_Factory_as_mechanism_to_enforce_encapsulation.Closure.js)



## Homework [2022.03.04](./homework/hw.2022.03.04)

TASK: *[Recursion - Traversing the DOM](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/Functions/Functions.html#/13/7): Change the elements' color based on the color names, mentioned within their text.*

* [Solution](./homework/hw.2022.03.04/index.html) ([live preview](https://metalevel-tech.github.io/js_homework/homework/hw.2022.03.04/index.html))
