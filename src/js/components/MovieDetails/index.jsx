import MovieDetails from './MovieDetails';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        searchResults: store.header.searchResults
    };
}

export default connect(mapStoreToProps)(MovieDetails);