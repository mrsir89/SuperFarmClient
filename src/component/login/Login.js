import React from 'react';
import { Actions } from '../../actions/index';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';


const loginAsync = (customerId, password) => (dispatch) => {
  console.log('loginAsynce 시작 ', customerId, password)
  return dispatch(Actions.login(customerId, password))
    .then(response => {
      if (response.type === ActionTypes.LOGIN_SUCCESS) {
        return dispatch(Actions.getUserMe())
      } else {
        console.log('로그인 실패 ', response)
        return Promise.reject(response);
      }
    }).then(response => {
      if (response.type === ActionTypes.GET_USERME_SUCCESS) {
        return <Redirect to="/" />
      } else {
        return Promise.reject(response);
      }
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
    // const loginInfo ={...this.state}
    // console.log(loginInfo,'testLogin onSubmin')
    const { login } = this.props
    let customerId = this.state.customerId
    let password = this.state.password
    console.log('customerId : ', customerId)
    console.log('password  : ', password)
    login(customerId, password);
  }

  render() {
    return (
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
            <a href="/findPassword">Forgot Password?</a> 
              </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (customerId, password) => dispatch(loginAsync(customerId, password))
});


export default withRouter(connect(null, mapDispatchToProps)(Login));