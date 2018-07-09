import React from 'react';
import {Route} from 'react-router-dom'
import Page1 from './page1';
import MC from './components/men-cloth';
import MF from './components/men-foot';
import WC from './components/women-cloth';
import WF from './components/women-foot';

export default class all_Routes extends React.Component{
  render(){
      return(
        <div>
          <Route exact path="/" component={Page1}/>
          <Route path="/mens-footwear" component={MF}/>
          <Route path="/mens-clothing" component={MC} />
          <Route path="/womens-footwear" component={WF}/>
          <Route path="/womens-clothing" component={WC}/>
          </div>
      );
  }
}
