import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Principal from './components/Principal';
import Encabezado from './components/Encabezado';
import Login from './components/Login';
import Menu from './components/Menu';
import AgregarPedido from './components/AgregarPedido';
/*import AgregarProducto from './components/AgregarProducto';*/
import NotFound from './components/NotFound';
import Pedidos from './components/Pedidos';
import AgregarElemento from './components/AgregarElemento';
const Routes = function () {
    return (
        <Router>
            <Encabezado />
            <Switch>
                <Route exact path="/" render={() => <Principal />} />
                <Route exact path="/Menu" render={() => <Menu /> } />
                <Route exact path="/AgregarElemento" render={() => <AgregarElemento /> } />
                <Route exact path="/Pedidos" render={() => <Pedidos /> } />
                <Route exact path="/Login" render={() => <Login />}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;