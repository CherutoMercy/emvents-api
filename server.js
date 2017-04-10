const express = require('express');
const app     = express();
const Promise = require('promise');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');

const db      ='mongodb://localhost:27017/emvents';
mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}));

const routes = require('./routes/event.js');
app.use(routes);

app.listen(3000, () => {
 console.log('Awesome server running on port 3000');
});
module.exports = app;
