const mongoose  =require('mongoose');
const Schema    =mongoose.Schema;

const EventSchema = new Schema({
    title: {type:String, index:true},
    description:{type:String},
    date: {type:Date}
  });

module.exports = mongoose.model('event', EventSchema)

