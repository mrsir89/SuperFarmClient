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
// Store와 Reducer를 연결시킬 수 있도록 만들어진 Component가 반환값이 된다.

const onChangeRoute = ({ props }) => {
  console.log(props, "tesdfsefefsaef");
  let path = '/';
  props.history.push(path);
}


const signupAsync = (signupCustomer,history) => dispatch => {
  return dispatch(Actions.getClientToken())
    .then(response => {
      if (response.type === ActionTypes.GET_TOKEN_SUCCESS) {
        console.log('dispatch signupAsync ActionTypes.GET_TOKEN_SUCCESS ')
        return dispatch(Actions.signup(signupCustomer,history)).then(response=>{
          
          history.push("/")
        })
      } else {
        return Promise.reject(response);
      }
    }).catch(error=>{
      alert('서버와의 통신중 오류가 생겼습니다. 다시 시도해 주세요')
      return history.push("/login")
    });
};


class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      passwordOrigin: '',
      passwordCheck: '',
      passwordComent: '비밀번호를 입력해 주세요',
      name: '',
      birthday:'' ,
      gender:'' ,
      email:'',
      address:'' ,
      phone:'' ,
      emailComent: 'email을 입력하세요',
      idCheck: false,
      passwordCheck: false,
      emailCheck: false

    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._signupSubmit = this._signupSubmit.bind(this);
    this._idCheckChange = this._idCheckChange.bind(this);
    this._passwordCheck = this._passwordCheck.bind(this);
    this._passwordOrigin = this._passwordOrigin.bind(this);
    this._emailCheck = this._emailCheck.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }


    // Change endpoint after Login (with some error)
    routeChange() {
      let path = '/';
      this.props.history.push(path);
    }
  



  componentWillMount() {
    console.log('willMount 실행')
  }

  componentDidMount() {
    console.log('DidMount 실행')
  }

  shouldComponentUpdate(nextState) {
    return (JSON.stringify(nextState) != JSON.stringify(this.state));
  }

  _handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    value.trim()
    console.log(target, '     :target')
    console.log(value, '    :value')
    console.log(name, '   : name')

    this.setState({
      [name]: value
    });
    console.log(this.state)
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
            id: id,
            idCheck: true,
            idCheckStatus: '사용가능한 아이디 입니다.'
          })
          return
        } else if (response.type === ActionTypes.IDCHECK_FAIL) {
          this.setState({
            id: {
              value: ''
            },
            idCheck: false,
            idCheckStatus: '사용 불가능한 아이디 입니다.'
          })
        }
      }).catch(error => {
        console.log(error, ' error 확인 ')
        this.setState({
          id: {
            value: ''
          },
          idCheck: false,
          idCheckStatus: '사용 불가능한 아이디 입니다.'
        })
      })
    } else {
      this.setState({
        idCheckStatus: '입력하신 아이디가 짧습니다.',
        idCheck: false
      })
    }
    console.log('Id change 확인중 ', this.state)
  }

  // 비밀번호 체크
  _passwordOrigin = (event) => {
    var password = event.target.value
    password.trim()
    const { asynAction } = this.props;

    asynAction().then(response => {
      this.setState({
        passwordOrigin: password
      })
      if ((this.state.passwordOrigin).length > 3) {
        if (this.state.passwordOrigin === this.state.passwordCheck) {
          this.setState({
            passwordComent: '비밀번호가 일치 합니다.',
            passwordCheck: true
          })
          console.log('password State', this.state)
        } else {
          this.setState({
            passwordComent: '비밀번호가 일치하지 않습니다.',
            passwordCheck: true
          })
        }
      } else {
        this.setState({
          passwordComent: '비밀번호가 짧습니다.',
          passwordCheck: true
        })
      }
    })
    console.log('state 확인~!@!!!!!!!!!!!!!!!!!!!!!', this.state)
  }
  _passwordCheck = (event) => {

    console.log(event.target)
    const { asynAction } = this.props;
    var password = event.target.value
    password.trim()
    console.log(this.props, 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
    console.log(event.target.value, 'check target')

    asynAction().then((response) => {
      console.log(response)
      this.setState({
        passwordCheck: password
      })
      if (this.state.passwordOrigin === this.state.passwordCheck) {
        this.setState({
          passwordComent: '비밀번호가 일치 합니다.',
          passwordCheck: true
        })
        console.log('password State', this.state)
      } else {
        this.setState({
          passwordComent: '비밀번호가 일치하지 않습니다.',
          passwordCheck: true
        })
      }
    })
    console.log('state 확인~!@!!!!!!!!!!!!!!!!!!!!!', this.state)
  }

  _emailCheck = (event) => {
    var email = event.target.value;
    email.trim();
    const { emailCheck } = this.props;
    console.log('email 체크 합니다용~~~', this.props)
    emailCheck(email).then(response => {
      if (response.type === ActionTypes.EMAILCHECK_SUCCESS) {
        this.setState({
          email: email,
          emailCheck: true,
          emailComent: '사용 가능 합니다.'
        })
      } else {
        this.setState({
          email:'',
          emailCheck: false,
          emailComent: '사용 불가능한 email입니다.'
        })
      }
    }).catch(error => {
      console.log('error', error)
      this.setState({
        emailCheck: false,
        emailComent: '사용 불가능한 email입니다.'
      });
    })

    console.log(email, ' email 확인!!!!!!')
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

  _signupSubmit(e) {
    e.preventDefault();
    console.log('submit 실행 합니다.')
    let checkpwd = this.state.idCheck;
    let checkId = this.state.passwordCheck;
    let checkemail = this.state.emailCheck;
    console.log('sumbit의 state.',this.state)
    if (checkpwd !== false && checkId !== false && checkemail !== false) {
      if (this.state.userId !== null && this.state.userId !==''
          &&this.state.name !=='' && this.state.birthday !=='' 
          &&this.state.address !=='' && this.state.phone !=='') {

        const signupCustomer = {
          userId: this.state.id,
          userName: this.state.name,
          userPassword: this.state.passwordOrigin,
          userEmail: this.state.email,
          customerBirth: this.state.birthday,
          customerGender: this.state.gender,
          customerPhone: this.state.phone,
          customerAddr: this.state.address
        }
        const { signup } = this.props;
        const { history }= this.props;
        signup(signupCustomer,history);

      
      }else{
        alert('누락된 곳이 있습니다.')
      }
    }else {
      alert(' 입력하지 않은 곳이 있습니다.')
    }
  };

  render() {

    return (
      <div className="Signup">
        <div className="SignupForm">
          <div className="top">
            회원가입
        </div>
          <form onSubmit={this._signupSubmit}>

            <li> ID <input type="text" name="id"
              onChange={this._idCheckChange} placeholder="아이디" />
              {this.state.idCheckStatus}{/** 여기는 아이디 중복 체크 결과가 나옴 */}
            </li>

            <li>Password <input type="password" name="password"
              onChange={this._passwordOrigin}
              placeholder="비밀번호" /> </li>

            <li>Password확인 <input type="password" name="passwordCheck"
              onChange={this._passwordCheck} 
              placeholder="비밀번호확인" /> </li>

            <li>{this.state.passwordComent}</li>

            <li> 이름 <input type="text" name="name"
              value={this.state.name} onChange={this._handleInputChange}
              placeholder="이름" /> 1</li>

            <li> email <input type="email" name="email"
              onChange={this._emailCheck}
              placeholder="eamil" />{this.state.emailComent}</li>

            <li> 생일 <input type="Date" name="birthday"
              value={this.state.birthday.value} onChange={this._handleInputChange}
              placeholder="birthday" /> </li>

            {/* <li> 남 <input type="radio" name="gender"
                value='남' onChange={this.handleRadio}
                placeholder="gender" /> 
                여 <input type="radio"name="gender" 
                value='여' onChange={this.handleRadio}
                placeholder="gender" /> </li> */}

            <li>주소 <input type="text" name="address"
              value={this.state.address.value} onChange={this._handleInputChange}
              placeholder="address" /> </li>

            <li> 연락처 <input type="text" name="phone"
              value={this.state.phone.value} onChange={this._handleInputChange}
              placeholder="phone" />  </li>
            {/* <input type="submit" id="submit" name="submit" value="회원가입" /> */}
            <input type="submit" id="submit" name="submit" value="회원가입"/>
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

  signup: (signupCustomer,history) => dispatch(signupAsync(signupCustomer,history)),
  idCheck: (id) => dispatch(Actions.idCheck(id)),
  emailCheck: (email) => dispatch(Actions.emailCheck(email)),
  asynAction: () => dispatch(Actions.asynAction())

});

export default connect(null, mapDispatchToProps)(Signup);