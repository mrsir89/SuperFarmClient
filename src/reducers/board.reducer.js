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
                        qnaBoard:data                       
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
                    qnaBoard: {
                        data
                    }
                }
            }
        case ActionTypes.DELETE_QNABOARD_SUCCESS:
            if(payload !== undefined && payload !== null){
                const { data } = payload
                console.log(data, 'ActionTypes.DELETE_QNABOARD_SUCCESS')
            }
        
        case ActionTypes.WRITE_QNABOARDANSWER_SUCCESS:
            if(payload !== undefined && payload !== null){
                const{ data } = payload
                console.log(data, 'ActionTypes.WRITE_QNABOARDANSWER_SUCCESS')
            }

        default:
            return state;
    }
}
export default boardReducer;