const defaultState = {
    searchInput: '',
    searchResults: {}
};

export default function HeaderReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_BAR_INPUT': {
            const searchInput = payload.input;
            return { ...state, searchInput }
        }

        case 'GET_MOVIES_PENDING': {
            return state
        }

        case 'GET_MOVIES_FULFILLED': {
            const results = payload.data;
            let resultsObj = {};

            results.map((movie) => {
                if (movie.imdbID)
                    resultsObj[movie.imdbID] = movie;
            })

            return {
                searchInput: state.searchInput,
                searchResults: resultsObj
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