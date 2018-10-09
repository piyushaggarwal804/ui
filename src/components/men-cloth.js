import React from "react";
import Slider from "react-slick";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import axios from 'axios';
import cheerio from 'cheerio';
import Images from '../reducers/fetch1'
import {bindActionCreators} from "redux";
import Update from '../node/update';



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
                          <div>
                            <ul className="list-group col-sm-4">
                                  <div>
                                  <Link to={`/${item.n.partnerProductId}`}>
                                {item.n.title}
                                </Link>
                                <img src={`${item.n.thumbnailImageUrl}`}/>
                                <div>
                                <Images item={item} />
                                </div>
                                <button onClick={this.handleClick}>NEXT</button>
                                </div>
                          </ul>
                          <Update item={item}/>
                          </div>

                  </div>
    );

    }

    }
 function mapStateToProps(state) {
    return {
      csv : state.csv

    }
 }



export default connect(mapStateToProps)(BasicExample);
