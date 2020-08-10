import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppState from './store/index';
import LogInForm from "./Components/Forms/LogIn/LogInForm";
import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import CompaniesList from "./Components/CompaniesList";
import WarehousesList from "./Components/WarehousesList";
import GoogleMaps from "./Components/GoogleMap/GoogleMaps";
import BreadcrumbList from "./Components/Breadcrumbs/CompanyBreadcrumb/BreadcrumbList";
import RegisterUserForm from "./Components/Forms/RegisterUser/RegisterUserForm";
import UserInfoPage from "./Components/Forms/UserInfoPage/UserInfoPage";
import AllProduct from "./Components/Products/AllProducts";

import './index.css';
import  MainPage  from "./Components/Main/MainPage";


ReactDOM.render((
    <Provider store={AppState()}>
        <Router>
            <div>
            <HashRouter>
                <Switch>
                    <Route path='/' exact component={MainPage} />
                    <Route path='/login' exact component={LogInForm} />
                    <Route path='/all' component={BreadcrumbList} />
                    <Route path='/register' component={RegisterUserForm} />
                    <Route path='/companies' component={CompaniesList} />
                    <Route path='/products' exact component={AllProduct} />
                    <Route path='/warehouses' component={WarehousesList} />
                    <Route path='/locations' component={GoogleMaps} /> 
                    <Route path='/userinfo' component={UserInfoPage} />
                </Switch>
            </HashRouter>
                </div>
        </Router>
    </Provider>
  ), document.getElementById('root'))