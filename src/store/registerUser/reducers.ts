import {
    RegisterFormState,
    RegisterUserAcionTypes,
    REGISTER_USER
} from './types';

const initialState : RegisterFormState = {
    registerForm : {id: null, name:'',  email: '' ,password: '', confirmPassword: ''}
}

export function userRegisterReducer(state = initialState, action: RegisterUserAcionTypes) : RegisterFormState {
    switch(action.type){
        case REGISTER_USER:
            return {
                registerForm: action.payload
            }       
            default:
                return state;
    }
}