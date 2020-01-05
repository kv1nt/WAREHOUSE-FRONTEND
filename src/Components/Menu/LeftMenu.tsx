import React from 'react';
import '../Menu/leftMenu.css';
import { BrowserRouter as Router,
  Route,
  Link, 
  Switch} from 'react-router-dom';
import { MainPage } from '../Main/MainPage';
import GoogleMaps from '../GoogleMap/GoogleMaps';
import CompaniesList from '../CompaniesList';
import  CompanyBreadcrumbList  from '../Breadcrumbs/BreadcrumbList';


interface LeftMenuProps{
  path?: string
}

interface LeftMenuState{
  path?: string
}


export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
    constructor(props: LeftMenuProps){
        super(props)
        this.state = {}
    }

    render() {
        return (  
          <Router>
            <div className="left-menu-container">
                <ul>
                  <li><Link to={'/'} > Home </Link></li>
                  <li><Link to={'/companies'} >Companies</Link></li>
                  <li><Link to={'/warehouses'} >Warehouses</Link></li>
                  <li><Link to={'/locations'} >Locations</Link></li>
                </ul>
            </div>
                <Switch>
                    <Route exact path='/' component={CompanyBreadcrumbList} />
                    <Route path='/companies' component={CompaniesList} />
                    <Route path='/warehouses' component={GoogleMaps} />
                    <Route path='/locations' component={GoogleMaps} />
                </Switch> 
            </Router> 
          );
    }
}