import React from 'react';
import { withRouter } from 'react-router-dom';

function Error404({ history, location, matcher }) {
  return (
    <div className="main">
      <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <div className="col-md-12 col-sm-12">
          <div className="content-page page-404">
            <div className="number">
              404
          </div>
            <div className="details">
              <h3>Oops!  You're lost.</h3>
              <p>
                We can not find the page you're looking for.<br />
                <a href="index.html" className="link">Return home</a> or try the search bar below.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Error404);
