import React from 'react';
import { Actions } from '../../actions/index';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './WriteCss.css';


class QnABoardWrite extends React.Component {

    constructor(props) {
        super(props)
        const { userDetails } = this.props;
        const { data } = this.props

        console.log('construcoor',this.props)
        this.state = {
            userId: userDetails.userId,
            productBoardNum: this.props.match.params.boardNum,
            questionBoardPassword: '',
            questionBoardTitle: '',
            questionBoardContent: ''

        }
        this._onChangeInput = this._onChangeInput.bind(this);
        this._onClickAction = this._onClickAction.bind(this);
    }

    componentWillMount() {
    }
    shouldComponentUpdate() {
        return (this.state)
    }
    _onClickAction(e) {
        e.preventDefault();
        const questionBoard =this.state
        console.log(this.props)
        console.log('onSubmit 실행 되어라')
        const{ writeQnABoard }=this.props
        writeQnABoard(questionBoard).then(response =>{
            if(response.type===ActionTypes.WRITE_QNABOARDANSWER_SUCCESS){
                return alert('작성이 완료 되었습니다.')
            }
        });
        window.opener.location.reload();
        window.close()
        
    }
    _onChangeInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target.name, ' name')
        console.log(value)
        this.setState({
            [name]: value
        });
        console.log(this.state, 'this state')
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    render() {
        return (

                  <div id="form-main">
                    <div id="form-div">
                        <h3><strong>이용후기</strong> </h3>
                        <br></br>
                    <form class="form" id="form1" onSubmit={this._onClickAction}>

                    <p class="title">
                    <label><h4><strong>제목</strong> </h4></label>
                    <input type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" id="title" name="questionBoardTitle"
                     onChange={this._onChangeInput} placeholder="제목을 입력해 주세요" />
                    </p>

                    <p className="name">
                    <label><h4><strong>작성자</strong> </h4></label>
                        <input class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" value={this.state.userId} id="name" />
                    </p>
                    {/* <div>
                        <label>비밀번호</label>
                        <div>
                            <input type="password" maxLength="4" name="questionBoardPassword"
                                onChange={this._onChangeInput} placeholder="4자리"></input>
                        </div>
                    </div> */}
                    <p class="name">
                    <label><h4><strong>비밀번호</strong> </h4></label>
                        <input  type="password" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" 
                         onChange={this._onChangeInput} maxLength="4" name="questionBoardPassword" placeholder="4자리" id="name" />
                    </p>

                    <p class="text">
                    <label><h4><strong>내용</strong> </h4></label>
                        <textarea  name="questionBoardContent" class="validate[required,length[6,300]] feedback-input"  id="content"
                            onChange={this._onChangeInput} placeholder="내용을 입력해 주세요" ></textarea>
                    </p>
                
                <div >
                    <input type="submit" className="btn btn-sm btn-primary" id="button-blue" name="submit" value="저장"/>
                </div>
                </form>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {

    const { userDetails } = state.auth;
    const { qnaBoard } = state.product;


    console.log(qnaBoard, ' qnaAnswerWrite Board  <--- MapStateToProps')
    console.log(userDetails, ' <----------- userDetails')
    console.log(userDetails.userId, ' <----------- userId')
    return {
        userDetails
    };
}
const mapDispatchToProps = (dispatch) => ({
    writeQnABoard: (writeQnA) => dispatch(Actions.writeQnABoard(writeQnA))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QnABoardWrite));

