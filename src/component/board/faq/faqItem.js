import React from 'react';
import { withRouter } from 'react-router-dom';

function FaqItem(props) {
  const { faqQuestion, faqAnswer , index} = props;

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href={'#accordion1_' + index} aria-expanded="true">
            {faqQuestion}
          </a>
        </h4>
      </div>
      <div id={'accordion1_' + index} className="panel-collapse collapse in" aria-expanded="true" style={{}}>
        <div className="panel-body">
          {faqAnswer}
        </div>
      </div>
    </div>
  );
}
export default withRouter(FaqItem);