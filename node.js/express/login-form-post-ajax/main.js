const url = 'login';
const button = document.querySelector('.login-btn');
const output = document.getElementById('output');
const form = document.getElementById('login-form');

function outputChange(outputElement, text) {
    outputElement.textContent = text;

    if (text.match(/error|failed/i)) {
        outputElement.classList.remove('success');
        outputElement.classList.add('error');
    } else {
        outputElement.classList.remove('error');
        outputElement.classList.add('success');
    }
}

window.addEventListener("load", function () {
    function sendData() {
        const xhr = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const formData = new FormData(form);

        // Set up our request
        xhr.open("POST", url);

        // The data sent is what the user provided in the form // (A.1)
        xhr.send(formData);                 
        
        /**
         * When at the `server.js` (express) are not used 'body-parser' and 'multer' modules,
         * then the instead (A.1) for data send we must do this (B.x):
         *
            // (B.1) 
            const submitData = [...formData].map(e => e.join('=')).join('&');
            // (B.2)
            // Send the proper header information along with the request
            // This is important! https://stackoverflow.com/a/9713078/6543935
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            // (B.3)
            xhr.send(submitData);
         * 
         */


        // Define what happens on successful data submission
        xhr.addEventListener("load", function (event) {
            outputChange(output, event.target.responseText);
        });

        // Call a function when the state changes.
        xhr.addEventListener('readystatechange', function (event) {
            if (xhr.readyState === 4 && xhr.status === 200) {
                outputChange(output, event.target.responseText);
            }
        });

        // Define what happens in case of error
        xhr.addEventListener("error", function (event) {
            outputChange(output, `Oops! Something went wrong: ${event}`);
        });
    }

    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});
