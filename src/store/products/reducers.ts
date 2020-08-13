import {
    ProductAcionTypes, GET_PRODUCTS, ProductsState, SET_PRODUCT, FILTER_PRODUCTS, FILTER_PRODUCTS_HIGHER, FILTER_PRODUCTS_NAME
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
            case FILTER_PRODUCTS :
                let prod = state.products
                return {
                    products: prod
                    .sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
                }
            case FILTER_PRODUCTS_NAME :
                let val = action.payload
                let prod2 = state.products.filter(x => x.name === val);
                return {
                    products: prod2
                }    
            case FILTER_PRODUCTS_HIGHER :
                let prod1 = state.products
                return {
                    products: prod1
                    .sort((a,b) =>  parseFloat(b.price) - parseFloat(a.price))
                }
            case SET_PRODUCT :
            return {
                products: [...state.products, action.payload]
            }
            default:
                return state;
    }
}