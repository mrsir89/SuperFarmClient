import React from 'react';
import { withRouter } from 'react-router-dom';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import { ActionTypes } from '../../contants';
import './Signup.css';
import { async } from 'q';
// Store가 가진 state를 어떻게 props에 엮을 지 정한다.
//   (이 동작을 정의하는 함수는 mapStateToProps라고 불립니다)
// Reducer에 action을 알리는 함수 dispatch를 어떻게 props에 엮을 지 정한다. 
//   (이 동작을 정의하는 함수는 mapDispatchToProps라고 불립니다)
// 위에 두가지가 적용된 props를 받을 Component를 정한다
// Store와 Reducer를 연결시킬 수 있도록 만들어진 Component가 반환값이 된다


const signupAsync = (signupCustomer) => dispatch => {
  return dispatch(Actions.getClientToken())
    .then(response => {
      if (response.type === ActionTypes.GET_TOKEN_SUCCESS) {
        console.log('dispatch signupAsync ActionTypes.GET_TOKEN_SUCCESS ')
        return dispatch(Actions.signup(signupCustomer))
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
      passwordOrigin:'' ,
      passwordCheck:'' ,
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
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._passwordCheck = this._passwordCheck.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = '/';
    this.props.history.push(path);
  };


  componentWillMount() {
    console.log('willMount 실행');
    // Change endpoint after Login (with some error)


  }
  componentDidMount() {
    console.log('DidMount 실행')
  }


  shouldComponentUpdate(nextProps, nextState) {
    return (JSON.stringify(nextState) != JSON.stringify(this.state));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

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

  // 아이디 중복 체크 API 호출로 실시간 체크
  _idCheckChange = (event) => {
    console.log('아이디 바뀜', event.target)
    let id = ''
    id = event.target.value;
    id.trim();
    const { idCheck } = this.props;
    console.log(id)
    if (id.length > 3) {
      console.log(id.length, ' 3자리 넘어서 실행 된다.')
      idCheck(id).then(response => {
        console.log(response, '  idCheck 확인~~~~~~~~ ')
        if (response.type === ActionTypes.IDCHECK_SUCCESS) {
          this.setState({
            id: {
              value: id,
            },
            idCheckStatus: '사용가능한 아이디 입니다.'
          })
          return
        } else if(response.type === ActionTypes.IDCHECK_FAIL){
          this.setState({
            id: {
              value: ''
            },
            idCheckStatus: '사용 불가능한 아이디 입니다.'
          })
        }
      }).catch(error => {
        console.log(error, ' error 확인 ')
        this.setState({
          id: {
            value: ''
          },
          idCheckStatus: '사용 불가능한 아이디 입니다.'
        })
      })
    } else {
      this.setState({
        idCheckStatus:'입력하신 아이디가 짧습니다.'
      })
    }
  
  }

  _passwordCheck =(event)=>{
    
    const { asynAction } = this.props;
    asynAction().then(response=>{
      this.setState({
        passwordOrigin:event.target.value    
      })
      if(this.state.passwordOrigin === this.state.passwordCheck)
    })
    
  }
  componentDidCatch(err, errorInfo) {
    console.log("componentDidCatch");
    console.error(err);
    console.error(errorInfo);
    this.setState(() => ({ err, errorInfo }));
  }


  // handleRadio(event) {
  //   let obj = {}
  //   obj[event.target.value] = event.target.checked
  //   this.setState({
  //     gender: {
  //       value: event.target.value
  //     }
  //   })
  // }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submit 실행 합니다.')
    const signupCustomer = {
      userId: this.state.id.value,
      userName: this.state.name.value,
      userPassword: this.state.password.value,
      userEmail: this.state.email.value,
      customerBirth: this.state.birthday.value,
      // customerGender : this.state.gender.value,
      customerPhone: this.state.phone.value,
      customerAddr: this.state.address.value
    }
    const { signup } = this.props;
    signup(signupCustomer);
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
              onChange={this._idCheckChange} placeholder="아이디" />
            </li>
            <div>
               {this.state.idCheckStatus}{/** 여기는 아이디 중복 체크 결과가 나옴 */}
            </div>
            <li>Password <input type="password" name="password"
              onChange={this._passwordCheck}
              placeholder="비밀번호" /> </li>

            <li>Password확인 <input type="password" name="passwordCheck"
              onChange={this._passwordCheck}
              placeholder="비밀번호확인" /> </li>
            <li>여기에 비밀번호 체크 넣어 주기</li>

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
            {/* <input type="submit" id="submit" name="submit" value="회원가입" /> */}
            <input type="submit" id="submit" name="submit" value="회원가입" onClick={this.routeChange} />
          </form>

          <div className="footer">
            <a href="/login">Already have account?</a>
          </div>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (console.log('mapDispatchToProps', dispatch), {

  signup: (signupCustomer) => dispatch(signupAsync(signupCustomer)),
  idCheck: (id) => dispatch(Actions.idCheck(id)),
  emailCheck: (email) => dispatch(Actions.emailCheck(email)),
  asynAction: ()=>dispatch(Actions.asynAction())
});

export default connect(null, mapDispatchToProps)(Signup);