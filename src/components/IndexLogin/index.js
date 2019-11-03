import React from 'react';
import './Index.css';
import ima2 from '../../Images/helteria2.png'
import Promotions from '../Promotions/index'

function IndexLogin() {
  const saludo = ['THE','HELTERIA','HEALTHY FOOD']

  return (
    <div className="App">
      <header className="App-header">
        <p className = "titulo1">
        {saludo[0]}
            </p>
        <p last className = "titulo"> 
          {saludo[1]}
        </p>
        <p last className = "titulofinal">
          {saludo[2]}       
        </p>
        <img src={ima2} className="App-logo" alt="logo" />
        <button className = "sesion">
        iniciar sesion
        </button>
      </header>
      <Promotions>
        
      </Promotions>
    </div>
  );
}

export default IndexLogin;
