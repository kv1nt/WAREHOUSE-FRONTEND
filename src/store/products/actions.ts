import { 
    Product,
    GET_PRODUCTS,
    SET_PRODUCT,
    FILTER_PRODUCTS,
    FILTER_PRODUCTS_HIGHER,
    FILTER_PRODUCTS_BY_PARAMS
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

export function filterProductsByParams(params: Product){
    return{
        type: FILTER_PRODUCTS_BY_PARAMS,
        payload: params
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

export  function getProductByParams(product : Product) {
    console.log(product)
    return (dispatch : any, getState : any) =>{
        return axios.put(`/api/product/byname`, product)
        .then(res => {
            dispatch(filterProductsByParams(res.data));
            return res;
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