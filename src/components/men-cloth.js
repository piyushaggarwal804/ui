import React from "react";
import Slider from "react-slick";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

import {bindActionCreators} from "redux";
//import background from './fetch';
class  BasicExample extends React.Component{
constructor(props){
  super(props),
  this.state={ count:0};
 this.handleClick = this.handleClick.bind(this);
}

    handleClick() {
    this.setState(prevState => ({
      count:prevState.count+1
    }));
  }
    render()
          {
            const {csv} = this.props;
const item=csv[this.state.count];
              return(

                      <div>

                        <ul className="list-group col-sm-4">
                            {

                                  <div key={item.n.partnerProductId}>
                                  <Link to={`/${item.n.partnerProductId}`}>
                                {item.n.title}
                                </Link>
                                <img src={`${item.n.thumbnailImageUrl}`}/>
                                <button onClick={this.handleClick}/>


                                </div>


                          }

                          </ul>
                          </div>

    );

    }
    }
 function mapStateToProps(state) {
    return {
      csv : state.csv

    }
 }

  export default connect(mapStateToProps )(BasicExample);
