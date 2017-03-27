const express = require('express');
const app = express();
const model	= require('./src/models/event');

const getAllEvents = (req, res) => {
	res.json(model);
}

app.route('/events')
	.get(getAllEvents);

app.get('/', (req, res) => {
        res.send('Get Available Events!');
    });
app.listen(3000, () => {
    console.log('Awesome server running on port 3000');
});