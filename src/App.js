import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path = '/home' component = {Home} />
          <Route path ='/dashboard' component = {Dashboard} />
          <Route path ='/login' component = {Login} />
          <Route path = '/register' component = {Register} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
