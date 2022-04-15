// How to use promises - fetch().then()

import fetch from 'node-fetch';

// ## Using the fetch() API
/**
const fetchPromise_1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise_1);

fetchPromise_1.then(response => {
    console.log(`Received response: ${response.status}`);
});

console.log("Started request...");
 */

// ## Chaining promises 'the ugly way' - like callback in callback
/**
const fetchPromise_2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise_2.then(response => {
    const jsonPromise = response.json();
    jsonPromise.then(json => {
        // console.log(json[0].name);
        console.log(json[0]);
        json.forEach(el => console.log(el.name));
    });
});
 */

// ## Chaining promises 'the right way' - true Promise chaining
const fetchPromise_3 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise_3
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.json();
    })
    .then(json => {
        // console.log(json[0].name);
        json.forEach(el => console.log(el));
    });