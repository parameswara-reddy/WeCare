import {createStore, applyMiddleware} from 'redux';  
import rootReducer from './reducers/root';  
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {createLogger } from 'redux-logger';

export default function configureStore() {  
  return createStore(
    rootReducer,
    applyMiddleware(thunk, createLogger(), promiseMiddleware())
  );
}