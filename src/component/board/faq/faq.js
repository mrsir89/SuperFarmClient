import React from 'react';
import  FaqItem  from './faqItem';
//import faqjson from './faq.json'; //faq.json의 별칭을 간단하게 faq라고 정해줌
//import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { Actions } from '../../../actions/index';

class Faq extends React.Component{

constructor(props){
    super(props)
}

componentWillMount(){
    console.log('componentWillMount')
    const { loadFrequentlyAskedQuestionBoard } = this.props;
    loadFrequentlyAskedQuestionBoard();
}
    
  
  render(){
    const { frequentlyBoard } = this.props;
    const { items } = frequentlyBoard;
    console.log('1111111111111111111111111111111',frequentlyBoard)
  return(
    <div className="main">
      <br/><br/><br/><br/><br/><br/>
    <div className="container">
      {/* BEGIN SIDEBAR & CONTENT */}
      <div className="row margin-bottom-40">
        {/* BEGIN SIDEBAR */}
        
        {/* END SIDEBAR */}
        {/* BEGIN CONTENT */}
        <div className="col-md-9 col-sm-9">
          <h1>자주 묻는 질문</h1>
          <div className="faq-page">
            
             {items.map((item,index) => (<FaqItem {...item} index={index} key={index} />))}

             
          </div>
        </div>
        {/* END CONTENT */}
      </div>
      {/* END SIDEBAR & CONTENT */}
    </div>
  </div>
    );
  }
}

const mapStateToProps = (state)=>{
    console.log('faq mapStateToProps----------',state);
    const { board } = state;
    const { frequentlyBoard } = board;
    console.log(frequentlyBoard,' 111111111111111111111111')
    return{
        frequentlyBoard
    }
  }
  const mapDispatchToProps = (dispatch) =>({
    loadFrequentlyAskedQuestionBoard:() => dispatch(Actions.loadFrequentlyAskedQuestionBoard())
  })
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Faq);