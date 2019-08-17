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

        default:
            return state;
    }
}
export default boardReducer;