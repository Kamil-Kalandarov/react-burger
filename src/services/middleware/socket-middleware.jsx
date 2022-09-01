export const socketMiddleware = (wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsStart, wsSuccess, wsFailed, wsClosed, wsGetOrder } = wsActions;
      if (type === wsStart) {
        console.log('wsStart');
        socket = new WebSocket(payload);
      }
      if (socket) {
        socket.onopen = () => {
          console.log('wsOpened');
          dispatch(wsSuccess);
        };

        socket.onerror = (event) => {
          console.log('wsError');
          dispatch(wsFailed(event.code.toString()));
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch(wsGetOrder(parsedData));
        };

        socket.onclose = () => {
          console.log('wsClosed');
          dispatch(wsClosed());
        };
      }
      next(action);
    };
  };
};