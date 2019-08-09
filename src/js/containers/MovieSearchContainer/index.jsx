import MovieSearchContainer from './MovieSearchContainer';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        isError: store.header.isError,
        searchResults: store.header.searchResults
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);