import { ActionTypes } from '../contants';

const initialStateAuth = {
    retryCount: 0,
    token: null,
    userDetails: null,
    signupCustomer: null

};

const authentication = (state = initialStateAuth, action) => {
    const { payload } = action;
    const { retryCount } = state;

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
            return initialStateAuth;

        case ActionTypes.SIGNUP:
            return {
                ...state,
                signupCustomer: payload.signupCustomer
            };
        case ActionTypes.LOGIN:
            return {
                ...state,
                userDetails: payload.userDetails
            };
        case ActionTypes.GET_USERME_SUCCESS:
            return {
                ...state,
                userDetails: payload.data
            }

        default:
            return state;
    }
}

export default authentication;