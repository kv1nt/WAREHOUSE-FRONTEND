import React from 'react';
import '../Main/mainPage.css';

import { Company, CompaniesState } from '../../store/company/types';
import { getCompanies } from '../../store/company/actions';
import { connect } from 'react-redux';
import { AppState } from '../../store';





interface ICompanyBreadcrumbListProps
{
    companies: CompaniesState;
}

export class MainPage extends React.Component<ICompanyBreadcrumbListProps, any> {
constructor(props: ICompanyBreadcrumbListProps)
{
    super(props)
    this.state = {}
}

 componentDidMount(){
     getCompanies()
 }
    render(){
        console.log(this.props.companies.companies)
        return(
            <div className="main-page-container">
                <p>This is Main page!</p>
                {/* <CompanyBreadcrumbList {...this.props}/> */}
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    companies : state.companies
  });
  
  export default connect(
    mapStateToProps,
    {
       getCompanies 
    }
  )(MainPage as any);
