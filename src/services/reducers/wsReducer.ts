import { 
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_FAILED,
  WS_CONNECTION_CLOSED,
  WS_GET_DATA,
} from '../actions/ws';
import { TWsActions } from '../actions/ws';
import { TOrder } from './../../utils/types/dataTypes';

type TWsInitialState = {
  wsConnecting: boolean,
  wsConnected: boolean,
  wsFailed: string,
  wsClosed: boolean,
  orders: Array<TOrder>,
  total: number,
  totalToday: number
}

const wsInitialState: TWsInitialState = {
  wsConnecting: false,
  wsConnected: false,
  wsFailed: '',
  wsClosed: false,
  orders: [],
  total: 0,
  totalToday: 0
}

export const wsReducer = (state = wsInitialState, action: TWsActions): TWsInitialState => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        wsConnecting: true
      }
    }
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnecting: false,
        wsConnected: true
      }
    }
    case WS_CONNECTION_FAILED: {
      return {
        ...state,
        wsConnected: false,
        wsConnecting: false,
        wsFailed: action.payload
      }
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsClosed: true,
        wsConnected: false,
        wsConnecting: false
      }
    }
    case WS_GET_DATA: {
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      }
    }
    default: {
      return state
    }
  }
}