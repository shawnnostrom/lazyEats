import React, { Component } from 'react';
import './Home.css';
import {connect} from 'react-redux';

//rcc

class Home extends Component {

  state = {
    longitude : '',
    latitude: ''
  }
  componentDidMount = () => {
  
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
        <img src='./lazyeat.png' alt= ''/>
        <p className = 'home-p'> Welcome to Lazy Eats where you can find who will deliver to you. Because you're too lazy to get off the couch. You can also store some of your favorite restaurants on your profile. You will have to allow the browser to get your geo location when you sign in or the app does not work! </p>
        <button onClick = {this.login} className = 'login-btn' >Login</button>
        <button  onClick = {this.register} className = 'register-btn' > Register</button>
      </div>
    )
  }
}



export default connect(null,{})(Home)
