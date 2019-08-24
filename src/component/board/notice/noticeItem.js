import React from 'react';
import { withRouter } from 'react-router-dom';
//import { NoticeDetail } from '../containers';



function NoticeItem(props) {
  const { noticeNum, noticeTitle, noticeWriterName, noticeWriteDate, noticeViews } = props;

  return (
    <tr>
      <td className="goods-page-image">
        {noticeNum}
      </td>
      <td className="goods-page-description">
      <a href={"/notice/" + noticeNum}>{noticeTitle}</a>         
        {/* <h3></h3> */}
        {/* <p><strong>Item 1</strong> - Color: Green; Size: S</p>
        <em>More info is here</em> */}
      </td>

      <td className="goods-page-stock">
       {noticeWriterName}
      </td>
      <td className="goods-page-date">
       {noticeWriteDate}
      </td>
      <td className="goods-page-price">
        <strong><span></span>{noticeViews}</strong>
      </td>
    </tr>
  );
}

export default withRouter(NoticeItem);