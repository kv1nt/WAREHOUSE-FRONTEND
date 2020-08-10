import { 
    Product,
    GET_PRODUCTS,
    SET_PRODUCT
 } from "./types";

import axios from 'axios';

//---------------------STORE-------------------------

export function getProductsFromStore(products : Product[]){
    return{
        type: GET_PRODUCTS,
        payload: products
    }
}

export function createProductInStore(product : Product){
    return{
        type: SET_PRODUCT,
        payload: product
    }
}

//----------------------------------------------------


//--------------------API-----------------------------

export function getProducts() {
    return (dispatch : any, getState : any) =>{
      return axios.get(`/api/product`)
        .then(res =>{
            dispatch(getProductsFromStore(res.data));
            return res.data;
        })
   }
}

export function createLocation(newProduct : Product) {
    return (dispatch : any, getState : any) =>{
        return axios.post(`/api/product`, newProduct)
        .then(res => {
            dispatch(createProductInStore(res.data));
            return res;
        });
    }
}

//----------------------------------------------------