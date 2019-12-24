import * as React from "react";
import { connect } from "react-redux";
import { AppState } from '../store';
import { CompaniesState, Company } from "../store/company/types";
import { getCompanies, deleteCompany, deleteCompanyStore, setCompanies } from '../store/company/actions';
import  AddCompanyFrom  from "../Components/Forms/AddNewCompanyForm";
import '../Components/styles/CompanyList.css';
import { types } from "@babel/core";


interface AppOwnProps{
    getCompanies: typeof getCompanies;
    setCompanies: typeof setCompanies;
    deleteCompany: typeof deleteCompany;
    deleteCompanyStore: typeof deleteCompanyStore;
    onClick: (e: React.MouseEvent) => void
    companies: CompaniesState;
    description: string;
    name: string;
    id:any;
  }



  class CompaniesList extends React.Component<AppOwnProps, any> {
    state = {
      companies: [], 
      description:'', 
      name:''
    };
  
    async componentDidMount() {
       this.setState({companies : await this.props.getCompanies()})
    }

    async removeCompany(id: any) {
      this.props.deleteCompany(id);
      this.props.deleteCompanyStore(id);
      this.setState({companies : await this.props.getCompanies()})
    }


    render() {
        const {companies} = this.state;
      return (
          <div className="some">
          <p>Companies: </p>
          {
            companies.map((company: Company, i: number) =>{
              return(
                <>
                  <ul>
                      <li key={i+1}>
                        <div className="CompanyItem">
                          <div className="DeleteCompany" onClick={()=> this.removeCompany(company.id)}>✛</div>
                          <p>Company Name: {company.name}</p>
                          <p>Description:  {company.description}</p>
                          </div>
                      </li>
                  </ul> 
                </>
              )
          })}
          <br/>
          <p>Add New Company:</p>
          <AddCompanyFrom {...this.props} />
        </div>
      );
    }
  }
  
  const mapStateToProps = (state: AppState) => ({
    companies : state.companies
  });
  
  export default connect(
    mapStateToProps,
    { getCompanies , deleteCompany, deleteCompanyStore, setCompanies }
  )(CompaniesList as any);