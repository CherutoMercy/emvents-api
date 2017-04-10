const express = require('express');
const app     = express();
const Promise = require('promise');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const Event   = require('./src/models/event');

const db      ='mongodb://localhost:27017/emvents';
mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));


app.get('/', (req, res) => {
    res.send('Get Available Events!');
});

app.route('/Create')
    .post((req, res) => {    
    const newEvent = new Event();
      newEvent.title = req.body.title;
      newEvent.description = req.body.description;
      newEvent.date = req.body.date;

    //save it to db
    newEvent.save ((err, event)=>{
    if(err){
      res.send('error saving event');
    }else{
      console.log(event);
      res.send(event);
    }
    });   
    });

app.route('/NewEvent/:id')
    .put((req,res) =>{
        Event.findOneAndUpdate({
           _id:req.params.id 
        },
          {$set:{title:req.body.title}},
          {upsert:true},
          (err,newEvent)=>{
            if(err){
                console.log('error occured');
            }else{
                console.log(newEvent);
                res.send(newEvent);
            }
      });
    })

    .delete((req,res) => {
        Event.findOneAndRemove({
            _id:req.params.id
        },(err,event) =>{
            if(err){
                res.send('error deleting');
            }else{
                console.log(event);
                res.send(event);
            }
        });
    });

 app.route('/events')
    .get((req, res) => {
        return new Promise((req, res) => { 

        })
            .then(res.json(Event))
            .catch((err) => { console.log(err) });
    })

    .post((req, res) => { 
        return new Promise((req, res) => {
            newEvent.save()
         })
            .then(res.json(Event))
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
            .then(res.json(event))
            .catch((err) => { console.log(err) });
    })

    .put((req, res) => {
        return new Promise((req, res) => {
             Event.updateOne()
        })
            .then(res.redirect(event))
            .catch((err) => { console.log(err) });

    })

    .delete((req, res) => {
        return new Promise((req, res) => {
            deleteEvent(db, () => {
                db.close();
            })
        })
            .then(res.redirect('/events'))
            .catch((err) => { console.log(err) });
    });

app.listen(3000, () => {
 console.log('Awesome server running on port 3000');
});
module.exports = app;
