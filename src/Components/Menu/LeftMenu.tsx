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
                  <li><Link to={'/all'} >Home</Link></li>
                  <li><Link to={'/companies'} >Company Service</Link></li>
                  <li><Link to={'/warehouses'} >Warehouse Service</Link></li>
                  <li><Link to={'/locations'} >Locations</Link></li>
                </ul>
            </div>
          );
    }
}