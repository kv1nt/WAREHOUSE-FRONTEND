import React from 'react';
import '../Menu/leftMenu.css';


interface LeftMenuProps{}

interface LeftMenuState{}


export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
    constructor(props: LeftMenuProps){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="left-menu-container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Companies</a></li>
                    <li><a href="#">Warehouses</a></li>
                    <li><a href="#">Location</a></li>
                </ul>
            </div>
        )
    }
}