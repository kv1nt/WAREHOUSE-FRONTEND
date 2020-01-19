export interface LoginForm {
    id: any
    email: string
    password: string
}

export interface LoginFormState {
    logInForm : LoginForm
} 

export const LOGIN = "LOGIN";


interface LogIn {
    type: typeof LOGIN;
    payload: LoginForm
}



export type LooginAcionTypes = LogIn