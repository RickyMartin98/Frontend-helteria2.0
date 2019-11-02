import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Encabezado from './components/Encabezado';
import './App.css';
import './bootstrap.css';
import GoogleLogin from 'react-google-login';
import Login from './Login';
function App() {
  return (
    <div className="App">
       <Encabezado /> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login />
        <Router>
        <Switch>
            <Router></Router>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
