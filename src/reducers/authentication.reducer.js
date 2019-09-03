import { ActionTypes } from '../contants';

const initialStateAuth = {
    retryCount: 0,
    token: null,
    userDetails: null,
    signupCustomer: {}

};

const authentication = (state = initialStateAuth, action) => {
    const { payload } = action;
    const { retryCount } = state;
    console.log('authentication.reducer  의 state 시작 ', state)
    console.log('authentication.reducer  의 action 시작 ', action)
    switch (action.type) {
        case ActionTypes.GET_TOKEN_SUCCESS:
        case ActionTypes.LOGIN_SUCCESS:
        case ActionTypes.REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                retryCount: 0,
                token: payload.data
            };
        case ActionTypes.REFRESH_TOKEN_FAIL:
            return {
                ...state,
                retryCount: retryCount + 1
            };

        case ActionTypes.LOGOUT:
            console.log('logout======================')
            return {
                initialStateAuth
            };

        case ActionTypes.SIGNUP:
            return {
                ...state,
                signupCustomer: payload.signupCustomer
            };
        case ActionTypes.LOGIN:
            return {
                ...state
            };
        case ActionTypes.GET_USERME_SUCCESS:
            return {
                ...state,
                userDetails: payload.data
            }
        case ActionTypes.ASNYCACTION:
            return {
                ...state
            };

        case ActionTypes.USER_EDIT_SUCCESS:
            console.log("user edit success");
            return {
                ...state,
                userDetails: payload.userDetails
            };

        default:
            return state;
    }
}

export default authentication;