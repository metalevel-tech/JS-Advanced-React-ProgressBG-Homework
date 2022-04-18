// Listen for messages from the main thread.
// If the message command is "generate", call `generatePrimes()`
addEventListener('message', message => {
    if (message.data.command === 'generate') {
        generatePrimes(message.data.quota);
    }
});

// Generate primes (very inefficiently, but our goal is time consumption)
// https://www.delftstack.com/howto/javascript/isprime-javascript/
function generatePrimes(quota) {
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); c++) {
            if (n % c === 0) return false;
        }
        return true;
    }
    const timeStart = performance.now(); // Start measuring the time consumption

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate)
        }
    }
    const timeEnd = performance.now(); // Stop measuring the time consumption
    const timeConsumed = (timeEnd - timeStart) / 1000;  // ...and calculate

    // When we have finished, send a message to the main thread,
    // including the number of primes we generated, but formatted.
    // Return only one value: postMessage(primes.length);
    postMessage({
        primes: primes.length.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "),
        time: timeConsumed.toFixed(1)
    });
}

