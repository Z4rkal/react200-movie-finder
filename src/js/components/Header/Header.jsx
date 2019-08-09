import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { getMovies, updateSearch } from './HeaderActions';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }

        this.submitSearch = this.submitSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    submitSearch(cityName) {
        const { dispatch } = this.props;
        dispatch(getMovies(encodeURI(cityName)));

        if (!this.props.isSearch)
            this.handleRedirect();
    }

    handleSearchInput(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(updateSearch(value));
    }

    handleRedirect() {
        this.setState({
            redirect: true
        })
    }

    render() {
        if (this.state.redirect)
            return (<Redirect to='/' />)

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
                {!this.props.isSearch ? (<span className='navbar-text'>
                    <button className='btn btn-outline-secondary my-2 px-4' onClick={() => this.handleRedirect()}>Return</button>
                </span>) : null}
            </nav >
        )
    }
}

export default Header;