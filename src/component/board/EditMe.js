import React from 'react';
import { Actions } from '../../actions/index';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

const userEditAsync=(changeUserInfo) => (dispatch) => {
    console.log("userEdit 시작", changeUserInfo);
    return dispatch(Actions.userEdit(changeUserInfo))
    .then(response => {
        if(response.Type===ActionTypes.USER_EDIT_SUCCESS){
            return dispatch(Actions.getUserMe());
        }else {
            console.log('실패ㅋㅋㅋㅋㅋㅋ')
            return Promise.reject(response);
        }
    }).then(response => {
        if(response.Type===ActionTypes.GET_USERME_SUCCESS){
            return <Redirect to="/" />
        } else{
            return Promise.reject(response);
        }
    });
}

class userEdit extends React.Component {

    constructor(props) {
        super(props)
        const { userDetails } = this.props

        this.state = {     
                userId: userDetails.userId,
                userPassword: userDetails.userPassword,
                userEmail: userDetails.userEmail,
                userNum: userDetails.userNum,
                userRegday: userDetails.userRegday,
                userType: userDetails.userType,
                username: userDetails.username,
                userLastConnect: userDetails.userLastConnect,
                customer_gender: userDetails.position.customer_gender,
                customerGrade: userDetails.position.customerGrade,
                customer_birth: userDetails.position.customer_birth,
                customerAddr: userDetails.position.customerAddr,
                customerPhone: userDetails.position.customerPhone,       
        }
        this.onChange = this.onChange.bind(this);
    }

    onSubmit() {
        const {userEdit} = this.props
        const changeUserInfo = {
                userEmail: this.state.userEmail,
                userId: this.state.userId,
                userLastConnect: this.state.userLastConnect,
                userNum: this.state.userNum,
                userPassword: this.state.userPassword,
                userRegday: this.state.userRegday,
                userType: this.state.userType,
                username: this.state.username,
                customerAddr:this.state.customerPhone,
                customerGrade:this.state.customerGrade,
                customerPhone:this.state.customerPhone,
                customer_birth:this.state.customer_birth,
                customer_gender:this.state.customer_gender
        };
        console.log("submit 후", changeUserInfo)
        userEdit(changeUserInfo);
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
        console.log(this.state)
    }

    render() {
        const { userDetails } = this.props;
        console.log('현재의 state >>>>', this.state)
        console.log("현재의 props", this.props);
        console.log("render userDetails->>>>>", userDetails);
        console.log("position?--->", userDetails.position);
        return (
            <div className="edituser">
                <h3>회원정보 수정</h3>
                <div className="edit-table">
                    <table onSubmit={e => this.onSubmit(e)}>
                        <tbody>
                            <tr>
                                <td scope="row">회원 ID</td>
                                <td>{userDetails.userId}</td>
                            </tr>
                            <tr>
                                <td scope="row">비밀번호</td>
                                <td><input type="password" name="password" onChange={this.onChange} placeholder="변경할 비밀번호 입력" /></td>
                            </tr>
                            <tr>
                                <td scope="row">고객 이름</td>
                                <td>{userDetails.username}</td>
                            </tr>
                            <tr>
                                <td scope="row">Email</td>
                                <td>{userDetails.userEmail}</td>
                            </tr>
                            <tr>
                                <td scope="row">고객성별</td>
                                <td>{userDetails.position.customer_gender}</td>
                            </tr>
                            <tr>
                                <td scop="row">핸드폰 번호</td>
                                <td><input type="phone" name="phone" onChange={this.onChange} placeholder="'-'없이 입력" /></td>
                            </tr>
                            <tr>
                                <td scope="row">주소</td>
                                <td><input type="address" name="address" onChange={this.onChange} placeholder="주소입력" /></td>
                            </tr>
                            <tr>
                                <td scope="row">생년월일</td>
                                <td>{userDetails.position.customer_birth}</td>
                            </tr>
                            <tr>
                                <td scope="row">고객 등급</td>
                                <td>{userDetails.position.customerGrade}</td>
                            </tr>
                            <tr>
                                <td scope="row">최근 접속일자</td>
                                <td>{userDetails.userLastConnect}</td>
                            </tr>
                            <tr>
                                <td scope="row">가입일자</td>
                                <td>{userDetails.userRegday}</td>
                            </tr>
                            <tr>
                                <td><input type="submit" name="submit" value="저장" onSubmit={this.onSubmit} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    const { auth } = state;
    const { userDetails } = auth;
    console.log(userDetails, ' <-----userdetails ')
    console.log(userDetails.position, 'customer?')
    return {
        userDetails
    };
}//mapStateToProps

const mapDispatchToProps=(dispatch) => ({
    userEdit: (changeUserInfo) => dispatch(userEditAsync(changeUserInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(userEdit);