import { UserImage, UPLOAD_USER_IMG, GET_PHOTO } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function addUserPhotoDataInStore(photo : UserImage){
    return{
        type: UPLOAD_USER_IMG,
        payload: photo
    }
}

export function getPhotoFromStore(photo : UserImage){
    return{
        type: GET_PHOTO,
        payload: photo
    }
}

//----------------------------------------------------

//--------------------API-----------------------------

export async function uploadUserPhoto(photo : UserImage)  {
     await axios.post(`/api/userphoto`, photo);
}

export function getPhotoForUser(userId: any) {
    return (dispatch : any, getState : any) =>{
      return axios.get(`/api/userphoto/${userId}`)
        .then(res =>{
            dispatch(getPhotoFromStore(res.data));
            return res.data;
        })
   }
}

//----------------------------------------------------