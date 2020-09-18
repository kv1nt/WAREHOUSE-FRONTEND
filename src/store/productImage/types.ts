export interface ProductImage {
    id: any
    productId: string
    content: any  //HTMLImageElement
}


export interface UploadImageState {
    productImage : ProductImage[]
} 

export const UPLOAD_PRODUCT_IMG = "UPLOAD_PRODUCT_IMG";
export const GET_PRODUCT_PHOTO = "GET_PRODUCT_PHOTO";
export const GET_PRODUCTS_PHOTOS = "GET_PRODUCTS_PHOTOS";

interface UploadProductImage {
    type: typeof UPLOAD_PRODUCT_IMG;
    payload: ProductImage
}

interface GetProductImage {
    type: typeof GET_PRODUCT_PHOTO;
    payload: ProductImage
}


interface GetProductsImages {
    type: typeof GET_PRODUCTS_PHOTOS;
    payload: ProductImage[]
}


export type ProductImageTypes = UploadProductImage & GetProductImage & GetProductsImages