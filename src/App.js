import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Encabezado from './components/Encabezado';
import './App.css';
import './bootstrap.css';
import DB_CONFIG from './firebase';
import GoogleLogin from 'react-google-login';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
         <Routes />
    </div>
  );
}

export default App;
