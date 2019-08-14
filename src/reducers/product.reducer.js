import { ActionTypes } from '../contants';

// ProductList에서 보여주는 상품들 (items)와 Cart에서 보여주는 장바구니에 추가된 상품들(cart) 
// orders : {
//     items : [],
//     shipping : {배송지, 배송방법, 배송비, 수취인, 수취인 전화번호, 배송 메세지}, 
// }
const initialStateProduct = {
    items: [],
    cart: [],
    category: []
};


// 추후 authentication reducer와 같은 방식(axios middleware)으로 바꿀 예정
const productReducer = (state = initialStateProduct, action) => {
    const { items, cart } = state;
    const { payload } = action;

    switch (action.type) {
        case ActionTypes.LOAD_PRODUCTLIST_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        items: data
                    };
                }
            }
            return state;


        case ActionTypes.ADD_CART:
            const { item } = action
            return {
                ...state,
                cart: [
                    ...cart,
                    item
                ]
            }

        // 카테고리 불러오기 
        case ActionTypes.GET_CATEGORIES_SUCCESS:
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        category: data
                    };
                }
            }
            return state;

        // user의 장바구니 불러오기
        case ActionTypes.GET_CART_SUCCESS:
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        cart: data
                    };
                }
            }
            return state;

        default:
            return state;
    }
}

export default productReducer;