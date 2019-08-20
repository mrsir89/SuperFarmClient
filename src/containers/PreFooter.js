import React from 'react';
import { withRouter } from 'react-router-dom';

function PreFooter({ history, location, matcher }) {
  return (
    <div className="pre-footer">
      <div className="container">
        <div className="row">
          {/* BEGIN BOTTOM ABOUT BLOCK */}
          <div className="col-md-3 col-sm-6 pre-footer-col">
            <h2>About us</h2>
          </div>
          {/* END BOTTOM ABOUT BLOCK */}
          {/* BEGIN BOTTOM INFO BLOCK */}
          <div className="col-md-3 col-sm-6 pre-footer-col">
            <h2>Information</h2>
            <ul className="list-unstyled">
              <li><i className="fa fa-angle-right" /> <a href="javascript:;">Delivery Information</a></li>
              
            </ul>
          </div>
          {/* END INFO BLOCK */}
          {/* BEGIN TWITTER BLOCK */}
          <div className="col-md-3 col-sm-6 pre-footer-col">
            <h2 className="margin-bottom-0">Latest Tweets</h2>
            <a className="twitter-timeline" href="https://twitter.com/twitterapi" data-tweet-limit={2} data-theme="dark" data-link-color="#57C8EB" data-widget-id={455411516829736961} data-chrome="noheader nofooter noscrollbar noborders transparent">Loading tweets by @keenthemes...</a>
          </div>
          {/* END TWITTER BLOCK */}
          {/* BEGIN BOTTOM CONTACTS */}
          <div className="col-md-3 col-sm-6 pre-footer-col">
            <h2>Our Contacts</h2>
            <address className="margin-bottom-40">
              Tel: 123 456 7890<br />
              Email: <a href="mailto:info@metronic.com">SuperFarm@Project.com</a><br />
              SuperFarm: <a href="skype:metronic">🍊</a>
            </address>
          </div>
          {/* END BOTTOM CONTACTS */}
        </div>
        <hr />
        <div className="row">
          {/* BEGIN SOCIAL ICONS */}
          <div className="col-md-6 col-sm-6">
            <ul className="social-icons">
              <li><a className="rss" data-original-title="rss" href="javascript:;" /></li>
              <li><a className="facebook" data-original-title="facebook" href="javascript:;" /></li>
              <li><a className="twitter" data-original-title="twitter" href="javascript:;" /></li>
              <li><a className="googleplus" data-original-title="googleplus" href="javascript:;" /></li>
              <li><a className="linkedin" data-original-title="linkedin" href="javascript:;" /></li>
              <li><a className="youtube" data-original-title="youtube" href="javascript:;" /></li>
              <li><a className="vimeo" data-original-title="vimeo" href="javascript:;" /></li>
              <li><a className="skype" data-original-title="skype" href="javascript:;" /></li>
            </ul>
          </div>
          {/* END SOCIAL ICONS */}
          {/* BEGIN NEWLETTER */}
          <div className="col-md-6 col-sm-6">
            <div className="pre-footer-subscribe-box pull-right">
              <h2>Newsletter</h2>
              <form action="#">
                <div className="input-group">
                  <input type="text" placeholder="youremail@mail.com" className="form-control" />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Subscribe</button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* END NEWLETTER */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(PreFooter);
