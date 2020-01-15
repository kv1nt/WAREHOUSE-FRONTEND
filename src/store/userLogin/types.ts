export interface LoginForm {
    id: any,
    email: string
    pwd: string
}

export interface LoginFormState {
    loginForm : LoginForm []
} 

export const LOGIN = "LOGIN";


interface LogIn {
    type: typeof LOGIN;
    payload: LoginForm
}



export type LooginAcionTypes = LogIn