// import { ActionTypes } from "../contants";

// const  initialStateReview = {
//     reviewBoards:[]  
// };

// const reviewReducer = (state = initialStateReview, action ) =>{
//     const{reviewBoards} = state;
//     const { payload } = action;

//     switch(action.type){

//         case ActionTypes.ADD_REVIEW_SUCCESS:
//             console.log("addreview 성공!!!!!")

//             if (payload !== undefined && payload !== null) {
//                 const { data } = payload;
//                 console.log('Actiontypes.ADD_REVIEW_SUCCESS',data)
//                 return{
//                     ...state,
//                     reviewBoards:data
//                 }
//             }else
//                 return state;

//         case ActionTypes.REMOVE_REVIEW_SUCCESS:

//             if (payload !== undefined && payload !== null) {
//                 const { data } = payload;
//                 console.log('ActionTypes.REMOVE_REVIEW_SUCCESS',data)
//                 return {
//                     ...state
//                 }
//             }

//             return state

//         case ActionTypes.LOAD_REVIEWS_SUCCESS:

//             if (payload !== undefined && payload !== null) {
//                 const { data } = payload;
//                 console.log('ActionTypes.LOAD_REVIEWS_SUCCESS',data)
//                 if (data !== undefined && data !== null) {
//                     return {
//                         ...state,
//                         reviewBoards: data,
//                     };
//                 }
//             }
//             return state;
//         case ActionTypes.UPLOADFILEREVIEW_SUCCESS:
//             if(payload !== undefined && payload !== null){
//                 const{ data } =payload;
//                 console.log('ActionTypes.UPLOADFILEREVIEW_SUCCESS',data);
//                 if( data !== undefined && data !== null){
//                     return{
//                         ...state,
//                         reviewBoards: data,
//                     };
//                 }
//             }
//         default:
//             return state;

//         }
//     };

// export default reviewReducer;