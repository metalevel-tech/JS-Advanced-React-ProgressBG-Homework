## Asynchronous JavaScript - Promises, references

* [x] [MDN: Introducing workers](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers)

* [x] [MDN: **Using Web Workers**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

* [x] [MDN: Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

* [x] [MDN: Functions and classes available to Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)



## Web Workers API

Web Workers makes it possible to run a script operation in a background ***thread*** separate from the main execution thread of a web application. A *thread* is a sequence of instructions that a program follows. 

Workers give you the ability to run some tasks in a different thread, so you can start the task, then continue with other processing (such as handling user actions).

A worker is an object created using a constructor (e.g. [`Worker()`](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker)) that runs a named JavaScript file — this file contains the code that will run in the worker thread.

You can run almost any code you like inside a worker thread. There are some exceptions: for example, you can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the `window` object.  

With multithreaded code, you never know when your thread will be suspended and the other thread will get a chance to run. So if both threads have access to the same variables, it's possible for a variable to change unexpectedly at any time, and this causes bugs that are hard to find.

To avoid these problems in the web, your main code and your worker code never get direct access to each others' variables. Workers and the main code run in completely separate worlds, and only interact by sending each other messages. In particular, this means that workers can't access the DOM (the window, document, page elements, and so on).

There are three different sorts of workers:

* [x] [Dedicated workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#dedicated_workers) - this type of workers are covered in the exercises below.

* [x] [Shared workers](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) can be shared by several different scripts running in different windows.

* [x] [Service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) act like proxy servers, caching resources so that web applications can work when the user is offline. They're a key component of [Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).

The worker context is represented by a [`DedicatedWorkerGlobalScope`](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope) object in the case of dedicated workers (standard workers that are utilized by a single script; shared workers use [`SharedWorkerGlobalScope`](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope)). A dedicated worker is only accessible from the script that first spawned it, whereas shared workers can be accessed from multiple scripts.

## Using Dedicated Web Workers
```text
main.js
```
```js
// Create a new Worker
const worker = new Worker('./worker.js');

// Send a message to the worker usually wrapped in a function
worker.postMessage({
    command: 'do-something',
    quota: 51
});

// // When the worker sends a message back to the main thread, do something
worker.addEventListener('message', msg => {
    console.log(`Data received: ${msg.data.result} primes for ${time} seconds!`;
});
```
```js
// If you need to immediately terminate a running worker from the main thread
worker.terminate();
```

```text
worker.js
```
```js
// Listen for messages from the main thread.
addEventListener('message', message => {
    if (message.data.command === 'do-something') {
        doSomething(message.data.quota);
    }
});

function doSomething(quota) {
    const timeStart = performance.now(); // Start measuring the time consumption
    
    let result = 0;
    for (let i = 0; i < quota ** 1000; i++) {
        result += ((quota - i) * (Math.sqrt(i) ** 3))/(i ** 2);
    }
    
    const timeEnd = performance.now(); // Stop measuring the time consumption
    const timeConsumed = (timeEnd - timeStart) / 1000;  // ...and calculate

    // When we have finished, send a message to the main thread
    postMessage({
        result: result.toFixed(0).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "),
        time: timeConsumed.toFixed(1)
    });
}
```
```js
// Worker threads have access to a global function, importScripts(), which lets them import scripts.
importScripts('foo.js', 'bar.js');       /* imports two scripts */
importScripts('//example.com/hello.js'); /* You can import scripts from other origins */
```

## Using Dedicated Web Workers Exercise
 Prime generation with a worker ([source](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers#prime_generation_with_a_worker)):
  
* [`web.workers.generate.primes/`](./web.workers.generate.primes/)

* [Live preview](https://metalevel-tech.github.io/js_homework/mdn.study/references/asynchronous/web.workers.generate.primes/index.html)


Another approach to use dedicated web workers is described in the MDN's article ***Using Web Workers[#Dedicated workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#dedicated_workers)***.
  
   The complete example is provided via GitHub: [**simple-web-worker**](https://github.com/mdn/simple-web-worker).


## Using Shared Web Workers

Another approach to use dedicated web workers is described in the MDN's article ***Using Web Workers[#Shared workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#shared_workers)***.
  
The complete example is provided via GitHub: [**simple-shared-worker**](https://github.com/mdn/simple-shared-worker).