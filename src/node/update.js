import React,{Component} from 'react';
import {connect} from 'react-redux';
import {uploadSuccess,uploadFail} from '../actions/index';
import {bindActionCreators} from 'redux';


class ProductDetail extends Component{


  render(){
if(!this.props.prod){
 return <h3>click image</h3>;
}
console.log(this.props.prod)
alert(this.props.prod.amzcode);

  return(
<form>
<input type="text" />
<input type="submit" />
</form>
);
  }
}

function mapStateToProps(state){
  return{
    prod:state.imageSelected
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({uploadSuccess:uploadSuccess,uploadFail:uploadFail},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);
