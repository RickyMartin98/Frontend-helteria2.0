import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../helteria.svg';

const Encabezado = function () {
    const style= {
        width: '50px',
        height: '50px',
        borderRadius: '30px'
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/"><img src={logo} style={style}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                 <ul className="navbar-nav mr-auto">
                 <li className="nav-item">
                        <Link className="nav-link" to="/Menu">Menu</Link>
                    </li>
                    <li className="nav-item">
                         <Link className="nav-link" to="/Pedidos">Pedidos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/AgregarElemento">AgregarElemento</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                   
                    <button className="btn btn-warning my-2 my-sm-0" type="submit"><Link className="nav-link" to="/Login">Login</Link></button>
                </form>
            </div>
        </nav>
    );
}

export default Encabezado;