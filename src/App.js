import { HashRouter as Router , Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import City from './views/City';
import Home from './views/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/city" component={ City }></Route>
          <Route path="/" component={ Home }></Route>
          <Route></Route>
        </Switch>
      </Router>
    )
  }
}
