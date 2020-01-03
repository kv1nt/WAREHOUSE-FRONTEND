import React from 'react';
import '../Menu/leftMenu.css';
import { BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';


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
                  <Router>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/companies">Companies</Link></li>
                    <li><Link to="/warehouses">Warehouses</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                  </Router>
                </ul>
            </div>
        )
    }
}