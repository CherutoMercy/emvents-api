const http = require('http');
const hostname = '127.0.0.1';
const model	  = require('./src/models/event');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('GET Hello World!');
});

const getAllEvents = (req, res ,next) => {
	// this should do something :)	
	res.json(model);
}

app.route('/events')
	.get(getAllEvents);

app.listen(port, hostname, () => {
    console.log('Awesome server running at http://${hostname}:${port}/');
});