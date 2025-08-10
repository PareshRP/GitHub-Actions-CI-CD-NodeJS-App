const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('Calculator App', function () {
    it('should return 200 for the home page', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('should serve HTML containing "Simple Calculator"', function (done) {
        request(app)
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.include('Simple Calculator');
                done();
            });
    });
});
