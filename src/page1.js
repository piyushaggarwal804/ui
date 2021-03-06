import React from "react";
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {bindActionCreators} from "redux";
class  BasicExample extends React.Component{
    render()
          {  const {items} = this.props;
              return(
                      <div>
                        <ul className="list-group col-sm-4">
                            {items.map((item) => {
                                return(
                                  <div key={item.title}>
                                  <Link to={`/${item.title}`}>
                                {item.title}
                                </Link>
                                </div>
                                )
                              }
                            )
                          }
                          </ul>
                          </div>
);
}
}

 function mapStateToProps(state) {
    return {
      items : state.items
    }
 }

 export default connect(mapStateToProps )(BasicExample);
