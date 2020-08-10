import React from 'react';
import '../TopNav/topNavMenu.css';
import {navLiks , NavLinkModel} from '../TopNav/topNavLiks';
import iconHookah from "../../icons/hookah-icon.png"


export default class TopNavMenu extends React.Component{
    render(){
        return(
            <div className="top-nav-container">
                <img src={iconHookah} alt="iconHookah"/>
                <div className="top-nav-links">
                    {navLiks.map((l: NavLinkModel)=>
                        <a href={l.link}>{l.name}</a>
                    )}
                </div>
            </div>
        )
    }
}
