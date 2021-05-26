/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navigation from './Navigation';
import Home from './Home';
import Search from './Search';
import Roulette from './Roulette';
import About from './About';
import Account from './Account';
import Result from './Result';
import Footer from './Footer';
import history from './history';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={Search} />
            <Route path="/roulette" component={Roulette} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/result" component={Result} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
