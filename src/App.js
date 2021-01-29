import React from 'react';
import Home from './Home'
import Sports from './Sports'
import Movies from './Movies'
import Books from './Books'
import Results from './Results'

import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'

export default function App(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Sports" component={Sports}/>
                <Route exact path="/Movies" component={Movies}/>
                <Route exact path="/Books" component={Books}/>
                <Route exact path='/Results' component={Results}/>
            </Switch>
        </Router>

    )
}