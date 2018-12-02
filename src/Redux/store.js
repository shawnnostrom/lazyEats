import {combineReducers,createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  user :reducer
})

export default createStore(rootReducer, applyMiddleware(thunk,routerMiddleware(history)))