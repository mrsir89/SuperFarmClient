import React from 'react';
import {connect} from 'react-redux';

class userEdit extends React.Component{
    // 회원정보를 저장함 ''은 수정 될 것
    constructor(props){
        super(props)
        const { userDetails } = this.props
        this.state = {
            userInfo :{
                userId:userDetails.userId,
                userPassword:'',
                userEmail:userDetails.userEmail,
                userNum:userDetails.userNum,
                userRegday:userDetails.userRegday,
                userType:userDetails.userType,
                username:userDetails.username,
                userLastConnect:userDetails.userLastConnect,
                position:{
                    customer_gender:userDetails.position.customer_gender,
                    customerGrade:userDetails.position.customerGrade,
                    customer_birth:userDetails.position.customer_birth,
                    customerAddr:'',
                    customerPhone:'',
                    customerCoupon:null,
                }
            }
        }
        this.onChange=this.onChange.bind(this);
    }
    
    // dispatch로 보내야하지만 아직 구현 안됨
    onSubmit(event){
        event.preventDefault();
        const {userDetails} = this.props
        let {userInfo}=this.state.userInfo
        console.log("submit 후", userInfo)
        userDetails(userInfo);
    }

    // 바뀌는 것만 받음
    onChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value,'========value');
        console.log(name,'=========name');
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    render(){
        const { userDetails } = this.props;
        console.log('현재의 state >>>>', this.state)
        console.log("현재의 props", this.props);
        console.log("render userDetails->>>>>",userDetails);
        console.log("position?--->", userDetails.position);
        return(
            <div className="edituser">
                <h3>회원정보 수정</h3>
                <div class="edit-table">
                    <table onSubmit={e=>this.onSubmit(e)}>
                        <tbody>
                            <tr>
                                <td scope="row">회원 ID</td>
                                <td>{userDetails.userId}</td>
                            </tr>
                            <tr>
                                <td scope="row">비밀번호</td>
                                <td><input type="password" name="password" onChange={this.onChange} placeholder="변경할 비밀번호 입력"/></td>
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
                                <td><input type="phone" name="phone"  onChange={this.onChange} placeholder="'-'없이 입력"/></td>
                            </tr>
                            <tr>
                                <td scope="row">주소</td>
                                <td><input type="address" name="address" onChange={this.onChange} placeholder="주소입력"/></td>
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
                                <td><input type="submit" name="submit" value="저장" onSubmit={e=>this.onSubmit(e)}/></td>
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
    console.log(userDetails,' <-----userdetails ')
    console.log(userDetails.position, 'customer?')
    return {
        userDetails
    };
}//mapStateToProps

// const mapDispatchToProps=(dispatch) => ({

// })

export default connect(mapStateToProps)(userEdit);