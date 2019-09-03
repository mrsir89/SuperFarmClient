import React from 'react';
import { Actions } from '../../actions/index';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const loginAsync = (customerId, password, history) => (dispatch) => {
  console.log('loginAsynce 시작 ', customerId, password)
  history.push('/');

  return dispatch(Actions.login(customerId, password))
    .then(response => {
      if (response === undefined || response === null) {
        alert(' 아이디 또는 비밀 번호가 잘못 되었습니다.')
        return window.location.href = 'http://localhost:3000/';

      } else {
        if (response.type === ActionTypes.LOGIN_SUCCESS) {
          return dispatch(Actions.getUserMe())

        } else {
          return alert('아이디 또는 비밀 번호가 잘못 되었습니다.');

        }
      }
    }).then(response => {
      if (response === undefined || response === null) {
        alert(' 유저 정보를 가져 오는데 실패 하였습니다. ')
        return Actions.logout

      } else {
        if (response.type === ActionTypes.GET_USERME_SUCCESS) {
          let userNum = response.payload.data.userNum;
          return dispatch(Actions.getCartByUser(userNum));

        } else {
          return alert(' cart 에서 회원 정보를 가져 오는데 실패 하였습니다. \n\n다시 시도해 주세요')
        }
      }
    }).then(response => {
      if (response.type === ActionTypes.GET_CART_SUCCESS) {
        history.push("/")
        alert(`${customerId} 님 접속을 환영 합니다.`)

      } else {
        alert('회원 정보를 가져 오는데 실패 하였습니다. \n\n다시 시도해 주세요');
        return dispatch(Actions.logout())

      }
    }).catch(error => {
      return console.log(' login Error', error)
    });
}


class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      customerId: '',
      password: ''
    }
    this._onchange = this._onchange.bind(this);
    this.routeChange = this.routeChange.bind(this);
    this._goBack = this._goBack.bind(this);
  }


  _goBack() {
    const { history } = this.props;
    history.goBack();
  }
  // Change endpoint after Login (with some error)
  routeChange() {
    let path = '/';
    this.props.history.push(path);
  }



  _onchange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  }

  onSubmit(event) {
    event.preventDefault();
    const { login } = this.props
    let customerId = this.state.customerId
    let password = this.state.password
    console.log('customerId : ', customerId, 'password  : ', password)
    const { history } = this.props
    login(customerId, password, history);
  }

  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{ __html: "\nbody {font-family: Arial, Helvetica, sans-serif;}\nform {border: 3px solid #f1f1f1;}\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n}\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n.cancelbtn {\n  width: auto;\n  padding: 10px 18px;\n  background-color: #f44336;\n}\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n}\n\nimg.avatar {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n}\n\nspan.psw {\n  float: right;\n  padding-top: 16px;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n  span.psw {\n     display: block;\n     float: none;\n  }\n  .cancelbtn {\n     width: 100%;\n  }\n}\n" }} />
        <div className="Login">
          <div className="LoginForm">
            <div className="top">
              Log in
                 </div>
            <form onSubmit={e => this.onSubmit(e)}>
              <input type="text" name="customerId" value={this.state.userId} onChange={this._onchange} placeholder="Username" />
              <input type="password" name="password" value={this.state.password} onChange={this._onchange} placeholder="Password" />
              <input type="submit" name="submit" value="Log In" />
            </form>
            <div className="bottom">
              <a href="/page-forgotton-password.html">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (customerId, password, history) => dispatch(loginAsync(customerId, password, history))
});


export default withRouter(connect(null, mapDispatchToProps)(Login));