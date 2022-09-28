import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { socketMiddleware } from './middleware/socket-middleware';
import { 
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS, 
  WS_CONNECTION_FAILED, 
  WS_CONNECTION_CLOSED, 
  WS_GET_DATA 
} from './actions/ws';


export type TWsActionsTypes = {
  readonly wsStart: typeof WS_CONNECTION_START,
  readonly wsSuccess: typeof WS_CONNECTION_SUCCESS,
  readonly wsGetData: typeof WS_GET_DATA,
  readonly wsClosed: typeof WS_CONNECTION_CLOSED,
  readonly wsFailed: typeof WS_CONNECTION_FAILED
}

export const wsActionsTypes = {
  wsStart: WS_CONNECTION_START,
  wsSuccess: WS_CONNECTION_SUCCESS,
  wsGetData: WS_GET_DATA,
  wsClosed: WS_CONNECTION_CLOSED,
  wsFailed: WS_CONNECTION_FAILED
};

 declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActionsTypes)));

export const store = createStore(rootReducer, enhancer);