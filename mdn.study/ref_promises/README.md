## Asynchronous JavaScript - Promises, references

* [MDN: Asynchronous JavaScript Overview](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

* [MDN: Introducing asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
  
* [MDN: How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

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

* [`async` and `await`](./promises.asunc.await.mjs): The `async` and `await` keywords make it easier to build an operation from a series of consecutive asynchronous function calls, avoiding the need to create explicit promise chains, and allowing you to write code that looks just like synchronous code.