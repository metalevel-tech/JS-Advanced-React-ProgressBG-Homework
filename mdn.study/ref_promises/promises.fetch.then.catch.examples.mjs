// How to use promises and handling exceptions - fetch().then().catch()

import fetch from 'node-fetch';

// const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
    .then( response => {
        if (!response.ok) throw new Error(`Http error: ${response.status}`);
        
        return response.json();
    })
    .then(json =>{
        json.forEach(el => console.log(el));
    })
    .catch(error => {
        console.error(`Could not get products: ${error}`);
    });