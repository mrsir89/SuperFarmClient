import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';
import './OrderSheet.css';

// TODO : cart에서 체크 된 것만 가져오고 싶음 
// 현재는 local Storage에 있는 cart가져오고 있음 
class OrderSheet extends React.Component {

  constructor(props) {    // props 굳이 안써줘도 넘어 옴
    super(props)
    const {cartlist} = props;
    this.state ={
        items : cartlist
    }
  }


  render(){
    return(
        <div>
            
        </div>
    ) 

  }

}


function mapStateToProps(state) {
    console.log('mapStateToProps--------', state)
    const { cart, auth } = state;
    const { userDetails } = auth;
    const { cartlist } = cart;
    return {
      cartlist,  // 배열 
      userDetails
    };
  }


export default connect(mapStateToProps)(OrderSheet);