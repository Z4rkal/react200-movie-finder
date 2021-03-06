import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Route exact path='/' component={MovieSearchContainer} />
            <Route path='/movie/:id' component={MovieDetailsContainer} />
        </Router>
      </React.Fragment>
    )
  }
}

export default App;