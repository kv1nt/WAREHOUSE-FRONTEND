import React from 'react'
import '../CompanyBreadcrumb/companyBreadcrumb.css'
import { Company, CompaniesState } from '../../../store/company/types'
import { CompanyBreadcrumb } from '../CompanyBreadcrumb/CompanyBreadcrumb'
import { getCompanies } from '../../../store/company/actions'
import { connect } from 'react-redux'
import { AppState } from '../../../store'
import WarehouseList from '../WarehouseBreadcrumb/WarehouseList'
import LocationBreadcrumbs from '../LocationBreadcrumbs/LocationsBreadcrumbs'


interface ICompanyBreadcrumbListProps
{
    getCompanies: typeof getCompanies;
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
    await this.props.getCompanies()
 }

    render(){
        return(
            <>
            <br/>
            <div className="breadcrumbs-list-container">
                <div className="list-title">Companies</div>
                {this.props.companies?.companies.map((company: any) =>
                    <CompanyBreadcrumb {...company} />
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
    companies : state.companies
  });
  
  export default connect(
    mapStateToProps,
    {
       getCompanies ,
    }
  )(CompanyBreadcrumbList as any);
