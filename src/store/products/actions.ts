import { 
    Product,
    GET_PRODUCTS,
    SET_PRODUCT,
    FILTER_PRODUCTS,
    FILTER_PRODUCTS_HIGHER,
    FILTER_PRODUCTS_NAME
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

export function fromLowersPriceProducts(){
    return{
        type: FILTER_PRODUCTS
    }
}

export function fromLHigherPriceProducts(){
    return{
        type: FILTER_PRODUCTS_HIGHER
    }
}

export function filterProductsByName(name: string){
    return{
        type: FILTER_PRODUCTS_NAME,
        payload: name
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

export function filterProducts() {
    return (dispatch : any, getState : any) =>{
        dispatch(fromLowersPriceProducts());
   }
}

export  function getProductByName(name: any) {
    return  (dispatch : any, getState : any) =>{
        return axios.get(`/api/product/byname`, name).then(async(res) => {
            return await res.data;
        });
   }
}

export function filterProductsFromExpensive() {
    return (dispatch : any, getState : any) =>{
        dispatch(fromLHigherPriceProducts());
   }
}

export function createProduct(newProduct : Product) {
    return (dispatch : any, getState : any) =>{
        return axios.post(`/api/product`, newProduct)
        .then(res => {
            dispatch(createProductInStore(res.data));
            return res;
        });
    }
}

//----------------------------------------------------