import { MiddlewareAPI, Middleware } from "redux";
import { TWsActions } from "../actions/ws";
import { 
  WS_CONNECTION_START, 
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_FAILED,
  WS_CONNECTION_CLOSED,
  WS_GET_DATA 
} from "../actions/ws";


export const socketMiddleware = (actions: TWsActions): Middleware => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null  = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

        if (type ===  WS_CONNECTION_START) {
          socket = new WebSocket(payload);
        }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type : WS_CONNECTION_SUCCESS, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: WS_CONNECTION_FAILED, payload: event });
        };

        socket.onclose = (event) => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: WS_GET_DATA, payload: restParsedData });
        };

        if (type === WS_GET_DATA) {
          const orders = { ...payload };
          socket.send(JSON.stringify(orders));
        }
      }

      next(action);
    };
  };
};

/* export const socketMiddleware = (wsActions: TWsActions) => {
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
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event});
        };

        socket.onerror = (event) => {
          console.log('wsError');
          dispatch({type: WS_CONNECTION_FAILED, payload: event});
        };

        socket.onclose = () => {
          console.log('wsClosed');
          dispatch({type: WS_CONNECTION_CLOSED, payload: event});
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
}; */