const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// ## GET
// This responds with "Hello World" on the homepage
// $ curl 'http://127.0.0.1:8080'
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET!\n');
});
// $ curl 'http://127.0.0.1:8080/query?a=1&b=2'
app.get('/query', function (req, res) {
    console.log("Got a GET request for the page /query");
    const query = req.query;
    // res.json({query);
    res.send(`${JSON.stringify(query)}\n`);
});

// ## POST
// req.body: Contains key-value pairs of data submitted in the request body.
// By default, it is undefined, and is populated when you use body-parsing
// middleware such as body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// This responds a POST request for the homepage
// $ curl -X POST -d '' 'http://127.0.0.1:8080/'
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST!\n');
})
// $ curl -X POST -d 'a=1&b=2' 'http://127.0.0.1:8080/query'
app.post('/query', function (req, res) {
    console.log("Got a POST request for the page /query");
    const body = req.body;
    // res.json(body);
    res.send(`${JSON.stringify(body)}\n`);
});

// ## DELETE
// This responds a DELETE request for the /del_user page.
// $ curl -X DELETE 'http://127.0.0.1:8080/del_user'
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE!\n');
 });


 // ## Start the server
app.listen(port, function () {
    const host = this.address().address;
    const port = this.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});

// const server = app.listen(port, function () {
//     const host = server.address().address;
//     const port = server.address().port;

//     console.log('Example app listening at http://%s:%s', host, port);
// });

