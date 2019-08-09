import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class MovieBlurb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: `false`
        }

        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(path) {
        this.setState({
            redirect: path
        })
    }

    render() {
        if (this.state.redirect !== 'false')
            return (<Redirect to={this.state.redirect} />)

        const { movie } = this.props;
        if (movie) {
            return (
                <div className='card mb-3'>
                    <div className='row no-gutters'>
                        <div className='col-md-4'>
                            {movie.Poster !== 'N/A' ?
                                <img src={movie.Poster} className='card-img' alt={`Poster for the movie ${movie.Title}`} />
                                : null
                            }
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.Title && movie.Title !== 'N/A' ? movie.Title : 'No Title Found'}</h5>
                                <p className='card-text'>{movie.Released && movie.Released !== 'N/A' ? movie.Released : 'No Release Data Available'}</p>
                                <hr></hr>
                                <p className='card-text'>{movie.Plot && movie.Plot !== 'N/A' ? movie.Plot : 'No Plot Summary Available'}</p>
                                <button className='btn btn-info' onClick={() => this.handleRedirect(`/movie/${movie.imdbID}`)}>More Information</button>
                            </div>
                        </div>
                    </div>
                    <div className='row text-right'>

                    </div>
                </div>
            )
        }
        return (
            <React.Fragment>
                <p>Error: A MovieBlurb got mounted without a movie prop</p>
            </React.Fragment>
        )
    }
}

export default MovieBlurb;

//Example Data
/*
{"Title": "La Haine",
        "Year":"1995",
        "Rated":"Not Rated",
        "Released":"23 Feb 1996",
        "Runtime":"98 min",
        "Genre":"Crime,
         Drama",
        "Director":"Mathieu Kassovitz",
        "Writer":"Mathieu Kassovitz",
        "Actors":"Vincent Cassel,
         Hubert Koundé,
         Saïd Taghmaoui,
         Abdel Ahmed Ghili",
        "Plot":"24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
        "Language":"French",
        "Country":"France",
        "Awards":"8 wins & 13 nominations.",
        "Poster":"https://m.media-amazon.com/images/M/MV5BNDNiOTA5YjktY2Q0Ni00ODgzLWE5MWItNGExOWRlYjY2MjBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg",
        "Ratings":[{"Source": "Internet Movie Database","Value":"8.1/10"},
                   {"Source": "Rotten Tomatoes","Value":"100%"}],
        "Metascore":"N/A",
        "imdbRating":"8.1",
        "imdbVotes":"132,
        933",
        "imdbID":"tt0113247",
        "Type":"movie",
        "DVD":"17 Apr 2007",
        "BoxOffice":"N/A",
        "Production":"Criterion Collection",
        "Website":"N/A",
        "Response":"True"}
*/