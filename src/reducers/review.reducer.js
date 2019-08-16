import { ActionTypes } from "../contants";

const  initialStateReview = {
    // items: [],
    // page:1,
    // size:14,
    // totalCount:0
  
};

const reviewReducer = (state = initialStateReview, action ) =>{
    const{items,totalCount} = state;
    const { payload } = action;

    switch(action.type){

        case ActionTypes.ADD_REVIEW:
            
        if(payload !== undefined && payload !== null){
            return {
                ...state,
                items: [
                    ...items,
                    payload.data,
                //  {
                //     reviewBoardNum:payload.num,
                //     productBoardNum: payload.pum,
                //     customerId: payload.Id,
                //     reviewBoardImg: payload.img,
                //     reviewBoardTitle:payload.title,
                //     reviewBoardContent:payload.content,
                //     reviewBoardRating:payload.rating,
                //     // reviewBoardRegdate:null,
                //     // reviewBoardStatus:null
                // }
                ],
                totalCount: totalCount+1
            };
        }
            return state;

        

        case ActionTypes.REMOVE_REVIEW:
            if(payload !== undefined && payload !== null){
                const {data} =payload;
                return {
                    ...state,
                    items: items.filter(reviewlist => reviewlist.customerId !== data.Id),
                   
                };
            }
            return state 
         
           

        case ActionTypes.GET_REVIEWS_SUCCESS:
                if (payload !== undefined && payload !== null) {
                    const { data } = payload;
                    if (data !== undefined && data !== null) {
                        return {
                            ...state,
                            items: data,
                            page: data.page,
                            size: data.size,
                            totalCount: data.totalCount
                        };
                    }
                }
                return state;


            default:
                return state;
        }
    };

export default reviewReducer;