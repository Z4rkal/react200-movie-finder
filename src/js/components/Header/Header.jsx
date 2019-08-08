import React, { Component } from 'react';

import { getMovies, updateSearch } from './HeaderActions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.submitSearch = this.submitSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    submitSearch(cityName) {
        const { dispatch } = this.props;
        dispatch(getMovies(encodeURI(cityName)));
    }

    handleSearchInput(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(updateSearch(value));
    }

    render() {
        const { searchInput } = this.props;

        return (
            <nav id='nav-header' className='navbar navbar-expand-lg'>
                <a className='navbar-brand'>Movie Finder</a>
                <div className='input-group mr-sm-2'>
                    <input id='search-bar' className='form-control' type='text' value={searchInput} onChange={this.handleSearchInput} onKeyDown={(e) => { if (e.key === 'Enter') this.submitSearch(searchInput); }} />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button' onClick={() => this.submitSearch(searchInput)}>Search</button>
                    </div>
                </div>
                {this.props.onDetails ? (<span className='navbar-text'>
                    <a href='/' className='my-2 px-4'>Return</a>
                </span>) : null}
            </nav>
        )
    }
}

export default Header;