/* import {
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  GET_ORDER_DETAILS_FAILED
} from '../actions/orderDetails';

const orderDetailsInitialState = {
  orderIngredients: [],
  currentOrderNumber: null,
  oredrRequest: false,
  orderSuccess: false,
  orderfailed: false
}

export const orderDetailsRducer = (state = orderDetailsInitialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        oredrRequest: true,
        orderIngredients: action.payload
      }
    }
    case GET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        oredrRequest: false,
        orderSuccess: 'success',
        currentOrderNumber: action.payload
      }
    }
    case GET_ORDER_DETAILS_FAILED: {
      return {
        ...state,
        orderSuccess: 'success',
        currentOrderNumber: action.payload,
        orderfailed: true
      }
    }
  }
} */