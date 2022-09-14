import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { getCookie } from "../../utils/coockie";

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_FAILED = 'GET_ORDER_DETAILS_FAILED';
export const EMPTY_CONSTRUCTOR = 'EMPTY_CONSTRUCTOR';

export const getOrderDetailsRequest = (orderedIngredients) => {
  return {
    type: GET_ORDER_DETAILS_REQUEST,
    orderedIngredients,
  }
}

export const getOrderDetailsSuccess = (currentOrderNumber) => {
  return {
    type: GET_ORDER_DETAILS_SUCCESS,
    payload: currentOrderNumber,
  }
}

export const getOrderDetailsFailed = () => {
  return {
    type: GET_ORDER_DETAILS_FAILED,
  }
}

export function postOrder (orderedIngredients) {
  return function (dispatch) {
    dispatch(getOrderDetailsRequest(orderedIngredients))
    fetch(`${apiConfig.baseUrl}/orders`, {
      method: 'POST',
      headers: {
        ...apiConfig.headers, 
        'authorization': `Barear ${getCookie('accessToken')}`
      },
      body: JSON.stringify({
        "ingredients": orderedIngredients
      })
    })
    .then(checkResponse)
    .then((response) => dispatch(getOrderDetailsSuccess(response.order.number)))
    .catch(() => dispatch(getOrderDetailsFailed()))
  }
}