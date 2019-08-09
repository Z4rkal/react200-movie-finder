import React, { Component } from 'react';
import Header from '../../components/Header';
import MovieBlurb from '../../components/MovieBlurb';

class MovieSearchContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchResults, isError } = this.props;

        if (isError) {
            return (
                <React.Fragment>
                    <div className='container-fluid'>
                        <Header isSearch={true} />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'></div>
                            <div className='col-md-4'>
                                <p>Sorry, something went wrong with the search.</p>
                                <p>Please check for misspellings and/or alter your search; if your search wasn't specific enough e.g. 'The',
                                    then OMDB will only return the message 'Too many results!'</p>
                            </div>
                            <div className='col'></div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        if (searchResults && Object.keys(searchResults).length > 0)
            return (
                <React.Fragment>
                    <div className='container-fluid'>
                        <Header isSearch={true} />
                    </div>
                    <div className='container'>
                        {Object.entries(searchResults).map(([id, result], index) => (
                            <MovieBlurb movie={result} key={id + ' ' + index} />
                        ))}
                    </div>
                </React.Fragment>
            )
        else
            return (
                <React.Fragment>
                    <div className='container-fluid'>
                        <Header isSearch={true} />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'></div>
                            <div className='col-8'>
                                <div className='card border-secondary'>
                                    <div className='card-header bg-secondary text-white'>Welcome!</div>
                                    <div className='card-body'>
                                        <p className='card-text'>This web app lets you send search requests to OMDB, and will display the results for you!</p>
                                        <p className='card-text'>You can use the search bar at the top to make a new search from anywhere on the site,
                                        simple enter the name of the movie you would like to search for and hit enter or click the search button.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col'></div>
                        </div>
                    </div>
                </React.Fragment>
            )
    }
}

export default MovieSearchContainer;