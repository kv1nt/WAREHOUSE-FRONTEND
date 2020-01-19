import React from 'react'
import './userInfoPage.css'
import { LoginForm } from '../../../store/userLogin/types'
import { getUserById } from '../../../store/registerUser/actions'
import { AppState } from '../../../store'
import { connect } from 'react-redux'
import { RegiserForm } from '../../../store/registerUser/types'
import { LeftMenu } from '../../Menu/LeftMenu'
import EditUserForm from '../EditUserForm/EditUserForm'




interface IUserInfoPageProps
{
    login:  LoginForm
    register: RegiserForm
    getUserById: typeof getUserById
}

interface IUserInfoPageState
{
    id: any,
    name: string
    email: string
    password: string
    confirmPassword: string,
    isFormShow: boolean
}

 export class UserInfoPage extends React.Component<IUserInfoPageProps, IUserInfoPageState> {
    constructor(props: IUserInfoPageProps){
        super(props)
        this.state = {
            id: null,
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            isFormShow: false
        }

        this.isUpdateUserFormShow = this.isUpdateUserFormShow.bind(this)
    }

     async componentDidMount(){
        const { login } = this.props
        await this.props.getUserById(login.id)
        const {  register } = this.props
        this.setState({ 
            id: register.id, email: register.email, name: register.name, 
            password: register.password, confirmPassword: register.confirmPassword
        })
    }

    isUpdateUserFormShow(){
        this.setState({isFormShow: true})
    }

    render(){
        return(
            <>
            <LeftMenu />
            <div className="user-info-container">
                <div className="user-item"><span>Name: {this.state.name}</span></div>
                <div className="user-item"><span>Email: {this.state.email}</span></div>
                <div className="user-item"><span>Password: {this.state.password}</span></div>
                <button className="update-user-btn" onClick={this.isUpdateUserFormShow} >Update</button>
            </div>
            {this.state.isFormShow ? <EditUserForm /> : ''}
            </>
        )
    }
}


const mapStateToProps = (state: AppState) => ({
    register: state.register.registerForm,
    login: state.login.logInForm
  });
  
  export default connect(
    mapStateToProps,
    {
        getUserById
    }
  )(UserInfoPage as any);
