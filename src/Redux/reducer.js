const initState = {
  location: [],
}


const reducer = (state = initState,action) => {

  switch (action.type){
    case "LOCATION": {
      return {...state , location: action.payload}
    }
    default: return state;
  }
}

export default reducer;