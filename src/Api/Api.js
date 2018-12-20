import axios from 'axios';


  
export const getFood = (location) => {
  return axios.post('/api/yelp/info',location)        
}
export const register = (user) => {
  return axios.post('/api/auth/register',user)
}

export const saveFavorite = (place) => {
  return axios.post('/api/fav/add' ,place)
}
export const delFavorite = (id) => {
  return axios.delete(`/api/fav/delete/${id}`)
}
export const getFavorites = (id) => {
  return axios.post('/api/fav/favorites',id)
}

