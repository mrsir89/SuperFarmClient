import { ActionTypes } from '../contants';

const initialStateBoard = {
    qnaBoard: [],
    reviewBoard: [],
    noticeBoard: [],
    frequentlyBoard: []
};


const boardReducer = (state = initialStateBoard, action) => {
    const { qnaBoard, reviewBoard, noticeBoard, frequentlyBoard } = state;
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

        case ActionTypes.LOAD_QNABOARDLIST_FAIL:
            console.log( 'ActionTypes.LOAD_QNABOARDLIST_FAIL')
            return {
                ...state,
                qnaBoard: []
            }


        // case ActionTypes.LOAD_QNABOARDLIST_FAIL:

        //     console.log('ActionType LOAD QNABOARDLIST_FAIL 실행')

        //     return state

        case ActionTypes.WRITE_QNABOARD_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.WRITE_QNABOARD_SUCCESS')
                return {
                    ...state,
                }
            }
            else
                return state;

        case ActionTypes.EDIT_QNABOARD_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.EDIT_QNABOARD_SUCCESS')
                return {
                    ...state
                }
            } else

                return state;

        case ActionTypes.DELETE_QNABOARD_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.DELETE_QNABOARD_SUCCESS')
                return {
                    ...state,
                    qnaBoard: data
                }
            } else

                return state

        case ActionTypes.WRITE_QNABOARDANSWER_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.WRITE_QNABOARDANSWER_SUCCESS')
                return {
                    ...state,
                    qnaBoard: data
                }
            } else

                return state

        case ActionTypes.DELETE_QNABOARDANSWER_SUCCESS:

            if (payload !== undefined && payload !== null) {
                const { data } = payload
                console.log(data, 'ActionTypes.DELETE_QNABOARDANSWER_SUCCESS')
                return {
                    ...state,
                    qnaBoard: data
                }
            } else

                return state;

        ////////////////////////////////////////////////
        ////////// ReviewBoard

        case ActionTypes.ADD_REVIEW_SUCCESS:
            console.log("addreview 성공!!!!!")
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                console.log('Actiontypes.ADD_REVIEW_SUCCESS', data)
                return {
                    ...state,
                    reviewBoard: data
                }
            } else

                return state;

        case ActionTypes.REMOVE_REVIEW_SUCCESS:
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                console.log('ActionTypes.REMOVE_REVIEW_SUCCESS', data)
                return {
                    ...state,
                    reviewBoard: reviewBoard.items.filter(item => item.reviewBoardNum != data.number)
                    
                }
            }
            return state

        case ActionTypes.LOAD_REVIEWS_SUCCESS:
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                console.log('ActionTypes.LOAD_REVIEWS_SUCCESS', data)
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        reviewBoard: data,
                    };
                }
            }
            return state;

        case ActionTypes.LOAD_REVIEWS_FAIL:
            return {
                ...state,
                reviewBoard: [],
            };

        case ActionTypes.UPLOADFILEREVIEW_SUCCESS:
            if (payload !== undefined && payload !== null) {
                const { data } = payload;
                console.log('ActionTypes.UPLOADFILEREVIEW_SUCCESS', data);
                if (data !== undefined && data !== null) {
                    return {
                        ...state,
                        reviewBoard: data,
                    };
                }
            }


        //////////////////////////////////////////////////////////
        ///////////    noticeBoard

        case ActionTypes.LOAD_NOTICEBOARD_SUCCESS:

            console.log('ActionTypes.LOAD_NOTICEBOARD_SUCCESS')
            if (payload !== undefined && payload !== null) {
                const { data } = payload
                return ({
                    ...state,
                    noticeBoard: data
                })

            }
            else
                return state;

        case ActionTypes.LOAD_FREQUENTLYASKEDBOARD_SUCCESS:

            console.log('ActionTypes.LOAD_FREQUENTLYASKEDBOARD_SUCCESS')
            if (payload !== undefined && payload !== null) {
                const { data } = payload
                return ({
                    ...state,
                    frequentlyBoard: data
                })

            }
            else
                return state;

        default:
            return state;
    }
}
export default boardReducer;