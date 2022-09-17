import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { socketMiddleware } from './middleware/socket-middleware';
import { TWsActions } from './actions/ws'
import { 
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS, 
  WS_CONNECTION_FAILED, 
  WS_CONNECTION_CLOSED, 
  WS_GET_DATA 
} from './actions/ws';

 const wsActions = {
  wsStart: typeof WS_CONNECTION_START,
  wsSuccess: typeof WS_CONNECTION_SUCCESS,
  wsFailed: typeof WS_CONNECTION_FAILED, 
  wsClosed: typeof WS_CONNECTION_CLOSED, 
  wsGetOrder: typeof WS_GET_DATA
 }

 declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)));

export const store = createStore(rootReducer, enhancer);