import { ActionTypes } from '../contants';


const initialStateOrder ={
    order:{}
}

const orderReducer = (state=initialStateOrder,action) =>{

    const{ order } = state;
    const{ payload } = action;

    switch(action.type){

        case ActionTypes.CHECKOUTORDERS_SUCCESS:
        
        if(payload !== undefined && payload !== null){

            const{ data } =payload;

            if(data !== undefined && data !== null){
                return {
                    ...state,
                    order: data
                };
            }else{
                return{
                ...state,
                order:initialStateOrder
                }
            }
        }else{
            alert('주문 정보를 불러 오는데 실패 하였습니다.')
            return{
            ...state,
            order:initialStateOrder                
            }
        }
    
        default:
            return state;

    }
}

export default orderReducer;