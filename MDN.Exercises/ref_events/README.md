## Events, references

* [MDN: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

* [MDN: Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

* [MDN: Event Object in DOM](https://developer.mozilla.org/en-US/docs/Web/API/Event)

  * [Interfaces based on Event](https://developer.mozilla.org/en-US/docs/Web/API/Event#interfaces_based_on_event)

  * [Constructor `Event()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)

  * [Properties](https://developer.mozilla.org/en-US/docs/Web/API/Event#properties)

  * [Methods](https://developer.mozilla.org/en-US/docs/Web/API/Event#methods)

## Exercises and the most interesting parts

* [Exercises Part 1](./Exercises_Part_1_addEventListener.html): `.addEventListener()`

* [Exercises Part 2](./Exercises_Part_2_addEventListener_otherEvents.html): `.addEventListener()`

* [Exercises Part 3](./Exercises_Part_3_preventDefault.html): `e.preventDefault()`

* [Exercises Part 4](./Exercises_Part_4_preventDefault.html): `.removeEventListener()` and `controller.abort()`

* Don't use:

  * [Event handler properties]([./](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_handler_properties)), like `btn.onclick = eventHandler;`.
  
  * [Inline event handlers - don't use these](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#inline_event_handlers_%E2%80%94_dont_use_these), like `<button onclick="bgChange()">`. It is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to read. Keeping your JavaScript separate is a good practice, and if it is in a separate file you can apply it to multiple HTML documents.