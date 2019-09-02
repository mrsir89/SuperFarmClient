import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';
import resultTable from './resultTable';
import './orderSuccess.css';

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
            const { data } = response.payload;
            console.log(response,' 확인~!~!!!!!!!!!!!1')
            console.log(data,'data 확인~!!!!!!!!!!!!!!!!!')
            window.opener.location.replace("/")

            window.close();

        });
            // window.opener._redirect('adsdd')
            // window.close();
        // window.location.href='_redirect()';
        
    }
    _numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    render(){
        console.log(this.props,' 여기는 render')
        const{ order } = this.props
        const{ orderList } = this.props
        console.log('orderlist',orderList)
          return(
            <div className="payment">
                <div className="payFont" align="center">
               <button type="button" className="btn btn-warning" onClick={this._orderCheck}><h1>결제</h1></button>
               <br/>
               </div>
                <div className="paytable">
                <table className="tg">
                    <tbody>
                        <tr height="50px">
                            <td> 품목 : </td>
                            <td>{orderList.cartlist[0].productBoardTitle}
                                
                            </td>
                        </tr>
                        <tr>
                            <td>결제금액 : </td>
                            <td>{this._numberWithCommas(orderList.TotalPrice)}원</td>
                        </tr>
                    </tbody>
                </table>
               </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    console.log(state, 'ddddddddddddddd')
    const { order } = state
    const { kakaoPay } = order
    const { orderList } = order
    return {
        kakaoPay,
        order,
        orderList

    }

}
const mapDispatchToProps = dispatch =>({
    kakaoPaySuccess:(kakaopayResult) => dispatch(Actions.kakaoPaySuccess(kakaopayResult))
})
export default connect(mapStateToProps,mapDispatchToProps)(orderSuccess);