const express = require('express');
const app     = express();
const model  = require('./src/models/event');

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

//could not get this from model
let Event = class Event {
  constructor(id, title, description, date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
  }
};


//create new event
const PostEvent =(req, res) => { 
    const event = new Event();
        event.id= "3";
        event.title= "New Event";
        event.description= "Hope this event will be created";
        event.date= "1/4/2017";
    console.log("event at this stage", event);
    const events = [event1, event2 ,event];
    res.json(events);
}

app.route('/events')
	.get(getAllEvents);

app.route('/events/:id')
    .get(getEventsById);

app.route('/create')
    .post(PostEvent);

app.get('/', (req, res) => {
        res.send('Get Available Events!');
    });
app.listen(3000, () => {
    console.log('Awesome server running on port 3000');
});