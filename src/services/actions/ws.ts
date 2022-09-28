import { TError, TOrders } from "../../utils/types/dataTypes";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_FAILED: 'WS_CONNECTION_FAILED' = 'WS_CONNECTION_FAILED';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_DATA: 'WS_GET_DATA' = 'WS_GET_DATA';

export interface IWsStart {
  readonly type: typeof WS_CONNECTION_START;
    payload: string
};

export interface IWsSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
};

export interface IWsFailed {
  readonly type: typeof WS_CONNECTION_FAILED;
    payload: string
};

export interface IWsClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
};

export interface IWsGetOrder {
  readonly type: typeof WS_GET_DATA;
    payload: TOrders
};


export const wsStart = (url: string): IWsStart => {
  return {
    type: WS_CONNECTION_START,
    payload: url
  }
}

export const wsSuccess = (): IWsSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS
  }
}

export const wsFailed = (err: TError): IWsFailed => {
  return {
    type: WS_CONNECTION_FAILED,
    payload: err.message
  }
}

export const wsClosed = (): IWsClosed => {
  return {
    type: WS_CONNECTION_CLOSED
  }
}

export const wsGetOrder = (orders: TOrders): IWsGetOrder => {
  return {
    type: WS_GET_DATA,
    payload: orders
  }
};

export type TWsActions  =
  | IWsStart
  | IWsSuccess
  | IWsFailed
  | IWsClosed
  | IWsGetOrder