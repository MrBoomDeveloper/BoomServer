const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("hello world!\n");
});

server.listen(3000);
