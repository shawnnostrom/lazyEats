import React, { Component } from 'react';
import './Home.css';
import {connect} from 'react-redux';


class Home extends Component {

  state = {
    longitude : '',
    latitude: ''
  }

  login = () => {
    this.props.history.push('./login')
  }

  register = () => {
    this.props.history.push('./register')
  }
   
  render() {
    return (
      <div className = 'home-body'>
        <img  className = 'logo-img' src='./lazyeat.png' alt= ''/>
        <p className = 'home-p'> Welcome to Lazy Eats, where you can find restaurants near you, that will deliver to you.  You can also store some of your places to eat to your profile. To use this app you will have to allow the browser to get your geo location when you sign in or the app does not work!  </p>
        <button onClick = {this.login} className = 'login-btn' >Login</button>
        <button  onClick = {this.register} className = 'register-btn' > Register</button>
      </div>
    )
  }
}



export default connect(null,{})(Home)
