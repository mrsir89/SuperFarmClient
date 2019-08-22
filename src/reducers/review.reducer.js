import { ActionTypes } from "../contants";

const  initialStateReview = {
    reviewBoards:[]  
};

const reviewReducer = (state = initialStateReview, action ) =>{
    const{reviewBoards} = state;
    const { payload } = action;

    switch(action.type){

        case ActionTypes.ADD_REVIEW:
            console.log ("addreview 성공!!!!!")
            
        if(payload !== undefined && payload !== null){
         const {data} = payload;
         if(data !== undefined && data !== null) {
            return {
                ...state,
                reviewBoards: [
                    ...reviewBoards,
                    data
                ]
                // totalCount: totalCount+1
            }
        }
    }
            return state;

        

        case ActionTypes.REMOVE_REVIEW:
            if(payload !== undefined && payload !== null){
                const {data} =payload;
                return {
                    ...state,
                    reviewBoards: reviewBoards.filter(review => review.reviewBoardNum !== data.reviewBoardNum),
                   
                };
            }
            return state 
         
           

        case ActionTypes.GET_REVIEWS_SUCCESS:
                if (payload !== undefined && payload !== null) {
                    const { data } = payload;
                    if (data !== undefined && data !== null) {
                        return {
                            ...state,
                            reviewBoards: data,
                            // page: data.page,
                            // size: data.size,
                            // totalCount: data.totalCount
                        };
                    }
                }
                return state;


            default:
                return state;
        }
    };

export default reviewReducer;