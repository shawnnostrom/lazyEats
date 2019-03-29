import React, { Component } from 'react';
import './Navbar.css'
import {logout} from '../../Redux/actions'
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';





class Navbar extends Component {

  state = {
    mobile: false,
  }

  handleHome = () => {
    this.setState({mobile: false})
    this.props.page('./dashboard')
  }
  handleFavorite = () => {
    this.setState({mobile: true})
    this.props.page('./favorite')
  }
  handleLogout = () => {
    this.props.page('./home')     
    this.props.logout()
   }

   mobileButtons = () => {
      if (!this.props.mobile) {
        return (
          <button className = 'mobile-fav' onClick = {this.handleFavorite} >
            <i aria-hidden='true' className = 'heart large icon'></i>
          </button>
        )
      }else {
        return (
          <button className = 'mobile-home' onClick = {this.handleHome}> 
            <i aria-hidden='true' className = 'home large icon' ></i>
          </button>
      )
    }
   }

  render() {
    return (
      <div className = 'nav-bar'>
        <div >
          <h1 className = 'nav-title' >LAZY EATS</h1>
        </div>
        <div className = 'nav-btn'>
          <button className = 'home-btn' onClick = {this.handleHome}>Home</button>
          <button className = 'favorite-btn' onClick = {this.handleFavorite}>Favorite</button>
          <button className = 'logout-btn' onClick = {this.handleLogout} >Logout</button>
        </div>
        <div className = 'mobile-nav-btn'>
          <button className = 'mobile-home' onClick = {this.handleHome}> 
            <i aria-hidden='true' className = 'home big icon' ></i>
          </button>
          <button className = 'mobile-fav' onClick = {this.handleFavorite} >
            <i aria-hidden='true' className = 'heart big icon'></i>
          </button>
          <button className = 'mobile-logout' onClick = {this.handleLogout} >
            <i aria-hidden='true' className = 'sign-out big icon'></i>
          </button>
        </div>
        <div className = 'small-mobile-nav-btn'>
          {this.mobileButtons()}
          <button className = 'mobile-logout' onClick = {this.handleLogout} >
            <i aria-hidden='true' className = 'sign-out large icon'></i>
          </button>
        </div>
      
      </div>
    )
  }
}

export default connect(null,{logout})(Navbar)