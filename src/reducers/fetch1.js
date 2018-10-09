import axios from 'axios';
import {connect} from 'react-redux';
import React ,{ Component} from 'react';
import cheerio from 'cheerio';
import {imageSelect} from '../actions/index';
import {bindActionCreators} from 'redux';

class Images extends Component{

constructor(props){
  super(props);

  this.state={kurs:[]};
  this.fetchAmazonProducts=this.fetchAmazonProducts.bind(this);
}

componentDidMount(){
  {this.fetchAmazonProducts(this)}
  // send api requests
}

fetchAmazonProducts(){
  var base_url = `https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=${this.props.item.n.title}`;
  var kurs=[];
  axios.get(base_url).then( (response) => {
    var $ = cheerio.load(response.data);

    $('.a-section.a-spacing-none.a-inline-block.s-position-relative').each( (i, elm) => {
     kurs.push( {
        src:$(elm).children('a,.a-link-normal.a-text-normal').children('img,.s-access-image.cfMarker').attr('src'),
        href:$(elm).children('a,.a-link-normal.a-text-normal').attr('href')
      });
    });
    return(kurs);
  })
  .then ( (kurs) => {
    console.log(kurs);
  this.setState({kurs:kurs});
  }).catch((e)=>{console.log(e)})


  // send api requests
  // on button click -- next image -- api request for amazon fetchAmazonProducts

  // this.setState({kurs:response.data})
}

render(){

return (<div>
  <div>
  <button onClick={this.fetchAmazonProducts}> SEARCH </button></div>
<div>
  {this.state.kurs.map((i)=>{
  const  n=i.href.indexOf("dp/");

    const image={
      flipProdId: this.props.item.n.partnerProductId,
      flipProdTitle: this.props.item.n.title,
      flipProdImgUrl : this.props.item.n.thumbnailImageUrl,
       amzcode :i.href.substring(n+3,n+13),
    }
  return  <img key={`${i.src}`} src={`${i.src}`} onClick={()=>this.props.imageSelect(image)} />
  })}
  </div></div>
)
}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({imageSelect:imageSelect},dispatch);
}

 export default connect(null,mapDispatchToProps)(Images);
