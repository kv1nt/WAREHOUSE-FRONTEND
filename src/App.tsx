import React from 'react';
import CompaniesList from './Components/CompaniesList';
import './App.css';
import AppState from './store/index';
import { Provider } from 'react-redux';
import { LeftMenu } from './Components/Menu/LeftMenu';


const App: React.FC = () => {
  return (
    <Provider store={AppState()}>
    <LeftMenu />
    <CompaniesList />
    </Provider>
  );
}

export default App;
