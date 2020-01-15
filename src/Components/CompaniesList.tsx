import * as React from "react";
import { connect } from "react-redux";
import { AppState } from '../store';
import { CompaniesState, Company } from "../store/company/types";
import { getCompanies, deleteCompany, deleteCompanyStore, createCompany } from '../store/company/actions';
import  AddCompanyFrom  from "./Forms/CompanyForms/AddNewCompanyForm";
import '../Components/styles/CompanyList.css';
import UpdateCompanyForm from "./Forms/CompanyForms/UpdateCompanyForm";
import { LeftMenu } from "./Menu/LeftMenu";


interface AppOwnProps{
    getCompanies: typeof getCompanies;
    createCompany: typeof createCompany;
    deleteCompany: typeof deleteCompany;
    deleteCompanyStore: typeof deleteCompanyStore;
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
       await this.props.getCompanies()
    }

    async removeCompany(id: any) {
      this.props.deleteCompany(id);
      this.props.deleteCompanyStore(id);
      await this.props.getCompanies()
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
    companies : state.companies
  });
  
  export default connect(
    mapStateToProps,
    {
       getCompanies , deleteCompany,
       deleteCompanyStore, createCompany
    }
  )(CompaniesList as any);