import { ActionTypes } from '../contants';


const initialStateOrder ={
    order:{},
    orderList:[],
    kakaoPay:{}
}

const orderReducer = (state=initialStateOrder,action) =>{

    const{ order ,orderList ,kakaoPay} = state;
    const{ payload } = action;
    console.log(state ,' state 확인 ')
    console.log(action ,' state 확인 ')
    
    switch(action.type){

        case ActionTypes.CHECKOUTORDERS_SUCCESS:
        console.log('CHeckout reducer 실행')
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

    case ActionTypes.SAVEORDERLIST:
        console.log('saveOrderList reducer 실행',action)

        if(action !== undefined && action !== null){

            const{ data } = action;

            if(data !== undefined && data !== null){
                return{
                    ...state,
                    orderList:data
                }
            }else{
                return{
                ...state,
                orderList:initialStateOrder
                }
            }
        }else{
            alert('주문 도중 오류가 발생 하였습니다. \n 다시 시도해 주세요')
            // 여기에 redirect 설정 해야 함
            return{
                ...state,
                orderList:initialStateOrder
            }
        }

    case ActionTypes.KAKAOPAYREADY_SUCCESS:
        console.log('kakaoPay Success')
        console.log('kakaoPayReady_Success reducer 실행',action)
        if(action !== undefined && action !== null){
            const { data } = action.payload
            console.log(data ,' 여기는 kakaoReady Success reducer')
            if(data !== null && data !== undefined){
                return{
                    ...state,
                    kakaoPay:data
                }
            }else{
                alert('주문 도중 오류가 발생 하였습니다. \n 다시 시도해 주세요')
                return{
                    ...state,
                    kakaoPay:{}
                }
            }

        }else{
            alert('주문 도중 오류가 발생 하였습니다. \n 다시 시도해 주세요')
            // 여기에 redirect 설정 해야 함
        }   
    
    case ActionTypes.KAKAOPAYRESULT_SUCCESS:
        console.log('kakaoPayResult Success')
        if(action !== undefined && action !== null){
            console.log(action,'+_+')
            const { data } = action.payload
            if(data !== null && data !== undefined){
                return{
                    ...state,
                    kakaoPay:data
                }
            }
        }else{
            alert('주문 도중 오류가 발생 하였습니다. \n 다시 시도해 주세요')
        }
    
    case ActionTypes.LOAD_USERORDER_SUCCESS:
        console.log('actiontype LOAD_USERORDER_SUCCESS')
        if(action !== undefined && action !== null){
            const { data } = action.payload
            if(data !== null && data !== undefined){
                return{
                    ...state,
                    myOrderedList:data
                }
            }
        }
    default:
        return state;
    }
}

export default orderReducer;