const server  = require('../server');
const model   = require('../src/models/event');
const chai    = require("chai");
const chaiHttp  =require("chai-http");
const should = chai.should();

chai.use(chaiHttp);

describe('events',() =>{

    it('it should get all events', (done) =>{
        chai.request(server)
        .get('/events')
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.be.a('object');
            res.body.length.should.be.eql(3);
            done();
        });
    });

     it('it should get an event by its id',(done) =>{
        chai.request(server)
        .get('/events/0')
        .end((err,res)=>{
            res.should.have.status(200);
            res.should.be.a('object');
            res.body.should.have.property('title');
            res.body.should.have.property('description');
            res.body.should.have.property('date');
            res.body.should.have.property('id');
            done();
        });
    });

     it('it should get an event with wrong id',(done) =>{
        chai.request(server)
        .get('/events/45')
        .end((err,res)=>{
            res.body.length.should.be.eql(0);
            done();
        });
    });

     it('it should post a new event',(done) =>{
        chai.request(server)
        .post('/events')
        .end((err,res) =>{
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(4);
            done();
        });
     });

     it ('it should update existing event', (done)=>{
        chai.request(server)
        .put('/events/0')
        .end((err,res) =>{
            res.should.have.status(200);
            res.should.be.a('object');
            done();
        });
     });

     it('it should delete an event',(done) =>{
        chai.request(server)
        .delete('/events/1')
        .end((err,res) =>{
            res.should.have.status(200);
            //res.body.length.should.be.eql(2);
            done();
        });
     });
});
