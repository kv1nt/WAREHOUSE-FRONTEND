import * as React from "react";
import * as ReactDOM from "react-dom";
import { LeftMenu } from './Components/Menu/LeftMenu';
import { Provider } from 'react-redux';
import AppState from './store/index';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import LogInForm from "./Components/Forms/LogIn/LogInForm";



ReactDOM.render((
    <Provider store={AppState()}>
        <BrowserRouter>
            {/* <LeftMenu/> */}
            <LogInForm/>
        </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))
