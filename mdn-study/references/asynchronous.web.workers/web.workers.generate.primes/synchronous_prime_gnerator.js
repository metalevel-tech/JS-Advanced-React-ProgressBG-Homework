// ## Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers

// ## The synchronous prime generator
// Let's first take another look at the JavaScript in our previous example below. 
// In this program, after we call generatePrimes(), the program becomes totally unresponsive.

function generatePrimes(quota) {

    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    return primes;
}

document.querySelector('#generate').addEventListener('click', () => {
    const quota = document.querySelector('#quota').value;
    const primes = generatePrimes(quota); // <-- this is where the program becomes unresponsive
                                          // <-- but we do not use the result, because it is long...
                                          // <-- ... and we just want to block the UI thread
    document.querySelector('#output').textContent = `Finished generating ${quota} primes!`;
});

document.querySelector('#reload').addEventListener('click', () => {
    document.querySelector('#user-input').value = 'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});
