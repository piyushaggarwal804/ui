import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import Routes from './routes'

const store= applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
  <BrowserRouter>
  <Routes/>
  </BrowserRouter>
  </Provider>,
   document.getElementById('root'));
