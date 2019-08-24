import { ActionTypes } from '../contants';

// ProductList에서 보여주는 상품들 (items)와 Cart에서 보여주는 장바구니에 추가된 상품들(cart) 
// orders : {
//     items : [],
//     shipping : {배송지, 배송방법, 배송비, 수취인, 수취인 전화번호, 배송 메세지}, 
// }
const initialStateProduct = {
    productBoardDetail:{},
    productBoard: [],
    category: []
};


// 추후 authentication reducer와 같은 방식(axios middleware)으로 바꿀 예정
const productReducer = (state = initialStateProduct, action) => {
    const { productBoard, cartlist } = state;
    const { payload } = action;
    console.log('productReducer',state)
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCTLIST_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        productBoard: data
                    };
                }else{
                    return{
                        ...state,
                        productBoard:[]
                    }
                }
            }
            return state;


        // case ActionTypes.ADD_CART:
        //     const { item } = action
        //     return {
        //         ...state,
        //         cart: [
        //             ...cart,
        //             item
        //         ]
        //     }


        // 카테고리 불러오기 
        case ActionTypes.GET_CATEGORIES_SUCCESS:
            console.log('ActionType.CategorySuccess')
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

        case ActionTypes.LOAD_PRODUCTDETAIL_SUCCESS:
            console.log('ActionTypes.LOAD_PRODUCTDETAIL_SUCCESS',payload.data)
            if(payload !== undefined && payload !== null){
                const{ data } = payload;
                if(data !== undefined && data !== null){
                    return{
                        ...state,
                        productBoardDetail:data
                    };
                }
            }
            return state;  
        default:
            return state;
            
        // 프로덕트 상세 정보 불러 오기
        case ActionTypes.LOAD_PRODUCTDETAIL_SUCCESS:
            console.log('ActionTypes.LOAD_PRODUCTDETAIL_SUCCESS',payload.data)
            if(payload !== undefined && payload !== null){
                const{ data } = payload;
                if(data !== undefined && data !== null){
                    return{
                        ...state,
                        productBoardDetail:data
                    };
                }
            }
            return state;  
    }
}

export default productReducer;