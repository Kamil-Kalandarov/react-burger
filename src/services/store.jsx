import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';
import { socketMiddleware } from './middleware/socket-middleware';
import { 
  wsStart, 
  wsSuccess, 
  wsFailed, 
  wsClosed, 
  wsGetOrder 
} from './actions/ws';

 const wsActions = {
  wsStart: wsStart,
  wsSuccess: wsSuccess,
  wsFailed: wsFailed,
  wsClosed: wsClosed,
  wsGetOrder: wsGetOrder
 }


const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)));

// Инициализируем хранилище с помощью корневого редьюсера
export const store = createStore(rootReducer, enhancer);