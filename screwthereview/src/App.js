import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Roulette from './Roulette';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Roulette} exact/>
             <Route path="/roulette" component={Roulette}/>
            {/* <Route component={Error}/> */}
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
