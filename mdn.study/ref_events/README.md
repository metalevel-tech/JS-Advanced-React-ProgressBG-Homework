## Events, references

* [MDN: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

* [MDN: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
  
* [**`EventTarget.addEventListener()`**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  
* [**`EventTarget.removeEventListener()`**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

* [MDN: Event Object in DOM](https://developer.mozilla.org/en-US/docs/Web/API/Event)

  * [Interfaces based on Event](https://developer.mozilla.org/en-US/docs/Web/API/Event#interfaces_based_on_event)

  * [`Event()` Constructor](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)

  * [Properties](https://developer.mozilla.org/en-US/docs/Web/API/Event#properties)

  * [Methods](https://developer.mozilla.org/en-US/docs/Web/API/Event#methods)

* The [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) interface represents a signal object that allows you to communicate with a DOM request (such as a fetch request) and abort it if required via an AbortController object.

  * [`AbortController()` Constructor](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

  * [`AbortController.abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort)

  * Example: [Exercises Part 4](./Exercises_Part_4_preventDefault.html): `.removeEventListener()` and `controller.abort()`

## Exercises and the most interesting parts

* [Exercises Part 1](./Exercises_Part_1_addEventListener.html): `.addEventListener()`

* [Exercises Part 2](./Exercises_Part_2_addEventListener_otherEvents.html): `.addEventListener()`

* [Exercises Part 3](./Exercises_Part_3_preventDefault.html): `e.preventDefault()`

* [Exercises Part 4](./Exercises_Part_4_removeEventListener_two_methods.html): `.removeEventListener()` and `controller.abort()`

* [Exercises Part 5](./Exercises_Part_5_e.currentTarget_vs_e.target.html) `event.target.nodeName` vs `event.currentTarget.tagName` 

* [Exercises Part 6](./Exercises_Part_6_e.stopPropagation.html) `event.stopPropagation()`

* [Exercises Part 7](./Exercises_Part_7_event_delegation.html) `Event delegation`

* Exercise: [Move a Circle](./Exercise_move_a_circle.html) ([source](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events#events_2))

* Exercise: [Move a Circle with setInterval](./Exercise_move_a_circle_setInterval.html) extends the above.

* Exercise: [Change color from data-attribute and use `event.target.matches('button')`](./Exercise_buttons_data-attribute.html) ([source](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events#events_2))

* **Event bubbling and capture.** When an event is fired on an element that has parent elements, modern browsers run three different phases — the capturing phase, the target phase, and the bubbling phase.

  Check MDN:
  
  * Introduction to events[#Video player example](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#video_player_example)
  
  * Introduction to events[#Bubbling and capturing explained](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#bubbling_and_capturing_explained)
  
  * Introduction to events[#Fixing the problem with stopPropagation()](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#fixing_the_problem_with_stoppropagation)

  * Introduction to events[:The final fixed video player example](https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html)
  
  * Example: [Exercises Part 6](./Exercises_Part_6_e.currentTarget_vs_e.target.html) `event.stopPropagation()`

  
  As we saw in the video example, this can be a very annoying behavior, but there is a way to prevent it! The standard `Event` object has a function available on it called `stopPropagation()` which, when invoked on a handler's event object, makes it so that first handler is run but the event doesn't bubble any further up the chain, so no more handlers will be run.

  ```js
  video.addEventListener('click', e => {
    e.stopPropagation();
    video.play();
  });
  ```

* **Event delegation.** Event bubbling isn't just annoying though: it can be very useful. In particular it enables a practice called **event delegation**. In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, we set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.

  * Example: [Exercises Part 7](./Exercises_Part_7_event_delegation.html) `Event delegation`

* Don't use:

  * [Event handler properties]([./](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_handler_properties)), like `btn.onclick = eventHandler;` - this is not flexible.
  
  * [Inline event handlers - don't use these](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_%E2%80%94_dont_use_these), like `<button onclick="bgChange()">`. 
  
    It is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to read. Keeping your JavaScript separate is a good practice, and if it is in a separate file you can apply it to multiple HTML documents.