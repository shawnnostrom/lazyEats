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