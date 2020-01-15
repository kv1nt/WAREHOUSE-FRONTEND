import React from 'react';
import './logInForm.css';
import { withRouter } from 'react-router-dom';
import {  History } from 'history';
import { logInUser } from '../../../store/userLogin/actions';
import { LoginForm } from '../../../store/userLogin/types';
import { AppState } from '../../../store';
import { connect } from "react-redux";

interface LogInFormProps{
    history: History
    logInUser: typeof logInUser
}

interface LogInFormState{
    email: string
    password: string
}

class LogInForm extends React.Component<LogInFormProps, LogInFormState>{
    constructor(props: LogInFormProps){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this)
    }
    
    async onChangeEmail(e: React.FormEvent<HTMLInputElement>){
        this.setState({email: await e.currentTarget.value})
    }

    async onChangePwd(e: React.FormEvent<HTMLInputElement>){
        await this.setState({password: await e.currentTarget.value})
    }

    async login(){
        let loginForm: LoginForm = {id: null, email: this.state.email, password: this.state.password}
        var loginUser  = await this.props.logInUser(loginForm) as unknown as LoginForm;
            if(this.state.email === loginUser.email && this.state.password === loginUser.password){
                this.props.history.push('/all')          
            }else{
                alert("Incorrect password of email!")
            }
    }


    render(){
        return(
            <div className="login-form-block">
                <div className="input-block">
                    <span>Email: </span><input type="text" onChange={e => this.onChangeEmail(e)} value={this.state.email} />
                </div>
                <div className="input-block">
                    <span>Password: </span><input type="password" onChange={e => this.onChangePwd(e)} value={this.state.password} />
                </div>
                <button className="login-btn" onClick={this.login}>Login</button>
            </div>
        )
    }
}



  const mapStateToProps = (state: AppState) => ({
    login: state.login
  });

  export default  connect(
    mapStateToProps,
    { logInUser }
  )(LogInForm as any);