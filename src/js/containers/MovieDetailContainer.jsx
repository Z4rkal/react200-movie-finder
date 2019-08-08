import React, { Component } from 'react';
import Header from '../components/Header';

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className='container-fluid'>
                    <Header onDetails={true} />
                </div>
                <div className='container'>

                </div>
            </React.Fragment>
        )
    }
}

export default MovieDetailContainer;