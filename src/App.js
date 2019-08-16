// ver4  8/11 Ref
// merge ki from sj  8/15
// 8/15
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import signup from './component/signup/Signup';
import login from './component/login/Login';
import qnaboard from './component/board/QnABoard';
import QnABoardWrite from './component/board/QnABoardWrite';
import { Actions } from './actions';
import './App.css';
import Cart from './component/board/Cart';
import ProductDetail from './component/board/ProductDetail';
import ProductList from './component/board/ProductList';
import UserEdit from './component/board/UserEdit';
import QuestionBoard from './component/board/QuestionBoard';
import EditMe from './component/board/EditMe';
import mypage from './component/board/MyPage';
import NaviBar from './component/board/NaviBar';
// import Main from './Main';

// REACT는 라이브러리, View를 Rendering 하는 것이 주 기능이며 나머지 기타 기능들(router, ajax등등)은 서드파티 라이브러리를 추가적으로 사용해야 한다.
// React랑 React+Redux의 결정적 차이
// React는 React 컴포넌트 자신이 개별적으로 상태관리를 한다.
// React+Redux는 상태관리를 하는 전용 장소(store)에서 상태를 관리하고,
// React 컴포넌트는 그걸 보여주기만 하는 용도로 쓰인다.

/*
 * App Stateless Component
 * 
 * @param history
 * @param location
 * @param match
 */
/*
  Login signup / getuserMe 완료
*/


class App extends React.Component {
  render() { // 화면에 html 뷰를 생성.
    return ( // return으로 받는 값들은 나중에 html코드로 바뀐다.  JSX에 변수 넣을 때 반드시 {}
      <div className="container">
          <NaviBar />   
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}

          <Route path="/product" component={ProductList} />
          <Route path="/signup" component={signup} />
          <Route path="/login" component={login} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/useredit" component={UserEdit}/>
          <Route path="/EditMe" component={EditMe}/>
          <Route path="/mypage" component={mypage}/>
          <Route path="/qnaboardWrite" component={QnABoardWrite} />
          {/* <Route path="/findPassword" component={ProductDetail} /> */}
        </Switch>
      </div>
    );
  }
}
export default App;

