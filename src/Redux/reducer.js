const initState = {
  user: null,
  favorites: []
}


const reducer = (state = initState,action) => {

  switch (action.type){
    case "USER": {
      return {...state , user: action.payload.data}
    }
    case "LOGOUT": {
      return {...state , user: action.payload}
    }
    case "FAVORITES": {
      return {...state, favorites: action.payload.data}
    }
    case "DELETE": {
      return {...state, favorites: state.favorites.filter(i => i.id !== action.payload)}
    }
    case "ADD": {
      return {...state, favorites: [...state.favorites, action.payload]}
    }
    default: return state;
  }
}

export default reducer;