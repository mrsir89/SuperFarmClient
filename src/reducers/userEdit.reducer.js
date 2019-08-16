// import { ActionTypes } from '../contants';

// const initialStateUserdetails = {
//     userdetails: null
// }

// const userDetailsReducer = (state=initialStateUserdetails, action) => {
//     const { userdetails } = state;
//     const { payload } = action;

//     switch(action.type) {
//         case ActionTypes.GET_USERME_SUCCESS:
//             if( payload!==undefined && payload !== null){
//                  const { data } = payload;

//                  if(data!==undefined && data !== null){
//                      return {
//                          ...state,
//                          userdetails: data
//                      };
//                  }
//             }// if
//             return state;
//     }//switch
// }

// export default userDetailsReducer;