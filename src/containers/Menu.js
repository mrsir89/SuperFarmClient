import React from 'react';
import { withRouter } from 'react-router-dom';
// withRouter를 써주는 이유는 위치에따른 상태변화를 알기위해서

function LowerTitleHref(props) {
  console.log("props 1 >>>>>>>>>>", props)
  const { lowerTitle, index } = props;
  return (
    <li><a href={index}>{lowerTitle}</a></li>
  );
}

function Menu(props) {
  const { lowerCategory, upperTitle } = props;
  console.log("props >>>>>>>>>>>>", props)

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