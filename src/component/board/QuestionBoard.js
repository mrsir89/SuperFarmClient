import React from 'react';


class QnABoard extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }// costructor

    componentWillMount(){

    }

    render(){
        console.log("this.props>>>>", this.props)
        return(
            <div></div>
        )
    }

    
}
function mapStateToProps(state) {
    const { items } = state;
    const { page, qnaBoard } = items;
    return {
        page,
        qnaBoard
    };
}//mapStateToProps

function mapDispatchToProps(dispatch){
    return{

    }
}//mapDispatchToProps

export default QnABoard;