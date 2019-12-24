import * as React from "react";
import { createCompany, deleteCompany, updateCompany, getCompanies} from "../../store/company/actions";
import {Company } from "../../store/company/types";
import { AppState } from '../../store';
import { connect } from "react-redux";

interface FormownProps{
    companies?: Company[]
    createCompany : typeof createCompany;
    deleteCompany: typeof deleteCompany; 
    updateCompany: typeof updateCompany;
    getCompanies: typeof getCompanies;
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
        const company : Company = {name : name, description: desc, id: null};
        await this.props.createCompany(company);
        
    }


    render(){
        return(
            <div className="inputsForm">
                <span>Name: </span><input type="text" onChange={e => this.onChangeName(e)} />
                <span>Description: </span><input type="text" onChange={e => this.onChangeDescription(e)} />
                <button onClick={this.saveCompany}>Save</button>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    companies : state.companies
  });

  export default  connect(
    mapStateToProps,
    { createCompany, deleteCompany, updateCompany, getCompanies }
  )(AddCompanyFrom as any);
