import React from 'react';
import './logInForm.css';
import { withRouter } from 'react-router-dom';
import {  History } from 'history';
import { logInUser } from '../../../store/userLogin/actions';
import { LoginForm } from '../../../store/userLogin/types';
import { AppState } from '../../../store';

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
    }
    
    async onChangeEmail(e: React.FormEvent<HTMLInputElement>){
        this.setState({email: await e.currentTarget.value})
    }

    async onChangePwd(e: React.FormEvent<HTMLInputElement>){
        await this.setState({password: await e.currentTarget.value})
    }

    async login(){
        let loginForm: LoginForm = {id: null, email: this.state.email, pwd: this.state.password}
        // let res = await this.props.logInUser(loginForm);
        // console.log(res)
        if(this.state.email === 'admin' && this.state.password === 'admin'){
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
                <button className="login-btn" onClick={()=>this.login()}>Login</button>
            </div>
        )
    }
}



export default LogInForm 

// const mapStateToProps = (state: AppState) => ({});

//   export default  withRouter(
//     mapStateToProps,
//      {logInUser: (user: LogInForm) => logInUser(user)} 
//   )(LogInForm as any);