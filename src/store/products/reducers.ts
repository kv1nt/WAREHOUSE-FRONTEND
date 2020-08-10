import {
    ProductAcionTypes, GET_PRODUCTS, ProductsState, SET_PRODUCT
} from './types';

const initialState : ProductsState = {
    products : []
}

export function productReducer(state = initialState, action: ProductAcionTypes) : ProductsState {
    switch(action.type){
        case GET_PRODUCTS :
            return {
                products: [...action.payload]
            }
            case SET_PRODUCT :
            return {
                products: [...state.products, action.payload]
            }
            default:
                return state;
    }
}