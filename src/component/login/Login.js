import React from 'react';
import { Actions } from '../../actions/index';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

const onChangeRoute = ({ props }) => {
  console.log(props, "tesdfsefefsaef");
  let path = '/';
  props.history.push(path);
}

const loginAsync = (customerId, password, history) => (dispatch) => {
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
        history.push("/");
      } else {
        return Promise.reject(response);
      }
    }).catch(error => {
      return console.log('login Error', error)
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

  // .then(response=>{
  //   if(response.type===ActionTypes.LOGIN_SUCCESS){
  //     this.routeChange();
  //   }

  render() {
    return (
      <div className="main">
        <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-15 com-sm-15">
            <div className="content-form-page">
              <div className="row">
                <div className="col-md-15 col-sm-15">

                  <div className="Login">
                    <div className="LoginForm">
                      <div className="top">
                        Log in
              </div>
                      <form onSubmit={e => this.onSubmit(e)}>
                        <input type="text" name="customerId" value={this.state.userId} onChange={this._onchange} placeholder="Username" />
                        <input type="password" name="password" value={this.state.password} onChange={this._onchange} placeholder="Password" />
                        <input type="submit" name="submit" value="Log In" />
                        {/* <button onClick={this.routeChange}>Log In</button> */}
                      </form>
                      <div className="bottom">
                        <a href="/page-forgotton-password.html">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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