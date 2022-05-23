const http = require('http');
const port = 8080;

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
    res.end('<p>Thats it.</p>');
}).listen(port);
