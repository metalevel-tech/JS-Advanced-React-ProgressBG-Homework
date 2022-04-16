## Asynchronous JavaScript - Promises, references

* [x] [MDN: Asynchronous JavaScript Overview](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

* [x] [MDN: Introducing asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
  
* [x] [MDN: How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

  * [ ] [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

* [x] [MDN: How to implement a promise-based API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)

  * [x] [MDN: `Promise()` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

  * [ ] [MDN: Promise Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

* [ ] [MDN: Introducing workers](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers)

  * [ ] [MDN: Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

  * [ ] [MDN: Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

  * [ ] [MDN: Functions and classes available to Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
  

* [ ] [MDN: Assessment - Sequencing animations](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)

---

* [ ] [MDN: Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)

---

* [Node `fetch()` module](https://www.npmjs.com/package//node-fetch)

* [`fetch()` In Node.js Core](https://fusebit.io/blog/node-fetch/?utm_source=duckduckgo.com&utm_medium=referral&utm_campaign=none): *`node >= 17.5`:* `node --experimental-fetch file.js`


## Promise terminology

Promises come with some quite specific terminology that it's worth getting clear about.

First, a promise can be in one of three states:

* **pending:** the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to `fetch()`, and the request is still being made.

* **fulfilled:** the asynchronous function has succeeded. When a promise is fulfilled, its `then()` handler is called.

* **rejected:** the asynchronous function has failed. When a promise is rejected, its `catch()` handler is called.

Note that what "succeeded" or "failed" means here is up to the API in question: for example, `fetch()` considers a request successful if the server returned an error like [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404), but not if a network error prevented the request being sent.

Sometimes we use the term **settled** to cover both **fulfilled** and **rejected**.

A promise is **resolved** if it is *settled*, or if it has been "locked in" to follow the state of another promise.

The article [Let's talk about how to talk about promises](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) gives a great explanation of the details of this terminology.

## Examples and exercises about Promise:

* [`fetch().then();`](./promises.fetch.then.examples.mjs)

* [`fetch().then().catch();`](./promises.fetch.then.catch.examples.mjs)

* Combining multiple promises: The promise chain is what you need when your operation consists of several asynchronous functions, and you need each one to complete before starting the next one. But there are other ways you might need to combine asynchronous function calls, and the `Promise` API provides some helpers for them:

  * [`Promise.all([array, of, promises]).then().catch();`](./promises.promise.all.mjs)

  * [`Promise.any([array, of, promises]).then().catch();`](./promises.promise.any.mjs)

* [`async` and `await`](./async.await.mjs): The `async` and `await` keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create explicit promise chains, and allowing you to write code that looks just like synchronous code.

## The `Promise()` constructor
The `Promise()` constructor takes a *single function* as an *argument*. We'll call this function the `executor`. When you create a new promise you supply the implementation of the *`executor`*.

This `executor` function itself *takes two arguments*, which are both also *functions*, and which are conventionally called `resolve` and `reject`. 

You can pass a *single parameter* of any type into `resolve` and `reject`. 

About the `executor`, it's important to understand the following:
* The `executor` return value is ignored.
* If an *error is thrown* in the `executor`, *the promise is rejected*.

When called via `new`, the `Promise` constructor returns a Promise object. The promise object will become "resolved" when either of the functions `resolutionFunc` or `rejectionFunc` are invoked. Note that if you call `resolutionFunc` or `rejectionFunc` and pass another Promise object as an argument, you can say that it is "resolved", but still cannot be said to be "settled".

## Exercise: How to implement a `Promise()`-based API

* *Reference: [Implementing an `alarm()` API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)*

* [no `Promise()` initial implementation](./promise.constructor-promise.based.api/set-alarm-no-promise.html)

* [`Promise()` > `.then()` `.catch()`](./promise.constructor-promise.based.api/set-alarm-promise.then.catch.html)

* [`Promise()` > `async` `await`](./promise.constructor-promise.based.api/set-alarm-promise.async.await.html)

## Web Workers API

Web Workers makes it possible to run a script operation in a background ***thread*** separate from the main execution thread of a web application. A *thread* is a sequence of instructions that a program follows. 

Workers give you the ability to run some tasks in a different thread, so you can start the task, then continue with other processing (such as handling user actions).

A worker is an object created using a constructor (e.g. [`Worker()`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker)) that runs a named JavaScript file — this file contains the code that will run in the worker thread.

You can run almost any code you like inside a worker thread. There are some exceptions: for example, you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the `window` object.  

With multithreaded code, you never know when your thread will be suspended and the other thread will get a chance to run. So if both threads have access to the same variables, it's possible for a variable to change unexpectedly at any time, and this causes bugs that are hard to find.

To avoid these problems in the web, your main code and your worker code never get direct access to each others' variables. Workers and the main code run in completely separate worlds, and only interact by sending each other messages. In particular, this means that workers can't access the DOM (the window, document, page elements, and so on).

There are three different sorts of workers:

* [Dedicated workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#dedicated_workers) - this type of workers are covered in the exercises below - see also [`DedicatedWorkerGlobalScope`](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope) object.

* [Shared workers](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) can be shared by several different scripts running in different windows.

* [Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of [Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).