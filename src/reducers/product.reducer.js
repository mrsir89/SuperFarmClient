import { ActionTypes } from '../contants';

// ProductList에서 보여주는 상품들 (items)와 Cart에서 보여주는 장바구니에 추가된 상품들(cart) 
const initialStateProduct = {
    items: [],
    cart: []
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

        default:
            return state;
    }
}

export default productReducer;