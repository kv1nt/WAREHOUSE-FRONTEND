import { ProductImage, UPLOAD_PRODUCT_IMG, GET_PRODUCT_PHOTO, GET_PRODUCTS_PHOTOS } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function addUserPhotoDataInStore(photo : ProductImage){
    return{
        type: UPLOAD_PRODUCT_IMG,
        payload: photo
    }
}

export function getPhotoFromStore(photo : ProductImage){
    return{
        type: GET_PRODUCT_PHOTO,
        payload: photo
    }
}

export function getPhotosFromStore(){
    return{
        type: GET_PRODUCTS_PHOTOS,
        payload: []
    }
}

//----------------------------------------------------

//--------------------API-----------------------------

export async function uploadProductPhoto(photo : ProductImage)  {
     await axios.post(`/api/ProductPhoto`, photo);
}

export function getPhotoByProductId(productId: any) {
    return (dispatch : any, getState : any) =>{
      return axios.get(`/api/ProductPhoto/${productId}`)
        .then(res =>{
            dispatch(getPhotoFromStore(res.data));
            return res.data;
        })
   }
}

export function getProductsPhotos() {
    return (dispatch : any, getState : any) =>{
      return axios.get(`/api/ProductPhoto`)
        .then(res =>{
            dispatch(getPhotosFromStore());
            return res.data;
        })
   }
}

//----------------------------------------------------