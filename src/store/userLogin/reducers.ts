import {
    LoginFormState,
    LooginAcionTypes,
    LOGIN
} from './types';

const initialState : LoginFormState = {
    logInForm : {}
}

export function userLoginReducer(state = initialState, action: LooginAcionTypes) : LoginFormState {
    switch(action.type){
        case LOGIN:
            return {
                logInForm: action.payload
            }       
            default:
                return state;
    }
}