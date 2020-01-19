import * as React from "react";
import { AppState } from '../../../store';
import { connect } from "react-redux";
import './editUserForm.css'
import { RegiserForm } from "../../../store/registerUser/types";
import { updateUser } from "../../../store/registerUser/actions";
import UploadUserPhoto from "../UploadUserPhotoForm/UploadUserPhoto";


interface FormOwnProps{
    register: RegiserForm
     updateUser: typeof updateUser
}


interface UpdateUserState {
    id: any,
    name: string
    email: string
    password: string
    confirmPassword: string,
    pictures: any
}

class EditUserForm extends React.Component<FormOwnProps,UpdateUserState >{
    constructor(props:FormOwnProps){
        super(props)

        this.state = {
            id: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            pictures: []
        }
    }

     componentDidMount(){
          this.setState({
              id: this.props.register.id, name: this.props.register.name, email: this.props.register.email,
              password: this.props.register.password, confirmPassword: this.props.register.password
             });
        
      }

    onChangeName = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({name: e.currentTarget.value})
    }

    onChangeEmail = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({email: e.currentTarget.value})
    }

    onChangePassword = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({  password: e.currentTarget.value,
                         confirmPassword:e.currentTarget.value
                      })
    }

    saveUser() {
        const user : RegiserForm = {
                     id: this.state.id, email: this.state.email, name: this.state.name,
                      password: this.state.password, confirmPassword: this.state.confirmPassword }
        this.props.updateUser(user)
        alert("User: " + user.name + " was updated successfully..." )
    }


    render() {
        return(
            <div className="upate-company-form">
                <div className="input-block">
                <span>Name: </span><input type="text" onChange={e => this.onChangeName(e)} value={this.state.name} />
            </div>
            <div className="input-block">
                <span>Email: </span><input type="text" onChange={e => this.onChangeEmail(e)} value={this.state.email}/>
            </div>
            <div className="input-block">
                <span>Password: </span><input type="text" onChange={e => this.onChangePassword(e)} value={this.state.password}/>
            </div>
            <div className="input-block">
                <UploadUserPhoto />
            </div>
                <button className="add-company-btn" onClick={this.saveUser.bind(this)}>Update</button>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    register: state.register.registerForm
  });

  export default  connect(
    mapStateToProps,
    { updateUser }
  )(EditUserForm as any);
