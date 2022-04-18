const path = require('path');
const bodyParser = require('body-parser');

const multer = require('multer');
const upload = multer();

const express = require('express');
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

// for parsing multipart/form-data
app.use(upload.array());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use('/', express.static(path.join(__dirname, '')));

// $ curl -X POST -d 'username=user&password=123' 'http://127.0.0.1:8080/login'
app.post('/login', function (req, res) {
    console.log(req.body);
    
    const returnObject = {
        message: "Login failed!",
        success: false,
        cookie: false
    };
    
    if (defaults.user === req.body.username && defaults.password === req.body.password) {
        returnObject.message = "Login successful!";
        returnObject.success = true;
    }
    
    res.send(returnObject);
    console.log(returnObject);
});

app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});
