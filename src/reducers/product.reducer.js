import { ActionTypes } from '../contants';

// ProductList에서 보여주는 상품들 (items)와 Cart에서 보여주는 장바구니에 추가된 상품들(cart) 
// orders : {
//     items : [],
//     shipping : {배송지, 배송방법, 배송비, 수취인, 수취인 전화번호, 배송 메세지}, 
// }
const initialStateProduct = {
    productBoardDetail:{},
    productBoard: [],
    category: [],
    mainBest:[],
    bestList:[]

};


// 추후 authentication reducer와 같은 방식(axios middleware)으로 바꿀 예정
const productReducer = (state = initialStateProduct, action) => {
    const { productBoard, cartlist,category, mainBest,bestList} = state;
    const { payload } = action;
    console.log('productReducer',state)
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCTLIST_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                console.log("load product list data >>>", data)
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

        case ActionTypes.LOAD_LOWER_PRODUCTLIST_SUCCESS:
            console.log('ActionType.Load_Lower_productLIst')
            if(payload !== undefined && payload !== null){
                const { data } = payload;
                if(data !== undefined && data !== null){
                    return{
                        ...state,
                        productBoard:data
                    }
                }
            }

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
        
        case ActionTypes.LOAD_MAINBESTPRODUCT_SUCCESS:
            console.log('ActionTypes LOAD_MAINBESTPRODUCT_SUCCESS')
            if(payload !== undefined && payload !== null){
                const { data } = payload;
                if( data !== undefined && data !== null){
                    return{
                        ...state,
                        mainBest:data
                    }
                }else{
                    return{
                        ...state
                    }
                }
            }

        case ActionTypes.LOAD_BESTPRODUCTLIST_SUCCESS:
            console.log('ActionsTypes LOAD_BESTPRODUCTLIST' ,payload)
            if(payload !== undefined && payload !== null){
                const { data } = payload;
                if( data !== undefined && data !== null){
                    return{
                        ...state,
                        bestList:data
                    }
                }else{
                    return{
                        ...state
                    }
                }
            }

        default:
            return state;           
    }
}

export default productReducer