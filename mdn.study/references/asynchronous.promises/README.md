## Asynchronous JavaScript - Promises, references

* [x] [MDN: Asynchronous JavaScript Overview](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

* [x] [MDN: Introducing asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
  
* [x] [MDN: How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

  * [ ] [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

  * [ ] [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  
  * [ ] [MDN: `fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

  * [x] [MDN: The **Response** interface of the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Response)
  
  * [x] [MDN: The **Trailer** response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer)


* [x] [MDN: How to implement a promise-based API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)

  * [x] [MDN: `Promise()` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

  * [ ] [MDN: Promise Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Promises in brief

* A Promise is an object representing the eventual completion or failure of an asynchronous operation.

* Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function... and do callback hell.

* The promise can either be fulfilled with a value or rejected with a reason (error).

* The promise object has method `then()` which accepts two callback functions and returns a promise object (which means that we can chain multiple `then()` calls).
  
* Once one promise is fulfilled or rejected, the respective handler function (*onFulfilled* or *onRejected*) will be called asynchronously.

```js
promise
   .then(onFulfilled[, onRejected])
  [.catch(onExceptionOrError)];
```

```js
promise
  .then(
    (value) => {
      // do something when the promise is fulfilled
    },
    (reason) => {
      // do something when the promise is rejected
      // i.e. throw new Error()
    }
  )
  .catch(error => {
      // handle the exceptions ... note:
      // - we can throw an error within the promise constructor in case we made it...
      // - we can throw an error within `onRejected` function...
      // - also an error could arise within the `onFulfilled` function...
  });
```

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

## `fetch()` method in brief

* `fetch()` starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available (even if the server response is an HTTP error status).

* the `fetch()` method takes:

  * one mandatory argument, the URL to the resource you want to fetch,

  * an optional second argument - init object, that can be supplied containing any custom settings that we want to apply to the request.
  
* It returns a Promise that resolves to a [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response) to that request.

```js
// Do a simple GET request
const response = fetch(url);
```
```js
// Do a POST request
const response = fetch(url, { method: 'POST', body: formData });
```
Note the `response` returned by `fetch()` is a promise so one of the things we can do is:
```js
fetch(url)
   .then(response => response.text())
   .then(data => console.log(`Do something with ${data}`))
   .catch(error => console.error(`We have an error: ${error}`));
```
```js
fetch(url)
   .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Something went wrong: ${response.status}`)
        }
    )
   .then(data => console.log(`Do something with ${data}`))
   .catch(error => console.error(`We have an error: ${error}`));
```
Or we can handle it by `await` within `async function`:
```js
async function handleFetchPromise() {
    try {
        const responsePromise = await fetch(url);
        
        if (responsePromise.ok) {
            const responseData = await responsePromise.json();
            console.log(`Do something with ${data}`);
        } else {
            throw new Error(`Something went wrong: ${responsePromise.status}`)
        }
    }
    catch (error) {
        console.error(`We have a problem: ${error}`)
    }
}
handleFetchPromise();
```
## Nested `fetch()` requests example
```js

const dom = {
    'button': document.querySelector('button'),
    'content': document.querySelector('.content')
}
const url1 = './data/sample1.txt';
const url2 = './data/sample2.txt';

function doSomethingWithData(data) {
    dom.content.innerHTML = data;
}
function doSomethingElseWithData(data) {
    dom.content.innerHTML += `<br>${data}`;
}

function processResponse(response) {
    if (response.status === 200) {
        return response.text()
    } else {
        throw new Error(`Error: ${response.status}`)
    }
}

dom.button.addEventListener('click', (event) => {
    fetch(url1)
        .then(response => processResponse(response))
        .then(text => {
            doSomethingWithData(text);
            return fetch(url2);
        })
        .then(response => processResponse(response))
        .then(text => doSomethingElseWithData(text))
        .catch(err => console.log(err));
});
```
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

Implementing an `alarm()` API ([reference](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)):

* [no `Promise()` initial implementation](./promise.constructor-promise.based.api/set-alarm-no-promise.html)

* [`Promise()` > `.then()` `.catch()`](./promise.constructor-promise.based.api/set-alarm-promise.then.catch.html)

* [`Promise()` > `async` `await`](./promise.constructor-promise.based.api/set-alarm-promise.async.await.html)


Sequencing animations by **Promises** (three solutions): [README.md](../../exercises/sequencing_animations_promises__alice/) and [Live preview](https://metalevel-tech.github.io/js_homework/mdn.study/exercises/sequencing_animations_promises__alice/index.alice.html) of the end result.