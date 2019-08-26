import { ActionTypes } from '../contants';

// 초기값 설정
const initialStateQuestionPage ={
    page: 1,
    questionBoard:[]
}

const questionBoard = (state=initialStateQuestionPage, action) => {
    const { questionBoard, page } = state;
    const { payload } = action;

    switch (ActionTypes) {
        case ActionTypes.QUESTION_BY_PRODUCT_SUCCESS:
            if(payload !== undefined && payload !== nulll){
                const { data } = payload;
                if( data!==undefined && data !== null ){
                    return {
                        ...state,
                        page: data.page,
                        questionBoard: data.questionBoard
                    };
                }//if
            }//if
    }
}

export default questionBoard;