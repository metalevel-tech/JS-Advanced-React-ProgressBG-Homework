const http = require('http');
const url = require('url');
const dt = require('./module-date-time');

http.createServer(function (req, res) {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!\n\n<br>');
    res.write(`The date and time are: ${dt.myDateTime()}\n\n<br>`);
    res.write(`You've asked for url: ${req.url}\n\n<br>`);
    res.write(`<hr>`);
    res.write(`You've asked for url: ${req.url}\n\n<br>`); // http://localhost:8080/summer
    res.write(`<hr>`);
    let query = url.parse(req.url, true).query; // http://localhost:8080/summer?year=2022&month=3
    let text = query.year + " " + query.month;
    res.write(text);
    res.write(`<hr>`);
    

    res.end(`\nBye!`);

}).listen(8080);