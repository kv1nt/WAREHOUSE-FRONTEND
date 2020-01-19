import { 
    RegiserForm,
    REGISTER_USER,
    GET_USER,
    UPDATE_USER
 } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function addNewUserDataInStore(registerForm : RegiserForm){
    return{
        type: REGISTER_USER,
        payload: registerForm
    }
}

export function upadateUserDataInStore(registerForm : RegiserForm){
    return{
        type: UPDATE_USER,
        payload: registerForm
    }
}

export function getUserByIdInStore(registerForm : RegiserForm){
    return{
        type: GET_USER,
        payload: registerForm
    }
}

//----------------------------------------------------

//--------------------API-----------------------------


export function getUserById(userId : any)  {
    return (dispatch : any, getState : any) => {
        return axios.get(`/api/register/${userId}`)
        .then(res => {
            dispatch(getUserByIdInStore(res.data )); // <--- param ?
            return res.data;
        });
    }
}

export function registerUser(registerForm : RegiserForm)  {
    return (dispatch : any, getState : any) => {
        return axios.post(`/api/register`, registerForm)
        .then(res => {
            dispatch(addNewUserDataInStore(res.data));
            return res.data;
        });
    }
}

export function updateUser(user: RegiserForm)  {
    return (dispatch : any, getState : any) => {
        return axios.put(`/api/user/${user.id}`, user)
        .then(res => {
            dispatch(upadateUserDataInStore(res.data)); // <--- param ?
            return res.data;
        });
    }
}

//----------------------------------------------------