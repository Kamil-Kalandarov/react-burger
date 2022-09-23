import { MiddlewareAPI, Middleware } from "redux";
import { TWsActionsTypes } from "../store";
    

export const socketMiddleware = (wsActions: TWsActionsTypes): Middleware => {
  const { wsStart, wsSuccess, wsFailed, wsClosed, wsGetData } = wsActions;
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null  = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === wsStart) {
        console.log('wsStart');
        socket = new WebSocket(payload);
      }
      
      if (socket) {
        socket.onopen = () => {
          console.log('wsOpened');
          dispatch({ type: wsSuccess});
        };

        socket.onerror = (event) => {
          console.log('wsError');
          dispatch({type: wsFailed});
        };

        socket.onclose = () => {
          console.log('wsClosed');
          dispatch({type: wsClosed});
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({type: wsGetData, payload: restParsedData});
        };
      }
      next(action);
    };
  };
};