import { getActionTypes } from 'redux-axios-middleware';
import { Actions } from '../actions';
import {connect} from 'react-redux';



const onError = ({ action, next, error }, options) => {
    let errorObject;
    if (!error.response) {
        errorObject = {
            data: error.message,
            status: 0
        };
        if (process.env.NODE_ENV !== 'production') {
            console.log('HTTP Failur in Axzios', error);
        }
    } else {
        errorObject = error;
    }

    const nextAction = { // Redux에 전달됨.
        type: getActionTypes(action, options)[2],
        error: errorObject,
        meta: {
            // login 실패하면 action >>> login이 들어간다.
            previousAction: action
        }
    };

    next(nextAction);
    return nextAction;
};

const onErrorHandler = ({ action, next, error, getState, dispatch }, options) => {

    console.log('onErrorHandler', error);
    if (error.response === undefined || error.response.status === 401) {
        const { auth } = getState();
        const { retryCount, token } = auth;

        if (retryCount === 3 || token === undefined || token === null) {
            return dispatch(Actions.logout());// logout 실행   ==> redirect 필요 
                // .then(response => <Redirect to='/login' />);
                //<Redirect to='/login' />
            
        } else {
            console.log("onErrorHandler에서 action")
            return dispatch(Actions.refreshToken(token.refresh_token))
                // 만약 To-do 패치 같은것을 하면 마지막 액션도 실행한다.
                // if(response.type==Actiontypes.REFRESH_TOKEN_SUCCESS) 생략 되었다.
                .then(response => dispatch(action));       
        }
    }
    return onError({ action, next, error }, options);
}


export default onErrorHandler;