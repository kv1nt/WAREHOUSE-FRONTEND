import React from 'react';
import '../Main/mainPage.css';
import { CompaniesState } from '../../store/company/types';
import { getCompaniesForUser } from '../../store/company/actions';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { LoginForm } from '../../store/userLogin/types';
import TopNavMenu from '../TopNav/TopNavMenu';
import AllProducts from '../Products/AllProducts';
import Hookah from "../../images/hookah-img.jpg" 
import MainBanner from '../Banner/MainBanner';
import ProductFilter from '../Filters/ProductFilter/ProductFilter';

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
                <ProductFilter/>
                {/* <MainBanner/> */}
                <AllProducts/> 
                {/* <img src={Hookah} alt="banner"/> */}
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
