import axios from 'axios';


  
 export const getFood = (location) => {
   return axios.post('http://localhost:8080/api/yelp/info',location)
          
  }
  export const register = (user) => {
    return axios.post('http://localhost:8080/api/auth/register',user)
  }

  export const login = (user) => {
    return axios.post('http://localhost:8080/api/auth/login',user)
  }


