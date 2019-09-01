import React from 'react'
import { connect } from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/range';

class resultTable extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
   
    return {

    }

}
export default connect(mapStateToProps,null)(resultTable);