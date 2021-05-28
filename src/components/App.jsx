import {Provider} from "react-redux";
import {store} from "../redux";
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Callback from "./Callback";
import React from "react";
import Profile from "./Profile";

export default function Main() {
    return (
        <Router>
        <Provider store={store}>
            <Switch>
                <Route exact path={'/'}>
                    <Login/>
                </Route>
                <Route exact path={'/callback'} component={Callback}/>
                <Route exact path={'/profile'} component={Profile}/>
            </Switch>
        </Provider>
    </Router>)
}
