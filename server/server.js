const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const { json } = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(express.static('dist'));
app.use(express.static('public'));

try {
    process.env.OMDB_API_KEY || require('./config');
}
catch (error) {
    throw new Error(`Couldn't find the OMDB_API_KEY, make sure it's included in your environment variables or being exported from a /server/config.js file, aborting.`)
}

const OMDB_API_KEY = process.env.OMDB_API_KEY || require('./config');

app.post('/api/search', (req, res) => {
    const { title, page } = req.body;

    if (title && typeof (title) === 'string' && (!page || (typeof (page) === 'number' && page >= 1 && page <= 100))) {
        console.log(`Asking for movie data from http://www.omdbapi.com/?s=${title}`);
        axios
            .get(`http://www.omdbapi.com/?s=${title}&page=${page || 1}&apikey=${OMDB_API_KEY}`)
            .then(response => {
                res.status(200).json(response.data);
            })
            .catch(error => {
                res.status(500).send(`Couldn't get data from OMDB`);
            });
    }
    else res.status(422).send('Bad post; invalid request body');
});

module.exports = app;