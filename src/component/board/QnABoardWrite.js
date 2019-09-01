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
        writeQnABoard(questionBoard);
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

            <div className="writeInput" >
                <h2>상품 QnA 게시판</h2>
                <form onSubmit={this._onClickAction}>
                    <div className="mb-3">
                        <label >제목</label>
                        <input type="text" className="form-control" name="questionBoardTitle"
                            onChange={this._onChangeInput} placeholder="제목을 입력해 주세요" />
                    </div>
                    <div className="mb-3">
                        <label >작성자</label>
                        <div>
                            <b>{this.state.userId} </b>
                        </div>
                    </div>
                    <div>
                        <label>비밀번호</label>
                        <div>
                            <input type="password" maxLength="4" name="questionBoardPassword"
                                onChange={this._onChangeInput} placeholder="4자리"></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label >내용</label>
                        <textarea className="form-control" rows="5" name="questionBoardContent" id="content"
                            onChange={this._onChangeInput} placeholder="내용을 입력해 주세요" ></textarea>
                    </div>
                
                <div >
                    <input type="submit" className="btn btn-sm btn-primary" name="submit" value="저장"/>
                    <button type="reset" className="btn btn-sm btn-primary" >목록</button>
                </div>
                </form>
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

