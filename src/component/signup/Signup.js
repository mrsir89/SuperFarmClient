import React from 'react';
import { withRouter } from 'react-router-dom';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import { ActionTypes } from '../../contants';
import './Signup.css';
// Store가 가진 state를 어떻게 props에 엮을 지 정한다.
//   (이 동작을 정의하는 함수는 mapStateToProps라고 불립니다)
// Reducer에 action을 알리는 함수 dispatch를 어떻게 props에 엮을 지 정한다. 
//   (이 동작을 정의하는 함수는 mapDispatchToProps라고 불립니다)
// 위에 두가지가 적용된 props를 받을 Component를 정한다
// Store와 Reducer를 연결시킬 수 있도록 만들어진 Component가 반환값이 된다


const signupAsync = (signupModel) => dispatch => {
  return dispatch(Actions.getClientToken())
    .then(response => {
      if (response.type === ActionTypes.GET_TOKEN_SUCCESS) {
        console.log('dispatch signupAsync ActionTypes.GET_TOKEN_SUCCESS ')
        return dispatch(Actions.signup(signupModel))
      } else {
        return Promise.reject(response);
      }
    });
};


class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: { value: '' },
      password: { value: '' },
      passwordCheck: { value: '' },
      name: { value: '' },
      birthday: { value: '' },
      // gender:{ value:'' },
      email: { value: '' },
      address: { value: '' },
      phone: { value: '' },
      singupCheck: {
        idCheck: false,
        passwordCheck: false,
        emailCheck: false
      },
      signupCheckMessage: {
        idMessage: '아이디 중복체크를 해주세요',
        passwordMes: '패스워드를 입력해주세요',
        emailMessage: '이메일 중복 체크를 해주세요'
      }

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._passwordCheck = this._passwordCheck.bind(this);
  }

  componentWillMount() {
    console.log('willMount 실행')

  }
  componentDidMount() {
    console.log('DidMount 실행')
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.handleRadio = this.handleRa

    console.log(target, '     :target')
    console.log(value, '    :value')
    console.log(name, '   : name')
    this.setState({
      [name]: {
        value: value
      }
    });
    console.log(this.state)
    this._passwordCheck()
  }

  handleRadio(event) {
    let obj = {}
    obj[event.target.value] = event.target.checked
    this.setState({
      gender: {
        value: event.target.value
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submit 실행 합니다.')
    const signupModel = {
      id: this.state.id.value,
      name: this.state.name.value,
      password: this.state.password.value,
      birthday: this.state.birthday.value,
      // gender : this.state.gender.value,
      signupContact: {
        phone: this.state.phone.value,
        address: this.state.address.value,
        email: this.state.email.value
      }
    }
    const { signup } = this.props;
    signup(signupModel);
  }


  _passwordCheck() {
    //  console.log({getState},'get State 확인~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    let password1 = this.state.password.value;
    let password2 = this.state.passwordCheck.value;
    console.log('password1 = :', password1, '   password2 =  :', password2)
    if (password1 === password2) {
      this.setState({
        signupCheckMessage: {
          passwordMes: '패스워드가 일치 합니다.'
        },
        singupCheck: {
          passwordCheck: true
        }
      })
    } else {
      this.setState({
        signupCheckMessage: {
          passwordMes: '패스워드가 일치 하지 않습니다'
        },
        singupCheck: {
          passwordCheck: false
        }
      })
    }
  }


  render() {

    return (
      <div className="Signup">
        <div className="SignupForm">
          <div className="top">
            회원가입
        </div>
          <form onSubmit={this.handleSubmit}>
            <li> ID <input type="text" name="id"
              value={this.state.id.value}
              onChange={this.handleInputChange} placeholder="아이디" />
              <input type="button" value="아이디중복체크" onClick={this._idCheck}></input></li>
            <li>{this.state.signupCheckMessage.idMessage}</li>

            <li>Password <input type="password" name="password"
              onChange={this.handleInputChange}
              placeholder="비밀번호" /> </li>

            <li>Password확인 <input type="password" name="passwordCheck"
              onChange={this.handleInputChange}
              placeholder="비밀번호확인" /> </li>
            <li>{this.state.signupCheckMessage.passwordMes}</li>

            <li> 이름 <input type="text" name="name"
              value={this.state.name.value} onChange={this.handleInputChange}
              placeholder="이름" /> </li>

            <li> email <input type="text" name="email"
              value={this.state.email.value} onChange={this.handleInputChange}
              placeholder="eamil" /><input type="button" value="eamil 중복체크"></input> </li>

            <li> 생일 <input type="Date" name="birthday"
              value={this.state.birthday.value} onChange={this.handleInputChange}
              placeholder="birthday" /> </li>

            {/* <li> 남 <input type="radio" name="gender"
          value='남' onChange={this.handleRadio}
          placeholder="gender" /> 
          
          여 <input type="radio"name="gender" 
          value='여' onChange={this.handleRadio}
          placeholder="gender" /> </li> */}

            <li>주소 <input type="text" name="address"
              value={this.state.address.value} onChange={this.handleInputChange}
              placeholder="address" /> </li>

            <li> 연락처 <input type="text" name="phone"
              value={this.state.phone.value} onChange={this.handleInputChange}
              placeholder="phone" />  </li>
            <input type="submit" id="submit" name="submit" value="회원가입" />
          </form>

          <div className="footer">
            <a href="/login">Already have account?</a>
          </div>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (signupModel) => dispatch(signupAsync(signupModel))
});

export default connect(null, mapDispatchToProps)(Signup);