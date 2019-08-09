const { expect } = require('chai');
const supertest = require('supertest');

const app = require('../server/server');

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

mock
    .onGet(/http\:\/\/www\.omdbapi\.com\/\?s\=La\%20Haine\&page\=1\&apikey\=.*$/)
    .reply(200, { search: [] });

describe('Express Server', () => {
    it('should find the OMDB_API_KEY alright', () => {
        expect(supertest(app)).to.not.throw;
    });

    it('returns the correct status code', async () => {
        let res = await supertest(app).get('/').then(response => response);

        expect(res.status).to.equal(200);
    });

    it('should hit omdb properly when a search gets posted to /api/search', async () => {
        await supertest(app).post('/api/search').send({ title: 'La%20Haine', page: 1 }).expect(404);
    })
});