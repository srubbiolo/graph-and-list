import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import GraphMain from '../components/Graph/graphMain';
import ListMain from '../components/List/listMain';

//Routing of the app, default goes to /graph
const Routes = () => {
    return <Router>
                <Switch>
                    <Route path="/graph" component={GraphMain}></Route>
                    <Route path="/list" component={ListMain}></Route>
                    <Redirect from="/" to="/graph"/>
                </Switch>
            </Router>
}

export default Routes;