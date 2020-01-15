import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppState from './store/index';
import LogInForm from "./Components/Forms/LogIn/LogInForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CompaniesList from "./Components/CompaniesList";
import WarehousesList from "./Components/WarehousesList";
import GoogleMaps from "./Components/GoogleMap/GoogleMaps";
import BreadcrumbList from "./Components/Breadcrumbs/CompanyBreadcrumb/BreadcrumbList";
import RegisterUserForm from "./Components/Forms/RegisterUser/RegisterUserForm";
import './index.css';


ReactDOM.render((
    <Provider store={AppState()}>
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact component={LogInForm} />
                    <Route path='/all' component={BreadcrumbList} />
                    <Route path='/register' component={RegisterUserForm} />
                    <Route path='/companies' component={CompaniesList} />
                    <Route path='/warehouses' component={WarehousesList} />
                    <Route path='/locations' component={GoogleMaps} />
                </Switch>
                </div>
        </Router>
    </Provider>
  ), document.getElementById('root'))