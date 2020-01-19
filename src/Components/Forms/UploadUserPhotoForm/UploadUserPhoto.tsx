import * as React from "react";
import { AppState } from '../../../store';
import { connect } from "react-redux";
import ImageUploader from 'react-images-upload';
import { uploadUserPhoto } from "../../../store/userImage/actions";
import { UserImage } from "../../../store/userImage/types";
import fs from 'fs'



interface FormOwnProps{
    uploadUserPhoto: typeof uploadUserPhoto
    userphoto: UserImage
}


interface PhotoState {
    pictures: any
    result: any
}

class UploadUserPhoto extends React.Component<FormOwnProps,PhotoState>{
    constructor(props:FormOwnProps){
        super(props)

        this.state = {
            pictures: [],
            result: null
        }
        this.onDrop = this.onDrop.bind(this)
    }


     getBase64(file: any): any {
         const blob = file[0] as Blob;       
        let reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = function ()  {
            console.log(reader.result)
        };
        
     }

    async onDrop(picture : any) {
         if(this.state.pictures.length < 1) // only one image upload
           await this.setState({ pictures: this.state.pictures.concat(picture) });
           let res =  this.getBase64(this.state.pictures)
           console.log(res)
            const userImage : UserImage= {id: null, userId: '', content: this.getBase64(this.state.pictures)}
             this.props.uploadUserPhoto(userImage)
     }



    render() {
        return(
            <>
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    userphoto: state.userphoto
});

  export default  connect(
    mapStateToProps,
    { uploadUserPhoto }
  )(UploadUserPhoto as any);
