import React from 'react';
import '../Menu/leftMenu.css';
import { Link} from 'react-router-dom';


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
                  <div className="link-effect"><li><Link to={'/all'} >Home</Link></li></div>
                  <div className="link-effect"><li><Link to={'/companies'} >Company Service</Link></li></div>
                  <div className="link-effect"><li><Link to={'/warehouses'} >Warehouse Service</Link></li></div>
                  <div className="link-effect"><li><Link to={'/locations'} >Locations</Link></li></div>
                  <div className="link-effect"><li><Link to={'/userinfo'} >User Settings</Link></li></div>
                  <div className="link-effect"><li><Link to={'/'} >Log Out</Link></li></div>
                </ul>
            </div>
          );
    }
}