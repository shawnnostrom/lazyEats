import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFavorites} from '../../Redux/actions'
import {deleteFav} from '../../Redux/actions'
import Navbar from '../Navbar/Navbar'
import './Favorite.css'


class Favorite extends Component {

  state = {
    favorite: []
  }
  
  handleClick = (id) => {
    this.props.deleteFav(id)
  }
  dashboard = () => {
    this.props.history.push('./dashboard')
  }
  
  render() {
    const places = this.props.favorite.map(i => {
      return (
        <div className = 'fav-box'>
          <a href = {i.url} target = '_blank' rel ='noopener noreferrer' > 
          <h1 className = 'fav-title'>{i.name}</h1>
          <img src = {i.image} alt = ''  className = 'fav-img' />
          </a>
          <button className = 'fav-food-btn' onClick = {() => this.handleClick(i.id)} >X</button>
        </div>
      )
    })
    return (
      <div className = 'fav-body'>
          <Navbar page = {this.props.history.push} />
        <div className = 'fav-background-overlay' >
          <div className = 'fav-overlay1' />
          <h1 className = 'fav-title-overlay' > {this.props.user.username}  Here are the places you like to eat  </h1>
          <div className = 'fav-display'>
          {places}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    favorite: state.user.favorites
  }
}
export default connect(mapStateToProps,{getFavorites,deleteFav})(Favorite);