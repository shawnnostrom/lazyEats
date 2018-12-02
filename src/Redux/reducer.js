const initState = {
  user: null,
}


const reducer = (state = initState,action) => {

  switch (action.type){
    case "USER": {
      return {...state , user: action.payload.data}
    }
    default: return state;
  }
}

export default reducer;