[TASK: The Factory as mechanism to enforce encapsulation](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/OOPinJS/OOPinJS.html#/taskTheFactoryAsMechanismToEnforceEncapsulation)

* Factory implementation - this is the solution of the task:

    * [**t1.The_Factory_as_mechanism_to_enforce_encapsulation.Closure.js**](t1.The_Factory_as_mechanism_to_enforce_encapsulation.Closure.js)

      It looks like this is the only way, or at least the most elegant, to make the private *names* complete inaccessible from outside.

* Play with `WeakMap()`:

    * [t1.The_Factory_as_mechanism_to_enforce_encapsulation.WeakMap.js](t1.The_Factory_as_mechanism_to_enforce_encapsulation.WeakMap.js)

      The private *names* could be accessed from the outside, as it it is shown at the bottom of the file.

    * [t1.The_Factory_as_mechanism_to_enforce_encapsulation.WeakMap.Private.Nonsense.js](t1.The_Factory_as_mechanism_to_enforce_encapsulation.WeakMap.Private.Nonsense.js)

      In order to prevent the outside access this solution fallback to the first solution, but with much complexity.

* Play with `WeakMap()` and Constructor function:

    * [t1.WeakMap.and.Constructor.function_as_mechanism_to_enforce_encapsulation.v1.js](t1.WeakMap.and.Constructor.function_as_mechanism_to_enforce_encapsulation.v1.js)

    * [t1.WeakMap.and.Constructor.function_as_mechanism_to_enforce_encapsulation.v2.Proto.js](t1.WeakMap.and.Constructor.function_as_mechanism_to_enforce_encapsulation.v2.Proto.js)

      In both variants, the private *members* could be accessed from the outside, as it it is shown at the bottom of the file.

* **Play with `WeakMap()` and ES6 Classes:**

    * [t1.WeakMap.and.ES6.Class.Proto.js](t1.WeakMap.and.ES6.Class.Proto.js)

      The private *members* could be accessed from the outside, as it it is shown at the bottom of the file.