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
    <div className="container">
      {/* <ul className="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li><a href>Store</a></li>
        <li className="active">Frequently Asked Questions</li>
      </ul> */}
      {/* BEGIN SIDEBAR & CONTENT */}
      <div className="row margin-bottom-40">
        {/* BEGIN SIDEBAR */}
        {/* <div className="sidebar col-md-3 col-sm-3">
          <ul className="list-group margin-bottom-25 sidebar-menu">
            <li className="list-group-item clearfix"><a href="#"><i className="fa fa-angle-right" /> Login/Register</a></li>
            <li className="list-group-item clearfix"><a href="#"><i className="fa fa-angle-right" /> Restore Password</a></li>
            <li className="list-group-item clearfix"><a href="#"><i className="fa fa-angle-right" /> My account</a></li>
            <li className="list-group-item clearfix"><a href="#"><i className="fa fa-angle-right" /> Address book</a></li>
            <li className="list-group-item clearfix"><a href="#"><i className="fa fa-angle-right" /> Wish list</a></li>
            <li className="list-group-item clearfix"><a href="#"><i className="fa fa-angle-right" /> Returns</a></li>
            <li className="list-group-item clearfix"><a href="#"><i className="fa fa-angle-right" /> Newsletter</a></li>
          </ul>
        </div> */}
        {/* END SIDEBAR */}
        {/* BEGIN CONTENT */}
        <div className="col-md-9 col-sm-9">
          <h1>Frequently Asked Questions</h1>
          <div className="faq-page">
            
             {items.map((item,index) => (<FaqItem {...item} index={index} key={index} />))}

             {/* index와 key(key는 map에서 써줘야한다고 지정한 것)는 내가 이름을 정해서 props로 전달해서 쓰려고 하는 것
                 {index}는 더미에서 index값으로 지정한것 순서를 말한다.=(item, index)로 준것을 말하며 공통적으로 순서를 써줌 */}

            {/* <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_2" aria-expanded="true">
                    2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry ?
                  </a>
                </h4>
              </div>
              <div id="accordion1_2" className="panel-collapse collapse in" aria-expanded="true" style={{}}>
                <div className="panel-body">
                  Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch   et.
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div> */}
            {/* <div className="panel panel-success">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_3" aria-expanded="false">
                    3. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor ?
                  </a>
                </h4>
              </div>
              <div id="accordion1_3" className="panel-collapse collapse" aria-expanded="false" style={{height: '0px'}}>
                <div className="panel-body">
                  Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch   et.
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div> */}
            {/* <div className="panel panel-warning">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_4">
                    4. Wolf moon officia aute, non cupidatat skateboard dolor brunch ?
                  </a>
                </h4>
              </div>
              <div id="accordion1_4" className="panel-collapse collapse">
                <div className="panel-body">
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div> */}
            {/* <div className="panel panel-danger">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_5">
                    5. Leggings occaecat craft beer farm-to-table, raw denim aesthetic ?
                  </a>
                </h4>
              </div>
              <div id="accordion1_5" className="panel-collapse collapse">
                <div className="panel-body">
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et
                </div>
              </div>
            </div> */}
            {/* <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_6">
                    6. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth ?
                  </a>
                </h4>
              </div>
              <div id="accordion1_6" className="panel-collapse collapse">
                <div className="panel-body">
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et
                </div>
              </div>
            </div> */}
            {/* <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href="#accordion1_7">
                    7. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft ?
                  </a>
                </h4>
              </div>
              <div id="accordion1_7" className="panel-collapse collapse">
                <div className="panel-body">
                  3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et
                </div> 
              </div>
            </div> */}
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