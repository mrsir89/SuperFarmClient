import React from 'react';
import { Actions } from '../../actions/index';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import UserEdit from './UserEdit';
import './UserEditLogin.css';

const onChangeRoute = ({ props }) => {
    console.log(props, "tesdfsefefsaef");
    let path = '/';
    props.history.push(path);
  }

const CheckAsync = (customerId, password, history)=> (dispatch) => {
    console.log('loginAsynce 시작 ', customerId, password)
    return dispatch(Actions.login(customerId, password))
      .then(response => {
        if (response.type === ActionTypes.LOGIN_SUCCESS) {
          return dispatch(Actions.getUserMe());
        } else {
          console.log('로그인 실패 ', response)
          return Promise.reject(response);
        }
      }).then(response => {
        if (response.type === ActionTypes.GET_USERME_SUCCESS) {
          console.log("userme 성공 >>>>>>>>>>>>");
          history.push("/useredit");
        } else {
          return Promise.reject(response);
        }
      });
}

class userCheck extends React.Component{

    constructor(props){
        super(props)
        this.state={
            customerId:'',
            password:''
        }
        this._onChange=this._onChange.bind(this);
        this.routeChange = this.routeChange.bind(this);
    }//constructor

    _onChange(event){
        const target = event.target;
        const value=target.value;
        const name=target.name;
        this.setState({
            [name]: value
        });
    }// text안의 내용을 담아 setState

     // Change endpoint after Login (with some error)
    routeChange() {
        let path = '/';
        this.props.history.push(path);
    }

    onSubmit(event) {
        event.preventDefault();
        // const loginInfo ={...this.state}
        // console.log(loginInfo,'testLogin onSubmin')
        const { login } = this.props
        let customerId = this.state.customerId
        let password = this.state.password

        console.log('customerId : ', customerId)
        console.log('password  : ', password)

        const { history } = this.props

        login(customerId, password, history);
    }

    onSubmit1(event){
      event.preventDefault();
      const { history } =this.props
      history.push("/");
    }

    render(){
        return (
            <div className="userCheck">
                {/* RELOGIN(CheckUser) */}
                <div id="userCheckForm">
                    <h2>사용자 확인</h2>
                    <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</p>
                </div>
                <form onSubmit={e => this.onSubmit(e)} onSubmit1={e => this.onSubmit1(e)}>
                  <div class="t-box-msg mt_30">
                      <p>
                        <label class="lab">아이디</label>
                        <input type="text" name="customerId" value={this.state.customerId} onChange={this._onChange} placeholder="아이디입력" />
                      </p>
                      <p>
                      <label class="lab">비밀번호</label>
                        <input type="password" name="password" value={this.state.password} onChange={this._onChange} placeholder="비밀번호입력" />
                      </p>
                  </div>
                  <div class="btn-foot mt_30" style={{display:'flex',justifyContent:'center'}}>
                   <input type="submit" name="확인" value="확인" class="btn_x110_a"></input>
                   <input type="submit" name="submit1" value="취소" class="btn_x110_b"></input>
                  </div>
                  </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (customerId, password, history) => dispatch(CheckAsync(customerId, password, history))
  });
  
  
  export default withRouter(connect(null, mapDispatchToProps)(userCheck));