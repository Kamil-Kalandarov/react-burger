export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_FAILED = 'WS_CONNECTION_FAILED';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_DATA = 'WS_GET_DATA';
export const WS_SEND_DATA = 'WS_SEND_DATA';

export const wsStart = (url) => {
  return {
    type: WS_CONNECTION_START,
    payload: url
  }
}

export const wsSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS
  }
}

export const wsFailed = () => {
  return {
    type: WS_CONNECTION_FAILED
  }
}

export const wsClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED
  }
}

export const wsGetOrder = (orders) => {
  return {
    type: WS_GET_DATA,
    payload: orders
  }
}