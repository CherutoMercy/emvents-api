const express = require('express');
const app     = express();
const model   = require('./src/models/event');
const Promise = require('promise');

const MongoClient = require('mongodb').MongoClient,
           assert = require('assert');

const url = 'mongodb://localhost:27017/emvents';
let db;
let collection;

MongoClient.connect(url, (err, database) => {
    assert.equal(null, err);
    db = database;
    collection = db.collection('events');
    app.listen(3000, () => {
        console.log('Awesome server running on port 3000');
    });
});

const insertEvent = (db, callback) => {
    collection.insertOne(
        {
            id: "3",
            title: "New Event",
            description: "Hope this event will be created",
            date: "1/4/2017"
        },

        (err, result) => {
            assert.equal(err, null);
            assert.equal(1, result.insertedCount);
            console.log("Inserted 1 event into the collection");
            callback(result);
        });
}

const updateEvent = (db, callback) => {
    collection.updateOne(
        {
            title: "New Event"
        },
        {
            $set: {
                description: "Hope this event will be updated"
            }
        },
        (err, result) => {
            assert.equal(err, null);
            assert.equal(1, result.modifiedCount);
            console.log("Updated 1 event into the collection");
            callback(result);
        }); 
}


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
        return new Promise((req, res) => {
            insertEvent(db, () => {
                db.close();
            });
        })
            .then(res.redirect('/events'))
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
        return new Promise((req, res) => {
             updateEvent(db, () => {
                db.close();
            });
        })
            .then(res.redirect('/events'))
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

module.exports = app;
