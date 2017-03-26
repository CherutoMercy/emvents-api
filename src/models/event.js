// const Event = {
// 	id   :"0",
// 	title:["Pair programming","Bucharest Nodejs"]
// 	description:"A pair of programmers learning nodejs",
// 	date:["20/03/2017","21/03/2017"]
// };

let Event = class Event {
  constructor(id, title, description, date) {
    this.id = id;
    this.title = title;
	this.description = description;
	this.date = date;
  }
};

event1 = new Event("0", "Pair programming", "A pair of programmers learning nodejs", "21/03/2017");
event2 = new Event("1", "Nodejs meetup", "Javascript geeks", "12/04/2017");

const events = [event1, event2];

module.exports = Event;
