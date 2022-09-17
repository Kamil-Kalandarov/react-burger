import { AppDispatch, AppThunk } from './../../utils/types';
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { getCookie } from "../../utils/coockie";
import { TIngredients } from "../../utils/types/dataTypes";
import { TError } from '../../utils/types/dataTypes';

export const GET_ORDER_DETAILS_REQUEST: 'GET_ORDER_DETAILS_REQUEST' = 'GET_ORDER_DETAILS_REQUEST';
export const GET_ORDER_DETAILS_SUCCESS: 'GET_ORDER_DETAILS_SUCCESS' = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_FAILED: 'GET_ORDER_DETAILS_FAILED' = 'GET_ORDER_DETAILS_FAILED';
export const EMPTY_CONSTRUCTOR: 'EMPTY_CONSTRUCTOR' = 'EMPTY_CONSTRUCTOR';

export interface IGetOrderDetailsRequest {
  readonly type: typeof GET_ORDER_DETAILS_REQUEST;
    orderedIngredients: TIngredients
};

export interface IGetOrderDetailsSuccess {
  readonly type: typeof GET_ORDER_DETAILS_SUCCESS;
    payload: number
};

export interface IGetOrderDetailsFailed {
  readonly type: typeof GET_ORDER_DETAILS_FAILED;
    payload: string
}

export const getOrderDetailsRequest = (orderedIngredients: TIngredients): IGetOrderDetailsRequest => {
  return {
    type: GET_ORDER_DETAILS_REQUEST,
    orderedIngredients
  }
};

export const getOrderDetailsSuccess = (currentOrderNumber: number): IGetOrderDetailsSuccess => {
  return {
    type: GET_ORDER_DETAILS_SUCCESS,
    payload: currentOrderNumber
  }
};

export const getOrderDetailsFailed = (err: TError): IGetOrderDetailsFailed => {
  return {
    type: GET_ORDER_DETAILS_FAILED,
    payload: err.message
  }
};

export const postOrder: AppThunk = (orderedIngredients) => {
  return function (dispatch: AppDispatch) {
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
    .catch((err) => dispatch(getOrderDetailsFailed(err)))
  }
};

export type TOrderDetailsActions =
  | IGetOrderDetailsRequest
  | IGetOrderDetailsSuccess
  | IGetOrderDetailsFailed