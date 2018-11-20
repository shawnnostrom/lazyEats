import React, { Component } from 'react';
// import axios from 'axios'
import {connect} from 'react-redux';
import {location} from '../../Redux/actions'
//rcc

class Home extends Component {

  state = {
    longitude : '',
    latitude: ''
  }
  componentDidMount = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position.coords)
        
      })
    }else {
      alert('Browser does not support geolocation. ')
    }
  }
  
  ApiTest = () =>{
    const currentLocation = {
      longitude: this.state.longitude,
      latitude: this.state.latitude
    }
    this.props.location(currentLocation)
    this.props.history.push('./dashboard')
    }

  login = () => {
    this.props.history.push('./login')
  }

  register = () => {
    this.props.history.push('./register')
  }
   

  render() {
    
    return (
      <div>
        <h1> LAZY EATS </h1>
        <p> Welcome to Lazy Eats where you can find who will deliver to you. You can also store some of your favorite restaurants  into your profile. You will have to allow the browser to get your geo location. If that is done go ahead and login or sign up </p>
        <button onClick = {this.login} >Login</button>
        <button  onClick = {this.register}> Register</button>
      </div>
    )
  }
}



export default connect(null,{location})(Home)
