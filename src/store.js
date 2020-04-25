import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './reducers/app.js';

export default createStore(appReducer, applyMiddleware(thunkMiddleware));