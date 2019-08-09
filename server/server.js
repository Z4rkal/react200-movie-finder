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

let CACHE_OBJ = {};

const getDetailedSearchResults = async (results) => {
    let searchResults = [];

    for (let i = 0; i < results.length; i++) {
        await axios.get(`http://www.omdbapi.com/?i=${results[i].imdbID}&apikey=${OMDB_API_KEY}`)
            .then(response => { searchResults.push(response.data); })
            .catch(error => console.log(error))
    }

    return searchResults;
}

app.post('/api/search', (req, res) => {
    const { title, page } = req.body;

    if (title && typeof (title) === 'string' && (!page || (typeof (page) === 'number' && page >= 1 && page <= 100))) {
        const date = new Date().valueOf();
        const cacheId = title.toLocaleLowerCase() + ' ' + page;

        //Check if the search was made in the last week
        if (CACHE_OBJ[cacheId]
            && (date - CACHE_OBJ[cacheId].date) < (1000 * 60 * 60 * 24 * 7)) {
            console.log('Sending from cache instead');
            res.status(200).json(CACHE_OBJ[cacheId].detailedResults);
        }
        else { //Otherwise hit up the omdb api for the info we need
            console.log(`Asking for movie data from http://www.omdbapi.com/?s=${title}`);
            axios
                .get(`http://www.omdbapi.com/?s=${title}&page=${page || 1}&apikey=${OMDB_API_KEY}`)
                .then(response => {
                    if (response.data.Search) {
                        const initialResults = response.data.Search;

                        getDetailedSearchResults(initialResults)
                            .then(detailedResults => {
                                CACHE_OBJ[cacheId] = {
                                    date,
                                    detailedResults
                                };
                                res.status(200).json(detailedResults)
                            })
                            .catch(error => console.log(error));
                    }
                    else {
                        res.status(404).send(`The search didn't get any results :(`);
                    }
                })
                .catch(error => {
                    res.status(500).send(`Couldn't get data from OMDB: ${error}`);
                });
        }
    }
    else res.status(422).send('Bad post; invalid request body');
});

module.exports = app;