import React from 'react';
import { Actions } from '../../actions';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getForkTsCheckerWebpackPluginHooks } from 'fork-ts-checker-webpack-plugin/lib/hooks';
import './UserEdit.css';


const userEditAsync=(changeUserInfo, history) => (dispatch) => {
    // 수정후 바로 집으로 보내버리기. 왜냐 USER_EDIT_SUCCESS를 받을 동안 현재 페이지가 실행되는데
    // 그사이에 setState후 랜더링이 발생 UserDetails가 undefined로 값이 없어져서 그전에 미리 보내버리기.
    console.log("userEdit 시작", changeUserInfo);
    localStorage.clear();
    history.push("/login");
    alert('회원님의 정보가 성공적으로 수정되었습니다. 다시 로그인 해주세요~!');
    return dispatch(Actions.userEdit(changeUserInfo))
        .then(response => {
            if (response.Type === ActionTypes.USER_EDIT_SUCCESS) {
            }else {
                return Promise.reject(response);
            }
        }).catch(error => {
            return console.log('userEdit', error)
        });
}

const onChangeRoute = ({ props }) => {
    console.log(props, "tesdfsefefsaef");
    let path = '/';
    props.history.push(path);
  }
  

class userEdit extends React.Component {

    constructor(props) {
        super(props)
        const { userDetails } = this.props

        this.state = {     
                userId: userDetails.userId,
                userPassword: '',
                userEmail: userDetails.userEmail,
                userNum: userDetails.userNum,
                customerAddr: userDetails.customerAddr,
                customerPhone: userDetails.customerPhone,
                userPassword1:'',
                passwordCheck:false,
                addrCheck:false,
                customerPhoneCheck:false
        }

        this.onChange = this.onChange.bind(this);

        this.routeChange=this.routeChange.bind(this);

        this._inputCheck=this._inputCheck.bind(this);
    }

      // Change endpoint after Login (with some error)
  routeChange() {
    let path = '/';
    this.props.history.push(path);
  }

    onSubmit(e) {
        e.preventDefault();
        const {userEdit} = this.props
        console.log('userEdit submit', userEdit);
        const { history } = this.props

        if(this.state.userPassword===null || this.state.userPassword===undefined || this.state.userPassword1===null || this.state.userPassword1===undefined){
            alert("비밀번호을 확인하세요!");
        }else if(this.state.customerAddr === null || this.state.customerAddr === undefined ){
            alert("주소를 입력하세요")
        }else if(this.state.customerPhone===null || this.state.customerPhone===undefined){
            alert("핸드폰 번호를 입력하세요")
        } else if(this.state.userPassword !== this.state.userPassword1){
            alert("비밀번호를 재확인 하세요")
        } else if(this.state.userPassword==="" || this.state.customerPhone==="" || this.state.customerAddr===""){ 
            alert('빈칸이 있습니다. 확인하세요.')
        }else if (this.state.addrCheck === true || this.state.passwordCheck ===true || this.state.customerPhoneCheck ===true){
            const changeUserInfo = {
                userEmail: this.state.userEmail,
                userId: this.state.userId,
                userNum: this.state.userNum,
                userPassword: this.state.userPassword,
                customerAddr: this.state.customerAddr,
                customerPhone: this.state.customerPhone,
            };
            console.log("submit 완료");
            userEdit(changeUserInfo, history);
        }// else
    }

    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(value, '========value');
        console.log(name, '=========name');
        this.setState({
            [name]: value
        });
        console.log(name, value, "name,value넣은 후.....")
        console.log(this.state)
        this._inputCheck();
    }

    _inputCheck(){
        let userPasswordCheck=this.state.userPassword;
        let customerAddrCheck=this.state.customerAddr;
        let customerPhoneCheck=this.state.customerPhone;
        if(userPasswordCheck!==null || userPasswordCheck!==undefined || customerPhoneCheck!==null || customerPhoneCheck!==undefined || customerAddrCheck !== null || customerAddrCheck!==undefined){
           this.setState({
            passwordCheck:true,
            addrCheck:true,
            customerPhoneCheck:true
           });
        }
    }

    render() {
        const { userDetails } = this.props;
        console.log('현재의 state >>>>', this.state)
        console.log("현재의 props", this.props);
        console.log("render userDetails->>>>>", userDetails);
        return (
            <div className="edituser" class="mt_30">
                <br/><br/><br/><br/><br/><br/>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <h3>회원정보 수정</h3><br/>
                </div>
                <div className="edit-table" style={{display:'flex',justifyContent:'center'}} id="person-Info">
                    <form onSubmit={e => this.onSubmit(e)}>
                        <table>
                            <colgroup>
                                <col width="187"/>
                                <col width="*"/>
                            </colgroup>
                            <tbody>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">회원 ID</th>
                                    </div>
                                    <td><input value={userDetails.userId} /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">비밀번호<span class="red">*</span></th>
                                    </div>
                                    <td><input type="password" name="userPassword" onChange={this.onChange} placeholder="변경할 비밀번호 입력" /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">비밀번호 재확인<span class="red">*</span></th>
                                    </div>
                                    <td><input type="password" name="userPassword1" onChange={this.onChange} placeholder="변경할 비밀번호 입력" /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">고객 이름</th>
                                    </div>
                                    <td><input value={userDetails.username} /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">Email</th>
                                    </div>
                                    <td><input value={userDetails.userEmail} /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scop="row">핸드폰 번호<span class="red">*</span></th>
                                    </div>
                                    <td><input type="phone" name="customerPhone" onChange={this.onChange} value={userDetails.customerPhone}  placeholder="'-'없이 입력" /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">주소<span class="red">*</span></th>
                                    </div>
                                    <td><input type="address" name="customerAddr" onChange={this.onChange} value={userDetails.customerAddr} placeholder="주소입력" /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">생년월일</th>
                                    </div>
                                    <td><input value={userDetails.position.customerBirth} /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">고객 등급</th>
                                    </div>
                                    <td><input value={userDetails.position.customerGrade} /></td>
                                </tr>
                                <tr>
                                    <div class="tb-1">
                                        <th scope="row">최근 접속일자</th>
                                    </div>
                                    <td><input value={userDetails.userLastConnect} /></td>
                                </tr>
                                <tr>
                                    <div class="tb-l">
                                        <th scope="row">가입일자</th>
                                    </div>
                                    <td><input value={userDetails.userRegday} /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="submit">
                            <input type="submit" name="onSubmit" value="저장"/>
                        </div>
                    </form>
                </div>
                </div>
        );
    }

}

function mapStateToProps(state) {
    console.log(state, "userEdit창 state")
    const { auth } = state;
    const { userDetails } = auth;
    console.log(userDetails, ' <-----userdetails ')
    return {
        userDetails
    };
}//mapStateToProps

const mapDispatchToProps=(dispatch, history) => ({
    userEdit: (changeUserInfo, history) => dispatch(userEditAsync(changeUserInfo, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(userEdit);