# Observer Pattern

* [Structural Patterns: Observer](https://wwwcourses.github.io/ProgressBG-JS-Advanced-React-Slides/pages/themes/StructuralPatterns/StructuralPatterns.html#/4)

* [Example at GitHub](https://github.com/WWWCourses/ProgressBG-JS-Advanced-React-Labs/tree/TODOS-DONE/lab13/ObserverPattern)

```text
                            +-> [Observer A]
  [ Subject ]           ->  +-> [Observer B]
  -> On Subject change      +-> [Observer C]
     notify all observers
```

* The Observer Pattern defines an object (called subject),
which can notify a set of observers (or listeners),
when a change in its state happens.

  *"Don't call us, we call you!"*

* Define a one-to-many relationship between objects
so that when one object changes state, 
all its dependant are notified and updated automatically.