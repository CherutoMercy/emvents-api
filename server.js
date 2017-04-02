const express = require('express');
const app     = express();
const model   = require('./src/models/event');
const Promise = require('promise');

app.get('/', (req, res) => {
    res.send('Get Available Events!');
});

app.route('/events')
    .get((req, res) => {
        return new Promise((req, res) => { })
            .then(res.json(model))
            .catch((err) => { console.log(err) });
    })

    .post((req, res) => {
        const event = {
            id: "3",
            title: "New Event",
            description: "Hope this event will be created",
            date: "1/4/2017"
        }
        return new Promise((req, res) => {
            model.push(event);
        })
            .then(res.json(model))
            .catch((err) => { console.log(err) });
    });


app.route('/events/:id')
    .get((req, res) => {
        const id = req.params.id;
        let result;
        return new Promise((req, res) => {
            for (let i = 0; i < model.length; i++) {
                if (model[i].id == id) result = model[i];
            }
        })
            .then(res.json(result))
            .catch((err) => { console.log(err) });
    })

    .put((req, res) => {
        const id = req.params.id;
        let result;
        return new Promise((req, res) => {
            for (let i = 0; i < model.length; i++) {
                if (model[i].id == id) {
                    model[i].title = "Updated title";
                    model[i].description = "Change description";
                    result = model[i];
                }
            }
        })
            .then(res.json(result))
            .catch((err) => { console.log(err) });

    })

    .delete((req, res) => {
        const id = req.params.id;
        let result;
        return new Promise((req, res) => {
            result = model.filter(model => {
                return id.indexOf(model.id) === -1;
            });
        })
            .then(res.json(result))
            .catch((err) => { console.log(err) });
    });

app.listen(3000, () => {
    console.log('Awesome server running on port 3000');
});