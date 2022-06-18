/* import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";

export const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_FAILED = 'GET_ORDER_DETAILS_FAILED';

export const getOrderDetailsRequest = (orderIngredients) => {
  return {
    type: GET_ORDER_DETAILS_REQUEST,
    orderIngredients,
    payload: true
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
    payload: true,
  }
}

export function postOrderNumber (ingredientsId) {
  return function (dispatch) {
    dipatch(getOrderDetailsRequest())
    fetch(`${apiConfig.baseUrl}/orders`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        "ingredients": ingredientsId
      })
    })
    .then(checkResponse)
    .then((currentOrderNumber) => dispatch(getOrderDetailsSuccess(currentOrderNumber)))
    .catch(dispatch(getOrderDetailsFailed()))
  }
} */