import React from 'react';
import { connect } from 'react-redux';

class MyPage extends  React.Component{
    constructor(props) {    // props 굳이 안써줘도 넘어 옴
        super(props)
        
    }

    render(){
        const { auth } = this.props;
        return(
            <div>
                {auth}
            </div>
        )
    }


}

function mapStateToProps(state) {
    const { auth } = state;
    return {
      auth  // 배열 
    };
  }
export default connect(mapStateToProps)(MyPage);