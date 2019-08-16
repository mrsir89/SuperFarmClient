import React from 'react';
import { connect } from 'react-redux';
import './Signup.css';
import { resolve } from 'path';
import { reject } from 'q';
import { request } from 'http';
import { _addSignup } from './Signup';

export default class SignupForm extends React.Component {

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
      phone: { value: '' }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    console.log(target, '     :target')
    const value = target.value;
    console.log(value, '    :value')
    const name = target.name
    console.log(name, '   : name')
    this.setState({
      [name]: {
        value: value
      }
    });
    console.log(this.state)
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
    console.log(this.state)
    console.log(e.target.name, 'on submit')
    e.preventDefault();
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
    console.log(signupModel)
    _addSignup(signupModel);

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
              onChange={this.handleInputChange} placeholder="아이디" /> </li>

            <li>Password <input type="password" name="password"
              value={this.state.password.value}
              onChange={this.handleInputChange}
              placeholder="비밀번호" /> </li>

            <li>Password확인 <input type="password" name="passwordCheck"
              value={this.state.passwordCheck.value} onChange={this.handleInputChange}
              placeholder="비밀번호확인" /> </li>

            <li> 이름 <input type="text" name="name"
              value={this.state.name.value} onChange={this.handleInputChange}
              placeholder="이름" /> </li>

            <li> email <input type="text" name="email"
              value={this.state.email.value} onChange={this.handleInputChange}
              placeholder="eamil" /> </li>

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
        </div>
      </div>
    )
  }
}