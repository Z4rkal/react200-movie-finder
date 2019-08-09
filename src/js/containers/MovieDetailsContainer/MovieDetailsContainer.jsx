import React, { Component } from 'react';
import Header from '../../components/Header';
import MovieDetails from '../../components/MovieDetails';

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <Header isSearch={false} />
                </div>
                <div className='container'>
                    <MovieDetails path={this.props.location.pathname} />
                </div>
            </React.Fragment>
        )
    }
}

export default MovieDetailContainer;