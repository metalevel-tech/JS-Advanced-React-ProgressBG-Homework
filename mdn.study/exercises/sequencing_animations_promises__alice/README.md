# Sequencing animations

**[Live preview](https://metalevel-tech.github.io/js_homework/mdn.study/exercises/sequencing_animations_promises__alice/index.alice.html) of the end result.** 
In the [main.js](./main.js) are presented three solutions:

* [Callback hell style](./main.js?plain=1#L25)

* [Promise chain style](./main.js?plain=1#L38)

* [Async/Await style](./main.js?plain=1#L48)


## Source and references

* [x] [MDN: Sequencing animations](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)

* [x] [Start project files at MDN's GitHub](https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start)

* [ ] [MDN: Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

* [ ] [MDN: Using the Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)

## Project brief

In this assessment you'll update a page to play a series of animations in a sequence. To do this you'll use some of the techniques we learned in the [How to use Promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) article.

We want to update this page so we apply an animation to all three images, one after the other. So when the first has finished we animate the second, and when the second has finished we animate the third.

The animation is already defined in "main.js": it just rotates the image and shrinks it until it disappears.

To give you more of an idea of how we want the page to work, [have a look at the finished example](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/). Note that the animations only run once: to see them run again, reload the page.