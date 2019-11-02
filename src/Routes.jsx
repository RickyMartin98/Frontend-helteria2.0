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
const Routes = function () {
    return (
        <Router>
            <Encabezado />
            <Switch>
                <Route exact path="/Login" render={() => <Login />}/>
                <Route exact path="/Principal" render={() => <Principal />} />
                <Route exact path="/AgregarPedido" render={() => <AgregarPedido /> } />
                <Route exact path="/Menu" render={() => <Menu /> } />
                <Route exact path="/About" render={() => <AgregarPedido /> } />
                <Route exact path="/AgregarProducto" render={() => <AgregarPedido /> } />
                <Route exact path="/Blog" render={() => <AgregarPedido /> } />
                <Route exact path="/Pedidos" render={() => <Pedidos /> } />
                <Route exact path="/AgregarPedido" render={() => <AgregarPedido /> } />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default Routes;