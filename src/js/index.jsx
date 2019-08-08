import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import reducers from './reducers';
import App from './App';

const promise = createPromise({ types: { fulfilled: 'success' } });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(promise)
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
