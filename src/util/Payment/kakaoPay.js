import React from 'React';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';


class kakaoPay extends React.Component{

    constructor(props){
        super(props)
    }


    _kakaoPayStart(){

    }
    render(){
        return(
            <div>
                
                <form action={this._kakaoPayStart}>
                    <input type="summit" value="테스트"/>
                </form>

            </div>
        )
    }
}
export default connect(mapTateToprops,mapDispatchToProps)(kakaoPay);