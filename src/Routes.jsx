import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; //importing reouting functions.

import App from './App';
import Home from './components/Home';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" render={ () => <Home/> } />
          <Route exact path="/" render={ () => <App/> } />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
