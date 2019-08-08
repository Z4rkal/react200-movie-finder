import axios from 'axios';

export function getMovies(title, page) {
    return {
        type: 'GET_MOVIES', //Should probably limit amount of searches per minute at some point
        payload: axios.post(`/api/search`, { title, page: page || 1 })
    }
}

export function updateSearch(input) {
    return {
        type: 'UPDATE_SEARCH_BAR_INPUT',
        payload: { input }
    }
}