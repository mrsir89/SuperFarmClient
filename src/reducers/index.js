import { combineReducers } from 'redux';
import authentication from './authentication.reducer'
import productReducer from './product.reducer'
//import userEditReducer from './userEdit.reducer'
import cartReducer from './cart.reducer';
import boardReducer from './board.reducer';
import orderReducer from './order.reducer';

// 리듀서 = 상태를 변화하는 함수. >>> 이전 상태(old state)와 Action을 합쳐, 새로운 state를 만든다.
// 파라미터 두 개 = 현재상태(old state), 액션객체(action)


// 리듀서 합치기
// 내장객체인 (combineReducers를 이용)
const rootReducers = combineReducers({
  auth: authentication,
  product: productReducer,
  cart : cartReducer,
  board: boardReducer,
  order: orderReducer
});

export default rootReducers;
// 여기까지 정리하자면 우리는 화면(~board.js) 에서
// 어떠한 버튼을 클릭하게 되면 액션을 통해 리듀서를(~board.js) 거치고 
// 스토어 상태를 변화한 후 다시 view에 변화를 주어야한다.