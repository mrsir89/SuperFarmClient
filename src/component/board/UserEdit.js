import React from 'react';
import ProductItem from './ProductItem';
import { Actions } from '../../actions/index';
import {ActionTypes} from '../../contants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditMe from './EditMe'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

// 일단 이건 회원정보 수정시 다시한번 재확인하는 거임
// 실제 수정하는 곳 EditMe.js에서
const checkAsync = (customerId, password) => (dispatch) => {
    return dispatch(Actions.login(customerId, password))
    .then(response => {
        if(response === ActionTypes.LOGIN_SUCCESS){
            return dispatch(Actions.getUserMe())
        } else {
            return Promise.reject(response);
        }
    }).then(response => {
        if(response === ActionTypes.GET_USERME_SUCCESS){
            return <EditMe></EditMe>
        }else{
            return Promise.reject(response);
        }
    });
}

class userCheck extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            customerId:'',
            password:'',
        }
        this._onChange=this._onChange.bind(this);
    }

    _onChange(event){
        const target = event.target;
        const name=target.name;
        const value = target.value;
        this.setState({
            [name]:value
        });
        console.log(this.state)
    }

    onSubmit(){
        const { userCheck } = this.props
        let customerId = this.state.customerId
        let password = this.state.password
        userCheck(customerId, password);
    }

    render(){
        return(
            <div className="userCheck">
                <div className="userCheckForm">
                    사용자 확인
                </div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="customerId" value={this.state.userId} onChange={this._onChange} placeholder="아이디입력"/>
                    <input type="password" name ="password" value={this.state.password} onChange={this._onChange} placeholder="비밀번호입력"/> 
                    <input type="submit" name="확인" value="userCheck"/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    userCheck: (customerId, password) => dispatch(checkAsync(customerId, password))
});

export default withRouter(connect(null, mapDispatchToProps)(userCheck));