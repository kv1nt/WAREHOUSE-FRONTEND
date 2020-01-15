export interface RegiserForm {
    id: any,
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface RegisterFormState {
    registerForm : RegiserForm
} 

export const REGISTER_USER = "REGISTER_USER";


interface Register {
    type: typeof REGISTER_USER;
    payload: RegiserForm
}



export type RegisterUserAcionTypes = Register