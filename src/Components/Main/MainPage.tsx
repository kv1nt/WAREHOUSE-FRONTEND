import React from 'react';
import '../Main/mainPage.css';
import { CompaniesState } from '../../store/company/types';
import { getCompaniesForUser } from '../../store/company/actions';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { LoginForm } from '../../store/userLogin/types';
import TopNavMenu from '../TopNav/TopNavMenu';
import AllProducts from '../Products/AllProducts';

interface ICompanyBreadcrumbListProps
{
    getCompaniesForUser: typeof getCompaniesForUser;
    companies: CompaniesState;
    login:  LoginForm
}

export class MainPage extends React.Component<ICompanyBreadcrumbListProps, any> {
constructor(props: ICompanyBreadcrumbListProps)
{
    super(props)
    this.state = {}
}

 componentDidMount(){
     const { login} = this.props
    getCompaniesForUser(login.id)
 }
    render(){
        return(
            <div className="main-page-container">
                <TopNavMenu/>
                {/* <AllProducts/> */}
                <p>This is Main page!</p>
            </div>
            
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
        getCompaniesForUser 
    }
  )(MainPage as any);
