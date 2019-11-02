import React from 'react';
import { BrowerRouter as Router, Route, Switch } from 'react-router-dom';
import Principal from './components/Principal';

const Routes = function () {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Principal />>} />
                <Route extact path="/pedidos" />
                <Route exact path="/producto-nuevo"/>
                <Route exact path="/index" />
            </Switch>
        </Router>
    );
}

export default Router;