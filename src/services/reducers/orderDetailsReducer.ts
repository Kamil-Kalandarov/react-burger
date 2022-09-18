import {
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED
} from '../actions/orderDetails';
import { TOrderDetailsActions } from '../actions/orderDetails';
import { TIngredients } from '../../utils/types/dataTypes';

type TOrderDetailsInitialState = {
  orderedIngredients: ReadonlyArray<TIngredients>,
  currentOrderNumber: number | null | string
  orederRequest: boolean,
  orderSuccess: boolean,
  orderfailed: boolean
}

const orderDetailsInitialState = {
  orderedIngredients: [],
  currentOrderNumber: null,
  orederRequest: false,
  orderSuccess: false,
  orderfailed: false
}

export const orderDetailsRducer = (state = orderDetailsInitialState, action: TOrderDetailsActions): TOrderDetailsInitialState => {
  switch (action.type) {
    case GET_ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        orederRequest: true,
/*         orderedIngredients: action.payload */
      }
    }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        orederRequest: false,
        orderSuccess: true,
        currentOrderNumber: action.payload
      }
    }
    case GET_ORDER_DETAILS_FAILED: {
      return {
        ...state,
        currentOrderNumber: action.payload,
        orederRequest: false,
        orderfailed: true
      }
    }
    default: {
      return state
    }
  }
}