// ## Promise.all([arr, of, promises]);

import fetch from 'node-fetch';

// Sometimes you might need any one of a set of promises to be fulfilled,
// and don't care which one. In that case you want `Promise.any()`.
// This is like `Promise.all()`, except that it is fulfilled as soon as 
// any of the array of promises is fulfilled,
// or rejected if all of them are rejected:

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then(response => {
        console.log(`${response.status} ${response.url}`);
    })
    .catch(error => {
        console.error(`Failed to fetch: ${error}`);
    });

// Note that in this case we can't predict which fetch request will complete first.
// And if you re-execute the script few times a you will see different results.