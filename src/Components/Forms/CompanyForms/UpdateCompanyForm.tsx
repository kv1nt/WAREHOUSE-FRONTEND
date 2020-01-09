import * as React from "react";
import { createCompany, deleteCompany, updateCompany, getCompanies} from "../../../store/company/actions";
import {Company } from "../../../store/company/types";
import { AppState } from '../../../store';
import { connect } from "react-redux";
import '../../Forms/CompanyForms/formStyle.css';

interface FormOwnProps{
    companies?: Company[]
    createCompany : typeof createCompany;
    deleteCompany: typeof deleteCompany; 
    updateCompany: typeof updateCompany;
    getCompanies: typeof getCompanies;
    id: string,
    name: string,
    description: string
}

interface UpdateCompanyState {
    id: string,
    name: string,
    description: string
}

export  class UpdateCompanyForm extends React.Component<FormOwnProps,any >{
    constructor(props:FormOwnProps,){
        super(props)

        this.state = {
            id: '',
            name: '',
            description:''
        }
    }

    componentWillReceiveProps(nextProps: Company){
        if(nextProps.id!==this.props.id && nextProps.name !==this.props.name){
          this.setState({id: this.props.id, name: this.props.name, description: this.props.description });
        }
      }

    onChangeName = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({name: e.currentTarget.value})
    }

    onChangeDescription = (e: React.FormEvent<HTMLInputElement>) =>{
        this.setState({description: e.currentTarget.value})
    }

    saveCompany() {
         const {id, name, description} = this.state;
         console.log(this.state)
            const company : Company = {name : name, description: description, id: id};
            this.props.updateCompany(company);
        
    }


    render(){
        return(
            <div className="add-company-form">
                <div className="input-block">
                <span>Name: </span><input type="text" onChange={e => this.onChangeName(e)} value={this.state.name} />
            </div>
            <div className="input-block">
                <span>Description: </span><input type="text" onChange={e => this.onChangeDescription(e)} value={this.state.description}/>
            </div>
                <button className="add-company-btn" onClick={this.saveCompany.bind(this)}>Update</button>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    companies : state.companies
  });

  export default  connect(
    mapStateToProps,
    { updateCompany }
  )(UpdateCompanyForm as any);