import * as React from "react";
import { connect } from "react-redux";
import { AppState } from '../store';
import { CompaniesState, Company } from "../store/company/types";
import { deleteCompany, deleteCompanyStore, createCompany, getCompaniesForUser } from '../store/company/actions';
import  AddCompanyFrom  from "./Forms/CompanyForms/AddNewCompanyForm";
import '../Components/styles/CompanyList.css';
import UpdateCompanyForm from "./Forms/CompanyForms/UpdateCompanyForm";
import { LeftMenu } from "./Menu/LeftMenu";
import { LoginForm } from "../store/userLogin/types";


interface AppOwnProps{
    createCompany: typeof createCompany; 
    getCompaniesForUser: typeof  getCompaniesForUser
    deleteCompany: typeof deleteCompany;
    deleteCompanyStore: typeof deleteCompanyStore;
    login: LoginForm
    onClick: (e: React.MouseEvent) => void
    companies: CompaniesState;
    company: Company 
    description: string;
    name: string;
    id:any;
    path?: string;
  }


  class CompaniesList extends React.Component<AppOwnProps, any> {
    state = {
      companies: [], 
      description:'', 
      name:'',
      id: '',
      style: ''
    };

    async componentDidMount(){
      const { login } = this.props
      this.props.getCompaniesForUser(login.id)
    }

    async removeCompany(id: any) {
      const { login } = this.props
      this.props.deleteCompany(id);
      this.props.deleteCompanyStore(id);
      await this.props.getCompaniesForUser(login.id)
    }

    async getCurrentCompany (company: Company) {
       this.setState({
         id: company.id,
         name: company.name,
         description: company.description,
         style: "dark-side"
        })
    }


    render() {
        const {companies} = this.props.companies;
      return (
        <>
        <LeftMenu/>
          <div className="comapnies-list-container">
            <div className="title-block">Companies:</div>
            {
              companies.map((company: Company, i: number) =>{
                return (
                      <ul key={i}>
                          <li>
                            <div className="CompanyItem" onClick={()=> this.getCurrentCompany(company)}>
                              <div className="DeleteCompany" onClick={()=> this.removeCompany(company.id)}>
                                <button className="delete-company-btn">Delete</button>
                              </div>
                              <div className="company-title">{company.name}</div>
                              <div className="company-description">{company.description}</div>
                              </div>
                          </li>
                      </ul> 
                    )
            })}
            <br/>
            <div className="title-block">Add New Company:</div>
            <AddCompanyFrom {...this.props} />
            <div className="title-block">Update Company:</div>
            <UpdateCompanyForm {...this.state} />
        </div>  
        </>      
      );
    }
  }
  
  const mapStateToProps = (state: AppState) => ({
    companies : state.companies,
    login: state.login.logInForm
  });
  
  export default connect(
    mapStateToProps,
    {
      getCompaniesForUser , deleteCompany,
       deleteCompanyStore, createCompany
    }
  )(CompaniesList as any);