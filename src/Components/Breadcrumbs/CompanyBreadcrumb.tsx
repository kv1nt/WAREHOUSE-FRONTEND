import React from 'react'
import '../Breadcrumbs/companyBreadcrumb.css'
import { Company } from '../../store/company/types'
import { getCompanies } from '../../store/company/actions'

interface ICompanyBreadcrumbState
{
   company: Company[]
}


interface ICompanyBreadcrumbProps
{
    getCompanies: typeof getCompanies;
    name: string
    description: string
}


export class CompanyBreadcrumb extends React.Component<ICompanyBreadcrumbProps, ICompanyBreadcrumbState> {
    render(){
        return(
            <div className="company-breadcrumb">
                <div className="title">{this.props.name}</div>
                <div className="short-descripton">{this.props.description}</div>
            </div>
        )
    }
}