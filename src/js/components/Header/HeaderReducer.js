const defaultState = {
    searchInput: '',
    searchResults: []
};

export default function HeaderReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_BAR_INPUT': {
            const searchInput = payload.input;
            return { ...state, searchInput }
        }

        case 'GET_MOVIES_PENDING': {
            return state;
        }

        case 'GET_MOVIES_FULFILLED': {
            console.log(payload.data);
            const { Search } = payload.data;
            let SearchObj = {};

            Search.map((movie) => {
                if (movie.imdbID)
                    SearchObj[movie.imdbID] = movie;
            })

            return {
                searchInput: state.searchInput,
                searchResults: SearchObj
            };
        }

        case 'GET_MOVIES_REJECTED': {
            return {
                searchInput: state.searchInput,
                searchResults: [],
                isError: true
            };
        }

        default: {
            return state;
        }
    }
}

//Example Data
/*
{"Title":"La Haine",
"Year":"1995",
"Rated":"Not Rated",
"Released":"23 Feb 1996",
"Runtime":"98 min",
"Genre":"Crime,
 Drama",
"Director":"Mathieu Kassovitz",
"Writer":"Mathieu Kassovitz",
"Actors":"Vincent Cassel,
 Hubert Koundé,
 Saïd Taghmaoui,
 Abdel Ahmed Ghili",
"Plot":"24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
"Language":"French",
"Country":"France",
"Awards":"8 wins & 13 nominations.",
"Poster":"https://m.media-amazon.com/images/M/MV5BNDNiOTA5YjktY2Q0Ni00ODgzLWE5MWItNGExOWRlYjY2MjBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
"Ratings":[{"Source":"Internet Movie Database",
"Value":"8.1/10"},
{"Source":"Rotten Tomatoes",
"Value":"100%"}],
"Metascore":"N/A",
"imdbRating":"8.1",
"imdbVotes":"132,
933",
"imdbID":"tt0113247",
"Type":"movie",
"DVD":"17 Apr 2007",
"BoxOffice":"N/A",
"Production":"Criterion Collection",
"Website":"N/A",
"Response":"True"}
*/