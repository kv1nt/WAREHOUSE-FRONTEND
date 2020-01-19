import * as React from "react";
import { createCompany, deleteCompany, updateCompany, getCompaniesForUser} from "../../../store/company/actions";
import {Company } from "../../../store/company/types";
import { AppState } from '../../../store';
import { connect } from "react-redux";
import '../../Forms/CompanyForms/formStyle.css';
import { LoginForm } from "../../../store/userLogin/types";
interface FormownProps{
    companies?: Company[]
    login:  LoginForm
    createCompany : typeof createCompany;
    deleteCompany: typeof deleteCompany; 
    updateCompany: typeof updateCompany;
    getCompaniesForUser: typeof getCompaniesForUser;
}

interface AddCompanyState {
    name: string,
    desc: string
}

export  class AddCompanyFrom extends React.Component<any,AddCompanyState >{
    constructor(props:FormownProps){
        super(props)

        this.state = {
            name:'',
            desc:''
        }
    }

    onChangeName = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({name: e.currentTarget.value})
    }

    onChangeDescription = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({desc: e.currentTarget.value})
    }

    saveCompany = async () =>{
        const {name, desc} = this.state;
        const {login} = this.props
        const company : Company = {name : name, description: desc, id: null, userId: login.id};
         this.props.createCompany(company);
         await this.props.getCompaniesForUser(login.id)
    }


    render(){
        return(
            <div className="add-company-form">
                <div className="input-block">
                <span>Name: </span><input type="text" onChange={e => this.onChangeName(e)} />
            </div> 
            <div className="input-block">
                <span>Description: </span><input type="text" onChange={e => this.onChangeDescription(e)} />
            </div>
                <button className="add-company-btn" onClick={this.saveCompany}>Save</button>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    companies : state.companies,
    login: state.login.logInForm
  });

  export default  connect(
    mapStateToProps,
    { createCompany, getCompaniesForUser }
  )(AddCompanyFrom as any);
