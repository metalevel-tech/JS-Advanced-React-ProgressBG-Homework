const url = 'login';
const button = document.querySelector('.login-btn');
const output = document.getElementById('output');
const form = document.getElementById('login-form');

function outputChange(node, message, success) {
    if (success) {
        node.classList.remove('error');
        node.classList.add('success');
    } else {
        node.classList.remove('success');
        node.classList.add('error');
    }
    node.textContent = message;
}

function login() {
    const formData = new FormData(form);
    const fetchPromise = fetch(url, { method: 'POST', body: formData });

    fetchPromise
        .then(response => {
            if (!response.ok || response.status.toString().match(/4\d\d/))
                throw new Error(`Network response failed: ${response.status}`);
                
            return response.json();
        })
        .then(data => {
            console.log(data);
            outputChange(output, data.message, data.success);
        })
        .catch(error => console.error(error));
}

form.addEventListener("submit", event => {
    event.preventDefault();
    login();
});