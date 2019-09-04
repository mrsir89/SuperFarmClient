import { ActionTypes } from '../contants';
import { Actions } from '../actions';


const initialStateCart = {
    cartlist: []
};

const cartReducer = (state = initialStateCart, action) => {
    const { cartlist } = state;
    const { payload } = action;

    switch (action.type) {
        // user의 장바구니 불러오기 
        case ActionTypes.GET_CART_SUCCESS:
            console.log('ActionTypes.GET_CART_SUCCESS', action)
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        cartlist: data
                    };
                }
            }
            return state;

        // userID, product -> 장바구니에 추가 (DB저장 )
        case ActionTypes.ADD_CART_SUCCESS:
            console.log("addcart 성공!")
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        cartlist: [
                            ...cartlist,
                            data
                        ]
                    }
                }
            }
            return state;


        case ActionTypes.EDIT_CART_SUCCESS:
            //console.log('ActionTypes.EDIT_CART_SUCCESS',action)
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        cartlist: data
                    };
                }
            }
            return state;

        case ActionTypes.REMOVE_CART_ID_SUCCESS:
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        cartlist: cartlist.filter(item => item.cartNum !== data.cartNum)
                    };
                }
            }
            return state;
            
        case ActionTypes.LOGOUT:
            return{
                cartlist:[]
            }
        default:
            return state;

    }
}



export default cartReducer;