import React from 'react';
import { withRouter } from 'react-router-dom';
// withRouter를 써주는 이유는 위치에따른 상태변화를 알기위해서
// 여기에 역할은 꾸미는 역할  여기에는 map을 받아서 Menu에서 꾸며주는거


// index 링크 
function LowerTitleHref(props) {
  const { lowerTitle, index,lowerCode } = props;
  return (
    <li><a href={'http://localhost:3000/productlist/'+lowerCode}>{lowerTitle}</a></li>
  );
}

function Menu(props) {
  const category = props;
  const upperTitle = category.upperTitle;
  const{ lowerCategory } = category;

  return (
    <li className="dropdown ">
      <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
        {upperTitle}
      </a>
      <ul className="dropdown-menu" role="menu">
        <li className="dropdown-submenu">
          {lowerCategory.map((item, index) => <LowerTitleHref {...item} key={index} />)}
        </li>
      </ul>
    </li>
  );
}

export default withRouter(Menu);