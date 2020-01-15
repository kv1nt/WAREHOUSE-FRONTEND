import React, { FormEvent } from 'react';
import './registerUserForm.css';
import {  History } from 'history';
import { AppState } from '../../../store';
import { connect } from "react-redux";
import { registerUser } from '../../../store/registerUser/actions';
import { RegiserForm } from '../../../store/registerUser/types';

interface RegisterUserFormProps{
    history: History
    registerUser: typeof registerUser
}

interface RegisterUserFormState{
    email: string
    name: string
    password: string
    confirmPassword: string
}


class RegisterUserForm extends React.Component<RegisterUserFormProps, RegisterUserFormState>{
    constructor(props: RegisterUserFormProps){
        super(props)
        this.state = {
            email: '',
            name:'',
            password: '',
            confirmPassword:''
        }
        this.registerUser = this.registerUser.bind(this)
        this.backToLoginForm = this.backToLoginForm.bind(this)
    }
    
    async onChangeEmail(e: React.FormEvent<HTMLInputElement>) { this.setState({email: await e.currentTarget.value}) }
    async onChangeUserName(e: React.FormEvent<HTMLInputElement>) { this.setState({name: await e.currentTarget.value}) }
    async onChangePwd(e: React.FormEvent<HTMLInputElement>){ this.setState({password: await e.currentTarget.value})}
    async onChangeConfirmPwd(e: React.FormEvent<HTMLInputElement>){ this.setState({confirmPassword: await e.currentTarget.value}) }


    async registerUser(){
        let registerForm: RegiserForm = {
                          id: null, name: this.state.name, email: this.state.email,
                          password: this.state.password, confirmPassword: this.state.confirmPassword}
        
            if(this.state.confirmPassword === this.state.password){
                this.props.registerUser(registerForm);
                this.props.history.push('/')          
            }else{
                alert("Incorrect password of email!")
            }
    }

    async backToLoginForm(){
        this.props.history.push('/')
    }


    render(){
        return(
            <div className="register-form-block">
                <div className="input-block">
                    <span>Email: </span><input type="text" onChange={e => this.onChangeEmail(e)} value={this.state.email} />
                </div>
                <div className="input-block">
                    <span>User Name: </span><input type="text" onChange={e => this.onChangeUserName(e)} value={this.state.name} />
                </div>
                <div className="input-block">
                    <span>Password: </span><input type="password" onChange={e => this.onChangePwd(e)} value={this.state.password} />
                </div>
                <div className="input-block">
                    <span>Confirm Password: </span><input type="password" onChange={e => this.onChangeConfirmPwd(e)} value={this.state.confirmPassword} />
                </div>             
                <button className="register-btn" onClick={this.registerUser}>Register</button>
                <button className="register-btn" onClick={this.backToLoginForm}>Back to Login Form</button>
            </div>
        )
    }
}



  const mapStateToProps = (state: AppState) => ({
    registerUser: state.register
  });

  export default  connect(
    mapStateToProps,
    { registerUser }
  )(RegisterUserForm as any);