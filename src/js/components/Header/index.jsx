import Header from './Header';
import { connect } from'react-redux';

function mapStoreToProps(store) {
    return {
        searchInput: store.header.searchInput
    };
}

export default connect(mapStoreToProps)(Header);