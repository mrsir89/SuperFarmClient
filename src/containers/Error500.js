import React from 'react';
import { withRouter } from 'react-router-dom';

function Error500({ history, location, matcher }) {
  return (
    <div className="main">
      <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <div className="col-md-12 col-sm-12">
          <div className="content-page page-500">
            <div className="number">
              500
            </div>
            <div className="details">
              <h3>Oops! Something went wrong.</h3>
              <p>
                We are fixing it!<br />
                Please come back in a while.<br /><br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Error500);
