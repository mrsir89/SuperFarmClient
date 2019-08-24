import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';


class kakaoPay extends React.Component{

    constructor(props){
        super(props)
    }


    _kakaoPayStart=()=>{
        console.log('kakopay test',this.props)
        const {kakaoPayReady} = this.props;
        kakaoPayReady();        
    }
    render(){
        console.log('결제 실행 함니다.')
        return(
            <div>
                
                <form action={this._kakaoPayStart}>
                    <input type="button" value="카카오페이 테스트" onClick={this._kakaoPayStart}/>
                </form>

            </div>
        )
    }
}
const mapStateToProps =(state) =>({
   

})
const mapDispatchToProps = dispatch =>({
    kakaoPayReady:()=>dispatch(Actions.kakaoPayReady())
})

export default connect(null,mapDispatchToProps)(kakaoPay);