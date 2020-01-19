import { UploadImageState, UserImageTypes, UPLOAD_USER_IMG } from './types';

const initialState : UploadImageState = {
    userImage : { id: null, userId: '', content: ''}
}

export function userPhotoReducer(state = initialState, action: UserImageTypes) : UploadImageState {
    switch(action.type){
        case UPLOAD_USER_IMG:
            return {
                userImage: action.payload
            }       
            default:
                return state;
    }
}