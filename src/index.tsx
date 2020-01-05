import * as React from "react";
import * as ReactDOM from "react-dom";
import { LeftMenu } from './Components/Menu/LeftMenu';
import { Provider } from 'react-redux';
import AppState from './store/index';
import { BrowserRouter } from 'react-router-dom'
import './index.css';



ReactDOM.render((
    <Provider store={AppState()}>
        <BrowserRouter>
            <LeftMenu/>
        </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))
