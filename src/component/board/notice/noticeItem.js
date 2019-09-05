import React from 'react';
import { withRouter } from 'react-router-dom';
//import { NoticeDetail } from '../containers';
import moment from 'moment';
import './notice.css';



function NoticeItem(props) {
  const { noticeNum, noticeWriteDate, noticeTitle, noticeWriterName, noticeViews} = props;


  var date = new Date(noticeWriteDate);
  const current = moment(date).format('YYYY-MM-DD');
  

  return (
    <tr>
      <td className="goods-page-image back">
        {noticeNum}
      </td>
      <td className="goods-page-description back">
      <a href={"/notice/" + noticeNum}>{noticeTitle}</a>         
        {/* <h3></h3> */}
        {/* <p><strong>Item 1</strong> - Color: Green; Size: S</p>
        <em>More info is here</em> */}
      </td>

      <td className="goods-page-stock back">
       {noticeWriterName}
      </td>
      <td className="goods-page-date back">
      &emsp;{current}
      </td>
      <td className="goods-page-price back">
      &emsp;&emsp;{noticeViews}
      </td>
    </tr>
  );
}

export default withRouter(NoticeItem);