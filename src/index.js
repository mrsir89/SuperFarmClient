
// 8/24 merging 
// (userId)를 바탕으로 장바구니 추가/ 불러오기 기능 구현

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'; // 추가사항
import axiosMiddleware from 'redux-axios-middleware'; // 추가사항
import { StateLoader, interceptors, onErrorHandler } from './util';
import App from './App';
// import NaviBar from './component/board/NaviBar';
// import 'bootstrap/dist/css/bootstrap.css'

// import * as serviceWorker from './serviceWorker';

// 여기서만 선언 endpoint가 oauth가 아니면 override 할거
const clientId = 'test01';
const clientSecret = 'test01';

//Axios client 생성// 왜 여기서 생성을 했을 까요?
// create a new instance of axios with a custom config.
const client = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
    'Cache-Control': 'no-cache'
  },
  responseType: 'json'
});

// config 설정
const middlewareConfig = {
  // authoprization을 bearer 토큰으로 바꿔주기 위한 인터셉터
  interceptors,
  // 401에러를 처리하여 토큰을 자동으로 갱신한 후, 이전 에 실패한 액션(api call)을 다시 수행  / 실행한 경우 다시 실행 
  // 에러가 나면 무조건 실행 reqeust 나 respone 둘중에 처리해도 된다.
  // 하지만 인터셉터랑 핸들러랑 차이가 있다. /
  // 기본적인 onError 핸들러는 로그인시 실패 하면 /login_fail 또는 login_suscess 두가지중 하나로 온다.
  onError: onErrorHandler
};

const logger = createLogger({
  collapsed: true
});

const stateLoader = new StateLoader();


// Store
// Global영역에서 애플리케이션의 State와 비즈니스로직을 가지고 있고 있는 주체를 Store라고 한다.
// State를 Global한 영역에서 관리한다는 말은 즉 State관리 라이브러리 사용의 목적 중 한가지 이다.
// Redux에서는 State와 State를 핸들링하는 비즈니스로직을 가지고 있는 Reducer, Action등을 포함하는 의미.
const store = createStore(
  rootReducers,
  stateLoader.loadState(),
  applyMiddleware(axiosMiddleware(client, middlewareConfig), logger, thunk)
);

store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

