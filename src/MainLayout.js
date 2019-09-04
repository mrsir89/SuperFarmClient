import React from 'react';
import { connect } from 'react-redux';
import {Header,Footer,PreHeader} from './containers/index';

class MainLayout extends React.Component{


    render(){
        
        return(
            <div id="wrap">
                <PreHeader />
                <Header/>
                {this.props.children} 
                <br/><br/><br/><br/>    
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {

}
  
const mapDispatchToProps = (dispatch) => ({
  });
  

export default connect(null,null)(MainLayout);