import React from 'react';
import { withRouter } from 'react-router-dom';

function Footer({ history, location, matcher }) {
  if(window.location.href === "http://localhost:3000/review/write"){
    return (
      <div></div>
    )
  }
  else {
    return (
      <div className="footer">
        <br/>
        <div className="container">
          <div className="row">
            {/* BEGIN COPYRIGHT */}
            <div className="col-md-6 col-sm-6 padding-top-10">
              BitCamp Java 117th Final Project SuperFarm
          </div>
            {/* END COPYRIGHT */}
            {/* BEGIN PAYMENTS */}
            <div className="col-md-5 col-sm-5">
              <ul className="list-unstyled list-inline pull-right">
                {/* <li><img src="../../assets/frontend/layout/img/payments/western-union.jpg" alt="We accept Western Union" title="We accept Western Union" /></li>
                <li><img src="../../assets/frontend/layout/img/payments/american-express.jpg" alt="We accept American Express" title="We accept American Express" /></li>
                <li><img src="../../assets/frontend/layout/img/payments/MasterCard.jpg" alt="We accept MasterCard" title="We accept MasterCard" /></li>
                <li><img src="../../assets/frontend/layout/img/payments/PayPal.jpg" alt="We accept PayPal" title="We accept PayPal" /></li>
                <li><img src="../../assets/frontend/layout/img/payments/visa.jpg" alt="We accept Visa" title="We accept Visa" /></li> */}
              </ul>
            </div>
            {/* END PAYMENTS */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);