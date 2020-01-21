export interface UserImage {
    id: any
    userId: string
    content: any  //HTMLImageElement
}


export interface UploadImageState {
    userImage : UserImage
} 

export const UPLOAD_USER_IMG = "UPLOAD_USER_IMG";
export const GET_PHOTO = "GET_PHOTO";

interface UploadUserImage {
    type: typeof UPLOAD_USER_IMG;
    payload: UserImage
}

interface GetUserImage {
    type: typeof GET_PHOTO;
    payload: UserImage
}



export type UserImageTypes = UploadUserImage & GetUserImage