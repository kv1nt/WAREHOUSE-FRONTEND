import { 
    LoginForm,
    LOGIN
 } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function addLoginFormDataInStore(loginForm : LoginForm){
    return{
        type: LOGIN,
        payload: loginForm
    }
}

//----------------------------------------------------

//--------------------API-----------------------------

export function logInUser(loginFromData : LoginForm)  {
    return (dispatch : any, getState : any) => {
        return axios.post(`/api/login`, loginFromData)
        .then(res => {
            dispatch(addLoginFormDataInStore(res.data));
            return res.data;
        });
    }
}

//----------------------------------------------------