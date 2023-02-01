// ## Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers#prime_generation_with_a_worker

// Get the DOM elements
const nodes = {
    box: document.getElementById('box1'),
    quota: document.getElementById('quota'),
    buttonGenerate: document.getElementById('generate'),
    buttonReload: document.getElementById('reload'),
    userInput: document.getElementById('user-input'),
    output: document.getElementById('output')
}

// Create a new Worker
const worker = new Worker('./worker.generate.js');

// When the user click on the `generate primes` button, send a message to the worker
nodes.buttonGenerate.addEventListener('click', () => {
    worker.postMessage({
        command: 'generate',
        quota: nodes.quota.value
    });
    nodes.userInput.focus();
    // `command` and `quota` are custom properties of
    // the object `message.data` sent to the worker.
});

// When the worker sends a message back to the main thread,
// update the output node...
worker.addEventListener('message', message => {
    const {primes, time} = message.data;
    nodes.output.textContent = `Finished generating ${primes} primes for ${time} seconds!`;
});

// Implement the reload button functionality
nodes.buttonReload.addEventListener('click', () => {
    nodes.userInput.value = '';
    document.location.reload();
});