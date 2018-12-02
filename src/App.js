import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import {Switch, Route} from 'react-router-dom';
import history from './history'
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'
import Favorite from './Components/Favorite/Favorite'
import './App.css';
import {connect} from 'react-redux'
import {getSession} from './Redux/actions'

class App extends Component {
  componentDidMount = () => {
     this.props.getSession()
  }
  
  
  render() {
    return (
      <div className="App">
      <ConnectedRouter history = {history}>
        <Switch>
          <Route path = '/home' component = {Home} />
          <Route path ='/login' component = {Login} />
          <Route path = '/register' component = {Register} />
          {
            this.props.userExists && (
              <Switch>
                <Route path ='/dashboard' component = {Dashboard} />
                <Route path ='/favorite' component = {Favorite} />
              </Switch>
            )
          }
          <Route component = {Home} />
        </Switch>
      </ConnectedRouter>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
  userExists: !!state.user.user
  }
}

export default connect(mapStateToProps,{getSession})(App);
