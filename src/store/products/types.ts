export interface Product {
    id: any,
    color: string,
    type: string,
    price: any,
    name: string,
    description: string,
    weight: any
}

export interface ProductsState {
    products: Product []
} 

export const GET_PRODUCTS = "GET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPADATE_PRODUCT = "UPADATE_PRODUCT";

interface GetProducts {
    type: typeof GET_PRODUCTS;
    payload: Product[]
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


export type ProductAcionTypes = GetProducts & SetProduct & DeleteProduct & UpdateProduct;