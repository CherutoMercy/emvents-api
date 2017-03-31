const express = require('express');
const app = express();
const model	= require('./src/models/event');

const getAllEvents = (req, res) => {
	res.json(model);
}

const getEventsById = (req, res) => {
    const id = req.params.id;
    let result;

    for (let i = 0; i < model.length; i++) {
        if (model[i].id == id) result = model[i];
    }
    res.json(result);
}

app.route('/events')
	.get(getAllEvents);

app.route('/events/:id')
    .get(getEventsById);

app.get('/', (req, res) => {
        res.send('Get Available Events!');
    });
app.listen(3000, () => {
    console.log('Awesome server running on port 3000');
});