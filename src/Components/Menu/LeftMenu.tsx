import React from 'react';
import '../Menu/leftMenu.css';
import { BrowserRouter as Router,
  Route,
  Link, 
  Switch,
  Redirect} from 'react-router-dom';
import GoogleMaps from '../GoogleMap/GoogleMaps';
import CompaniesList from '../CompaniesList';
import CompanyBreadcrumbList from '../Breadcrumbs/CompanyBreadcrumb/BreadcrumbList'
import WarehouseList from '../Breadcrumbs/WarehouseBreadcrumb/WarehouseList';
import WarehousesList from '../WarehousesList';
import LogInForm from '../Forms/LogIn/LogInForm';


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
          <div className="left-menu-container">
                <ul>
                  <li><Link to={'/all'} >Home</Link></li>
                  <li><Link to={'/companies'} >Company Service</Link></li>
                  <li><Link to={'/warehouses'} >Warehouse Service</Link></li>
                  <li><Link to={'/locations'} >Locations</Link></li>
                </ul>
            </div>
          );
    }
}