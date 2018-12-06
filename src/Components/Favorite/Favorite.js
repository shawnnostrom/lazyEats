import React, { Component } from 'react'
import {connect} from 'react-redux'
import {delFavorite} from '../../Api/Api'
import {getFavorites} from '../../Redux/actions'
import {deleteFav} from '../../Redux/actions'
import './Favorite.css'


class Favorite extends Component {

  state = {
    favorite: []
  }
  componentDidMount = () => {
   
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
          <button className = 'fav-btn' onClick = {() => this.handleClick(i.id)} >del</button>
        </div>
      )
    })
    return (
      <div>
        <button onClick = {this.dashboard}> Dashboard</button>
        <h1> Here are the places you like to eat {this.props.user.username} </h1>
        
        <div className = 'fav-display'>
        {places}
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