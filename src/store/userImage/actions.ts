import { UserImage, UPLOAD_USER_IMG } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function addUserPhotoDataInStore(photo : UserImage){
    return{
        type: UPLOAD_USER_IMG,
        payload: photo
    }
}

//----------------------------------------------------

//--------------------API-----------------------------

export function uploadUserPhoto(photo : UserImage)  {
    return (dispatch : any, getState : any) => {

        return axios.post(`/api/userphoto`, photo)
        .then(res => {
            dispatch(addUserPhotoDataInStore(res.data));
            return res.data;
        });
    }
}

//----------------------------------------------------