import * as React from "react";
import { connect } from "react-redux";
import { AppState } from '../store';
import { CompaniesState, Company } from "../store/company/types";
import { getCompanies } from '../store/company/actions';
import AddCompanyFrom  from "../Components/Forms/AddNewCompanyForm";


interface AppOwnProps{
    getCompanies: typeof getCompanies;
    companies: CompaniesState;
    description:string;
    name:string;
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
                          <p>Company Name: {company.name}</p>
                          <p>Description:  {company.description}</p>
                      </li>
                  </ul> 
                </>
              )
          })}
          <br/>
          <p>Add New Company:</p>
          <AddCompanyFrom  />
        </div>
    
  
      );
    }
  }
  
  const mapStateToProps = (state: AppState) => ({
    companies : state.companies
  });
  
  export default connect(
    mapStateToProps,
    { getCompanies  }
  )(CompaniesList as any);