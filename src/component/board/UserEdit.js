import React from 'react';
import { Actions } from '../../actions';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';



const userEditAsync=(changeUserInfo, history) => (dispatch) => {
    console.log("userEdit 시작", changeUserInfo);
    return dispatch(Actions.userEdit(changeUserInfo))
        .then(response => {
            if (response.Type === ActionTypes.USER_EDIT_SUCCESS) {
                history.push("/");
                alert('회원님의 정보가 성공적으로 수정되었습니다.');
            }
        }).catch(error => {
            return console.log('login Error', error)
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
        }

        this.onChange = this.onChange.bind(this);

        this.routeChange=this.routeChange.bind(this);
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
            alert("비번을 확인하세요!");
        }else if(this.state.customerAddr === null || this.state.customerAddr === undefined ){
            alert("주소를 입력하세요")
        }else if(this.state.customerPhone===null || this.state.customerPhone===undefined){
            alert("핸드폰 번호를 입력하세요")
        } else if(this.state.userPassword !== this.state.userPassword1){
            alert("비밀번호를 재확인 하세요")
        } else{
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
    }

    render() {
        const { userDetails } = this.props;
        console.log('현재의 state >>>>', this.state)
        console.log("현재의 props", this.props);
        console.log("render userDetails->>>>>", userDetails);
        return (
            <div className="edituser">
                <h3>회원정보 수정</h3>
                <div className="edit-table">
                    <form onSubmit={e => this.onSubmit(e)}>
                        <table>
                            <tbody>
                                <tr>
                                    <td scope="row">회원 ID</td>
                                    <td><input value={userDetails.userId} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">비밀번호</td>
                                    <td><input type="password" name="userPassword" onChange={this.onChange} placeholder="변경할 비밀번호 입력" /></td>
                                </tr>
                                <tr>
                                    <td scope="row">비밀번호 재확인</td>
                                    <td><input type="password" name="userPassword1" onChange={this.onChange} placeholder="변경할 비밀번호 입력" /></td>
                                </tr>
                                <tr>
                                    <td scope="row">고객 이름</td>
                                    <td><input value={userDetails.username} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">Email</td>
                                    <td><input value={userDetails.userEmail} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">고객성별</td>
                                    <td><input value={userDetails.position.customerGender} /></td>
                                </tr>
                                <tr>
                                    <td scop="row">핸드폰 번호</td>
                                    <td><input type="phone" name="customerPhone" onChange={this.onChange} value={userDetails.customerPhone}  placeholder="'-'없이 입력" /></td>
                                </tr>
                                <tr>
                                    <td scope="row">주소</td>
                                    <td><input type="address" name="customerAddr" onChange={this.onChange} value={userDetails.customerAddr} placeholder="주소입력" /></td>
                                </tr>
                                <tr>
                                    <td scope="row">생년월일</td>
                                    <td><input value={userDetails.position.customerBirth} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">고객 등급</td>
                                    <td><input value={userDetails.position.customerGrade} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">최근 접속일자</td>
                                    <td><input value={userDetails.userLastConnect} /></td>
                                </tr>
                                <tr>
                                    <td scope="row">가입일자</td>
                                    <td><input value={userDetails.userRegday} /></td>
                                </tr>
                                <tr>
                                    <input type="submit" name="submit" value="저장" />
                                </tr>
                            </tbody>
                        </table>
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