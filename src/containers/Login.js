import React from 'react';
import { withRouter } from 'react-router-dom';

function Login({ history, location, matcher }) {
  return (
    <div className="main">
      <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <div className="col-md-9 col-sm-9">
          <h1>Login</h1>
          <div className="content-form-page">
            <div className="row">
              <div className="col-md-7 col-sm-7">
                <form className="form-horizontal form-without-legend" role="form">
                  <div className="form-group">
                    <label htmlFor="email" className="col-lg-4 control-label">Email <span className="require">*</span></label>
                    <div className="col-lg-8">
                      <input type="text" className="form-control" id="email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-lg-4 control-label">Password <span className="require">*</span></label>
                    <div className="col-lg-8">
                      <input type="text" className="form-control" id="password" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-md-offset-4 padding-left-0">
                      <a href="page-forgotton-password.html">Forget Password?</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-md-offset-4 padding-left-0 padding-top-20">
                      <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-md-offset-4 padding-left-0 padding-top-10 padding-right-30">
                      <hr />
                      <div className="login-socio">
                        <p className="text-muted">or login using:</p>
                        <ul className="social-icons">
                          <li><a href="javascript:;" data-original-title="facebook" className="facebook" title="facebook" /></li>
                          <li><a href="javascript:;" data-original-title="Twitter" className="twitter" title="Twitter" /></li>
                          <li><a href="javascript:;" data-original-title="Google Plus" className="googleplus" title="Google Plus" /></li>
                          <li><a href="javascript:;" data-original-title="Linkedin" className="linkedin" title="LinkedIn" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4 col-sm-4 pull-right">
                <div className="form-info">
                  <h2><em>Important</em> Information</h2>
                  <p>Duis autem vel eum iriure at dolor vulputate velit esse vel molestie at dolore.</p>
                  <button type="button" className="btn btn-default">More details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
