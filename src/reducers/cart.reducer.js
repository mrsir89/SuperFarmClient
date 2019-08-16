import { ActionTypes } from '../contants';


const initialStateCart = {
    cartlist: []
};

const cartReducer = (state = initialStateCart, action) => {
    const { cartlist } = state;
    const { payload } = action;

    switch (action.type) {
        // user의 장바구니 불러오기 
        case ActionTypes.GET_CART_SUCCESS:
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

        // 0816 장바구니 삭제 
        case ActionTypes.REMOVE_CART_SUCCESS:
            console.log("remove cart 성공")
            if (payload !== undefined && payload !== null) {
                const { data } = payload;

                return {
                    ...state,
                    cartlist: cartlist.filter(item => item.id !== data.id)
                }

            }
            return state;


        default:
            return state;

    }
}



export default cartReducer;