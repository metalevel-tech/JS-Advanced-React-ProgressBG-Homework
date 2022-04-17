const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const defaults = {
    user: 'user',
    password: '123'
};

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use('/', express.static(path.join(__dirname, '')));

app.post('/login', function (req, res) {
    if (defaults.user === req.body.username && defaults.password === req.body.password) {
        const user = req.body.username.replace(/^\w/, c => c.toUpperCase());
        const password = req.body.password;
        res.send(`<h1>Hello ${user}!</h1><p>Your password is ${password}</p>`);
    } else {
        res.send('<h1>Login failed!</h1>');
    }
});

app.listen(port, function () {
    console.log(`app listening on port ${port}!`);
});
