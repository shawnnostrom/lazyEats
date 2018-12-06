import {push} from 'connected-react-router'
import axios from 'axios'

export const getSession = () => {
  return dispatch => {
    axios.get('/api/auth/session')
      .then(( user ) => {
        dispatch ({
          type: "USER",
          payload: user
        });
        if (user) {
          
          dispatch(push('/dashboard'));
        } else {
          console.log('log in ')
          dispatch(push('/home'));
        }
      })
  }
}
export const login = (user) => {
  return dispatch => {
    axios.post('/api/auth/login',user)
    .then((user ) => {
      dispatch ({
        type: "USER",
        payload: user
      })
      if (user){
        dispatch(push('/dashboard'))
      }
    })
  }
}
export const getFavorites = (id) => {
  return dispatch => {
    
    axios.post('/api/fav/favorites',id)
    .then(item => {
      
      dispatch ({
        type: "FAVORITES",
        payload: item
      })
    }) 
  }
}
export const deleteFav = (id) => {
  return dispatch => {
    axios.delete(`/api/fav/delete/${id}`)
    .then(() => {
      
      dispatch ({
        type: "DELETE",
        payload: id
      })
    })
  }
}
export const saveFav = (place) => {
  return dispatch => {
    axios.post('/api/fav/add' ,place)
    .then(() => {
      console.log('action',place)
      dispatch ({
        type: "ADD",
        payload: place
      })
    })
  }
}