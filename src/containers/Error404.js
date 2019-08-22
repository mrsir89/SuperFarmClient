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
              <h3>죄송합니다.<br/>
                요청하신 페이지를 찾을 수 없습니다.</h3><br/>
              <h5>
                방문하시려는 페이지의 주소가 잘못 입력되었거나,
                페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.<br/>

                입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.<br/>

                관련 문의사항은 SuperFarm 고객센터에 알려주시면 친절하게 안내해 드리겠습니다.<br/>

                감사합니다. 
              </h5>
              <p>
                We can not find the page you're looking for.<br />
                <a href="/" className="link">Return home</a> or try the search bar below.
            </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default withRouter(Error404);
