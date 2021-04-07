import React from "react";
import Auxiliary from "./hoc/Auxiliary/Auxiliary";
import Layout from "./hoc/Layout/Layout";

import {Switch, Route, Redirect} from 'react-router-dom';


export default class App extends React.Component{

    render() {
        return (
            <Auxiliary>
            <Switch>
                <Route exact path="/" component={Layout} />
                <Route path="/about" render={() => <h1>О нас</h1>}/>
                <Redirect to="/"/>
            </Switch>
            </Auxiliary>
        );
    }
}
