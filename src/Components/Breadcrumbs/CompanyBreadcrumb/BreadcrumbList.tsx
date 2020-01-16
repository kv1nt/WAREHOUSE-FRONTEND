import React from 'react'
import '../CompanyBreadcrumb/companyBreadcrumb.css'
import { Company, CompaniesState } from '../../../store/company/types'
import { CompanyBreadcrumb } from '../CompanyBreadcrumb/CompanyBreadcrumb'
import { getCompanies, getCompaniesForUser } from '../../../store/company/actions'
import { connect } from 'react-redux'
import { AppState } from '../../../store'
import WarehouseList from '../WarehouseBreadcrumb/WarehouseList'
import LocationBreadcrumbs from '../LocationBreadcrumbs/LocationsBreadcrumbs'
import { LeftMenu } from '../../Menu/LeftMenu'
import { LoginForm } from '../../../store/userLogin/types'


interface ICompanyBreadcrumbListProps
{
    getCompanies: typeof getCompanies;
    getCompaniesForUser: typeof getCompaniesForUser;
    login:  LoginForm
    companies?: CompaniesState   
}

interface ICompanyBreadcrumbListState
{
    companies: Company[]
}


 class CompanyBreadcrumbList extends React.Component<ICompanyBreadcrumbListProps, ICompanyBreadcrumbListState> {
constructor(props: ICompanyBreadcrumbListProps)
{
    super(props)
    this.state = {
        companies: []
    }
}

async componentDidMount(){
    const { login } = this.props
    this.props.getCompaniesForUser(login.id)
 }

    render(){
        return(
            <>
            <LeftMenu/>
            <br/>
            <div className="breadcrumbs-list-container">
                <div className="list-title">Companies</div>
                {this.props.companies?.companies.map((company: any, index: number) =>
                    <CompanyBreadcrumb {...company} key={index}/>
                )}
            </div>
            <br/>
                <WarehouseList />
            <div className="list-title-location">Locations</div>
                <LocationBreadcrumbs />
            </>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    companies : state.companies,
    login: state.login.logInForm
  });
  
  export default connect(
    mapStateToProps,
    {
       getCompanies , getCompaniesForUser
    }
  )(CompanyBreadcrumbList as any);

