import { MiddlewareAPI, Middleware } from "redux";
import { TWsActionsTypes } from "../store";
import { 
  WS_CONNECTION_START, 
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_FAILED,
  WS_CONNECTION_CLOSED,
  WS_GET_DATA 
} from "../actions/ws";


export const socketMiddleware = (wsActions: TWsActionsTypes): Middleware => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null  = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        console.log('wsStart');
        socket = new WebSocket(payload);
      }
      
      if (socket) {
        socket.onopen = () => {
          console.log('wsOpened');
          dispatch({ type: WS_CONNECTION_SUCCESS});
        };

        socket.onerror = (event) => {
          console.log('wsError');
          dispatch({type: WS_CONNECTION_FAILED});
        };

        socket.onclose = () => {
          console.log('wsClosed');
          dispatch({type: WS_CONNECTION_CLOSED});
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({type: WS_GET_DATA, payload: restParsedData});
        };
      }
      next(action);
    };
  };
};