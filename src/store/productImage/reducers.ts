import { UploadImageState, ProductImageTypes, 
    UPLOAD_PRODUCT_IMG, 
    GET_PRODUCT_PHOTO,
    GET_PRODUCTS_PHOTOS
} from './types';

const initialState : UploadImageState = {
    productImage : []
}


export function productPhotoReducer(state = initialState, action: ProductImageTypes) : UploadImageState {
    switch(action.type){
        // case UPLOAD_PRODUCT_IMG:
        //     return {
        //         productImages: action.payload   
        //     }
            case GET_PRODUCT_PHOTO:
                return {
                    productImage: action.payload   
                }
            case GET_PRODUCTS_PHOTOS:
                return {
                    productImage: [...action.payload]   
            }                 
            default:
                return state;
    }
}