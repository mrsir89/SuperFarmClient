import React from 'react';
import { Actions } from '../../actions/index';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './login.css';


const loginAsync = (customerId, password, history) => (dispatch) => {
  console.log('loginAsynce 시작 ', customerId, password)
  history.push('/');

  return dispatch(Actions.login(customerId, password))
    .then(response => {
      if (response === undefined || response === null) {
        alert(' 아이디 또는 비밀 번호가 잘못 되었습니다.')
        return

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
        window.location.href = 'http://localhost:3000/';
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

  onSubmit=(e)=> {
    // e.preventDefault();
    const { login } = this.props
    let customerId = this.state.customerId
    let password = this.state.password
    console.log('customerId : ', customerId, 'password  : ', password)
    const { history } = this.props
    login(customerId, password, history);
  }

  render() {
    return (
      <div className="logo">
      <div id="backgroud" >
        <div className="loginGroup">
          <form onSubmit={e => this.handleOnSubmit(e)}>
            <div className="logo"><a href='/'>
              <img src="./image/logo.png" ></img>
              </a>
              <br/><br/><br/></div>
{/*             
            <div className="loginNotice">
              <h4><strong> 로그인 </strong></h4>
            </div> */}
            <div className='form-group row3'>
              <input className='input' type='text' name="customerId"
                value={this.state.userId} onChange={this._onchange} placeholder='ID' />
            </div>
            <div className='form-group row3'>
              <input className='input' type='password' placeholder='비밀번호'
                name="password" value={this.state.password} onChange={this._onchange} />
            </div>
            <div className='form-group row3'>
              <input type="button" className='btn3' value="Log in " onClick={this.onSubmit} />
            </div>
            {/* </div> */}
          </form>
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