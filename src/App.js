// 8/21
// cartView 삭제
// Cart 수정
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
import MyPage from './component/board/MyPage';
import NaviBar from './component/board/NaviBar';
import {Header, PreHeader , Home, Footer, PreFooter} from './containers';
import ListReview from './component/board/reviewBoard/ListReview'
import AddReview from './component/board/reviewBoard/AddReview';
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
        <PreHeader/>
        <Header /> 
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/product" component={ProductList} /> */}
          <Route path="/productlist/:id" component={ProductList} />
          <Route path="/signup" component={signup} />
          <Route path="/login" component={login} />
          <Route path="/qnaboard" component={qnaboard} />
          <Route path="/cart" component={Cart} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/review/all" component={ListReview} />
          <Route path="/review/write" component={AddReview} />
          {/* <Route path="/orderSheet" component={OrderSheet} /> */}

          {/* <Route path="/findPassword" component={ProductDetail} /> */}
        </Switch>
        {/* <PreFooter/> */}
        <Footer/>
      </div>
    );
  }
}
export default App;

