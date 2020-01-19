export interface UserImage {
    id: any
    userId: string
    content: any  //HTMLImageElement
}


export interface UploadImageState {
    userImage : UserImage
} 

export const UPLOAD_USER_IMG = "UPLOAD_USER_IMG";


interface UploadUserImage {
    type: typeof UPLOAD_USER_IMG;
    payload: UserImage
}



export type UserImageTypes = UploadUserImage