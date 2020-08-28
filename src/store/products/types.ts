export interface Product {
    id: any,
    color: any,
    type: any,
    price: any,
    name: any,
    description: any,
    weight: any
}

export interface ProductsState {
    products: Product []
} 

export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPADATE_PRODUCT = "UPADATE_PRODUCT";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS"; 
export const FILTER_PRODUCTS_HIGHER = "FILTER_PRODUCTS_HIGHER"; 
export const FILTER_PRODUCTS_BY_PARAMS = "FILTER_PRODUCTS_BY_PARAMS";

interface GetProducts {
    type: typeof GET_PRODUCTS;
    payload: Product[]
}

interface FilterProducts {
    type: typeof FILTER_PRODUCTS;
}

interface FilterProductsByParams {
    type: typeof FILTER_PRODUCTS_BY_PARAMS;
    payload: any;
}

interface FilterProductsHigherPrice {
    type: typeof FILTER_PRODUCTS_HIGHER;
}

interface SetProduct{
    type: typeof SET_PRODUCT;
    payload: Product
}

interface DeleteProduct {
    type: typeof DELETE_PRODUCT;
    payload: Product
}

interface UpdateProduct {
    type: typeof UPADATE_PRODUCT;
    payload: ProductsState
}


export type ProductAcionTypes = GetProducts & SetProduct & DeleteProduct & UpdateProduct & FilterProducts
                                & FilterProductsHigherPrice & FilterProductsByParams;