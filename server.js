const http = require('http');
const hostname = '127.0.0.1';
const model	  = require('./src/models/event')
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log('Awesome server running at http://${hostname}:${port}/');
});