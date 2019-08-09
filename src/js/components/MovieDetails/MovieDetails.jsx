import React, { Component } from 'react';

class MovieDetails extends Component {
    render() {
        const movieIdPattern = /\/?movie\/(.+)/;
        const { searchResults, path } = this.props;

        if (movieIdPattern.test(path)) {
            const id = movieIdPattern.exec(path)[1];

            if (searchResults && searchResults[id]) {
                const movie = searchResults[id];
                return (
                    <React.Fragment>
                        <div className='row'>
                            <div className='col-12 col-md-4'>
                                {movie.Poster !== 'N/A' ?
                                    <img src={movie.Poster} className='card-img' alt={`Poster for the movie ${movie.Title}`} />
                                    : null
                                }
                            </div>
                            <div className='col-12 col-md-8'>
                                <div className='card border-info'>
                                    <div className='card-header bg-info text-white'>
                                        Movie Details
                                </div>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{movie.Title}</h5>
                                        <p className='card-text movie-tags'>
                                            {/[0-9]+$/.test(movie.Released) ?
                                                <span>Released {/[0-9]+$/.exec(movie.Released)}</span>
                                                : null}
                                            {movie.Runtime !== 'N/A' ?
                                                <span>{movie.Runtime}</span>
                                                : null}
                                            {movie.Genre !== 'N/A' ?
                                                <span>{movie.Genre}</span>
                                                : null}
                                        </p>
                                        <p className='card-text mb-3'>{movie.Plot}</p>
                                        <p className='card-text mb-3'>{movie.Awards}</p>
                                        <p className='card-text'><strong>Metascore</strong>: {movie.Metascore}<br>
                                        </br><strong>IMDB</strong>: {movie.imdbRating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
            return (
                <React.Fragment>
                    <p>Error: Couldn't find a movie with id: {id}</p>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <p>Error: invalid path, couldn't parse the movie id</p>
            </React.Fragment>
        )
    }
}

export default MovieDetails;

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
"Ratings":[{"Source": "Internet Movie Database",
"Value":"8.1/10"},
{"Source": "Rotten Tomatoes",
"Value":"100%"}],
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