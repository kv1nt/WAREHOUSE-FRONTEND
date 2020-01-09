import React from 'react';
import './logInForm.css';
import { withRouter, Redirect, Switch } from 'react-router-dom';
import {  History } from 'history';

interface LogInFormProps{
    history: History
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
        if(this.state.email === 'admin' && this.state.password === 'admin'){
            // window.location.replace("http://localhost:3000/companies");
            this.props.history.push('/companies')
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

export default withRouter(LogInForm as any)