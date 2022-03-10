# Silly story generator | MDN JavaScript Guide

[Live preview](https://metalevel-tech.github.io/js_homework/MDN.Exercises/silly_story_generator_arrays_assessment/silly_story_generator.index.html) of the end result. 

Source and references:

* [MDN: Silly story generator](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)

* [MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

* [Rapid Tables: Fahrenheit to Celsius conversion](https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html)

## Condition of the task

> In this assessment you'll be tasked with taking some of the knowledge you've picked up in this module's articles and applying it to creating a fun app that generates random silly stories. Have fun!.


## Solutions

* The file [silly_story_generator.main.v.1.init.js](silly_story_generator.main.v.1.init.js) is created by following the steps provided at the *Silly story generator* assessment (exercise).

* The file [silly_story_generator.main.v.2.reusable-template-literals.js](silly_story_generator.main.v.2.reusable-template-literals.js) is a little bit improved version that uses reusable template literals function with arrow syntax.

    ```js
    const storyTextFn = (x, y, z) => `It was 94 fahrenheit outside, so ${x} went for a walk. When they got to ${y}, they stared in horror for a few moments, then ${z}. Bob saw the whole thing, but was not surprised — ${x} weighs 300 pounds, and it was a hot day.`;
    // ...
    let newStory = storyTextFn(xItem, yItem, zItem);
    ```
