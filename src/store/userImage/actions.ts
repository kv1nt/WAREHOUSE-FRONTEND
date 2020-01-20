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

export async function uploadUserPhoto(photo : UserImage)  {
    await axios.post(`/api/userphoto`, photo)
    await addUserPhotoDataInStore(photo);
}

//----------------------------------------------------