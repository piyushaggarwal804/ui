import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import Routes from './routes.js'



const store= applyMiddleware(promise)(createStore);

//createStore , Provider from redux
//root reducers
//createStore(reducers)
//

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store(reducers)}>
  <BrowserRouter>
  <Routes/>
  </BrowserRouter>
  </Provider>,
   document.getElementById('root'));
