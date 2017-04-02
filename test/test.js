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
});