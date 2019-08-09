import Header from './Header';
import { connect } from'react-redux';

function mapStoreToProps(store) {
    return {
        searchInput: store.header.searchInput,
        redirectPath: store.header.redirectPath
    };
}

export default connect(mapStoreToProps)(Header);