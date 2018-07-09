import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
//
// const styles = theme => ({
//   button: {
//     margin: theme.spacing.unit,
//   },
//   input: {
//     display: 'none',
//   },
// });

class  TextButtons extends React.Component {
  render(){
  const {items} = this.props;
  return (
            <div >
            {items.map((item) => {
                return(

                  <Button className={item.brands}>{item.brands}</Button>

                );
              }
            )}
            </div>
    )}}

                  // <Button color="primary" className={items.brands}>
      //   items.brands
      // </Button>
      // <Button  className={items.brands}>
      //   items.brands
      // </Button>
      // <Button className={items.brands}>items.brands</Button>
      // <Button className={items.brands}>reebok</Button>
      // <Button className={items.brands} >puma</Button>


function mapStateToProps(state) {
   return {
     items : state.items
   }
}
// TextButtons.propTypes = {
//   items: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps )(TextButtons);

//export default withStyles(styles)(TextButtons);
