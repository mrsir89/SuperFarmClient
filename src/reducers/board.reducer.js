import { ActionTypes } from '../contants';

const initialStateBoard = {
    qnaBoard: [],
    reviewBoard: []
};


const boardReducer = (state = initialStateBoard, action) => {
    const { qnaBoard, reviewBoard } = state;
    const { payload } = action;

    switch (action.type) {

        case ActionTypes.LOAD_QNABOARDLIST_SUCCESS:

            if (payload !== undefined && payload !== null) {

                const { data } = payload
                console.log(data, 'ActionTypes.LOAD_QNABOARDLIST_SUCCESS')
                return {
                    ...state,
                    qnaBoard: data
                }
            }
            else
                return state;

        case ActionTypes.WRITE_QNABOARD_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.WRITE_QNABOARD_SUCCESS')
                return {
                    ...state,
                    data
                }
            }
            else
                return state;

        case ActionTypes.EDIT_QNABOARD_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.EDIT_QNABOARD_SUCCESS')
                return {
                    ...state,
                    data
                }
            }else
                return state;

        case ActionTypes.DELETE_QNABOARD_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.DELETE_QNABOARD_SUCCESS')
            }else
                return state

        case ActionTypes.WRITE_QNABOARDANSWER_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.WRITE_QNABOARDANSWER_SUCCESS')
            }else
                return state

        case ActionTypes.DELETE_QNABOARDANSWER_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.DELETE_QNABOARDANSWER_SUCCESS')
            }else
                return state;

        ////////////////////////////////////////////////
        ////////// ReviewBoard

        case ActionTypes.ADD_REVIEW_SUCCESS:
            console.log("addreview 성공!!!!!")

            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                console.log('Actiontypes.ADD_REVIEW_SUCCESS',data)
                return{
                    ...state,
                    reviewBoard:data
                }
            }else
                return state;

        case ActionTypes.REMOVE_REVIEW_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                console.log('ActionTypes.REMOVE_REVIEW_SUCCESS',data)
                return {
                    ...state
                }
            }

            return state

        case ActionTypes.LOAD_REVIEWS_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                console.log('ActionTypes.LOAD_REVIEWS_SUCCESS',data)
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        reviewBoard: data,
                    };
                }
            }
            return state;
        case ActionTypes.UPLOADFILEREVIEW_SUCCESS:
            if(payload !== undefined && payload !== null){
                const{ data } =payload;
                console.log('ActionTypes.UPLOADFILEREVIEW_SUCCESS',data);
                if( data !== undefined && data !== null){
                    return{
                        ...state,
                        reviewBoard: data,
                    };
                }
            }
        default:
            return state;
    }
}
export default boardReducer;