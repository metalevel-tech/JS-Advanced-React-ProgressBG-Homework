// `async` and `await`

import fetch from 'node-fetch';

// The `async` keyword gives you a simpler way to
// work with asynchronous promise-based code.
// Adding `async` at the start of a function makes it an async function.

// Inside an `async` function you can use the `await` keyword
// before a call to a function that returns a promise.
// This makes the code wait at that point until the promise is settled,
// at which point the fulfilled value of the promise is treated as a return value,
// or the rejected value is thrown.

// This enables you to write code that uses asynchronous
// functions but looks like synchronous code.
// For example, we could use it to rewrite our fetch example:

const url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

async function fetchProducts() {
    try {
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
        const response = await fetch(url);
    
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    
        // after this line, our function will wait for the `response.json()` call to be settled
        // the `response.json()` call will either return the JSON object or throw an error
        const json = await response.json();
        // for (const j of json) {
        //     console.log(j);
        // }
        console.log(json[0].name);
    }
    catch (error) {
        console.error(`Could not get the products: ${error}`);
    }
}
fetchProducts();

// Here we are calling `await fetch()`, and instead of getting a Promise,
// our caller gets back a fully complete Response object, 
// just as if `fetch()` were a synchronous function!

// We can even use a `try...catch` block for error handling,
// exactly as we would if the code were synchronous.

// Note though that this magic only works inside the async function.

// To get the promise outside the function, we'd need to do something as this
async function fetchProductsReturn() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const json = await response.json();
        return json; // json is a Promise object
    }
    catch (error) {
        console.error(`Could not get the products: ${error}`);
    }
}
const jsonPromise = fetchProductsReturn(); // json is a Promise object
jsonPromise.then(json => json.forEach(j => console.log(j)));

// You'll probably use `async` functions a lot where
// you might otherwise use promise chains,
// and they make working with promises much more intuitive.

// Keep in mind that just like a promise chain,
// `await` forces asynchronous operations to be completed in series.
// This is necessary if the result of the next operation depends
// on the result of the last one, but if that's not the case something
// like `Promise.all()` will be more performant.