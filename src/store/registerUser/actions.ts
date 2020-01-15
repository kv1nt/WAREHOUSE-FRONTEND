import { 
    RegiserForm,
    REGISTER_USER
 } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function addNewUserDataInStore(registerForm : RegiserForm){
    return{
        type: REGISTER_USER,
        payload: registerForm
    }
}

//----------------------------------------------------

//--------------------API-----------------------------

export function registerUser(registerForm : RegiserForm)  {
    return (dispatch : any, getState : any) => {
        return axios.put(`/api/user`, registerForm)
        .then(res => {
            dispatch(addNewUserDataInStore(res.data));
            return res.data;
        });
    }
}

//----------------------------------------------------