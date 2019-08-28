import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';

class orderSuccess extends React.Component{

    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    _orderCheck=()=>{
        console.log('....',this.props)
        const { kakaoPay } = this.props
        const { order } = this.props
        const { search } = this.props.location;
        
        console.log(order,'   kaako 확인 ')
        let pg_token= search.substring(search.indexOf('=')+1)
        console.log(pg_token,' ph_token~~~~~~~')
        const{ kakaoPaySuccess } = this.props;
        
        var kakaopayResult = {
            pg_token:pg_token,
            tid:kakaoPay.tid,
            partner_order_id:order.order.orderNum,
            partner_user_id:order.order.userNum,
            total_amount:order.order.orderTotalPrice

        }
        console.log(kakaopayResult,' kakaopayResult ')
        kakaoPaySuccess(kakaopayResult).then(response=>{
            // window.opener._redirect('adsdd')
            // window.close();
        });
        // window.location.href='_redirect()';
        
    }

    render(){
        console.log(this.props,' 여기는 render')
        return(
            <div>
                asdasdads
               <input type="button" value="확인" onClick={this._orderCheck} />
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log(state, 'ddddddddddddddd')
    const { order } = state
    const { kakaoPay } = order
    return {
        kakaoPay,
        order
    }

}
const mapDispatchToProps = dispatch =>({
    kakaoPaySuccess:(kakaopayResult) => dispatch(Actions.kakaoPaySuccess(kakaopayResult))
})
export default connect(mapStateToProps,mapDispatchToProps)(orderSuccess);