import * as React from "react";
import { AppState } from '../../../store';
import { connect } from "react-redux";
import ImageUploader from 'react-images-upload';
import { uploadUserPhoto } from "../../../store/userImage/actions";
import { UserImage } from "../../../store/userImage/types";
import { LoginForm } from "../../../store/userLogin/types";



interface FormOwnProps{
    uploadUserPhoto: typeof uploadUserPhoto
    userphoto: UserImage
    login:  LoginForm
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


    async readFile(files : any, onLoadCallback: any) : Promise<any>{
        var reader = new FileReader();
        var blob = await files[0] as Blob
        reader.onload = onLoadCallback;
        reader.readAsDataURL(blob);
    }

     onDrop (picture : any){
         const {login} =this.props;
      this.readFile(picture, async function(e: any) { 
        var userImage : UserImage  = {id: '', userId: login.id , content: e.target.result.toString() };
           await uploadUserPhoto(userImage)
        }) 
             
     }



    render() {
        return(  
            <form>         
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
            </form>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    userphoto: state.userphoto,
    login: state.login.logInForm
});

  export default  connect(
    mapStateToProps, 
    { uploadUserPhoto }
  )(UploadUserPhoto as any);
