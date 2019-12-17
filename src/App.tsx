import React from 'react';
import CompaniesList from './Components/CompaniesList';
import './App.css';
import AppState from './store/index';
import { Provider } from 'react-redux';


const App: React.FC = () => {
  return (
    <Provider store={AppState()}>
    <CompaniesList />
    </Provider>
  );
}

export default App;
