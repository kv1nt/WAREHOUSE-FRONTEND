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
export const UPDATE_USER = "UPDATE_USER";
export const GET_USER = "GET_USER";


interface Register {
    type: typeof REGISTER_USER;
    payload: RegiserForm
}

interface GetUser {
    type: typeof GET_USER;
    payload: RegiserForm
}

interface UpdateUser {
    type: typeof UPDATE_USER;
    payload: RegiserForm
}



export type RegisterUserAcionTypes = Register & GetUser & UpdateUser