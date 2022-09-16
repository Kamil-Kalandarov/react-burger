import { TError, TUser } from './../../utils/types';
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { deleteCookie } from "../../utils/coockie";

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
    readonly payload: null
}

export interface ILogputFailed {
  readonly type: typeof LOGOUT_FAILED;
    readonly payload: string
}

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

export const logoutSuccess = (response: TUser) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: response
  }
}

export const logputFailed = (err:TError) => {
  return {
    type: LOGOUT_FAILED,
    payload: err.message
  }
}

export function logout() {
  return function (dispatch) {
    dispatch(logoutRequest())
    fetch(`${apiConfig.baseUrl}/auth/logout`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken')
      })
    })
    .then(checkResponse)
    .then((response) => {
      deleteCookie('accessToken')
      localStorage.removeItem('refreshToken')
      console.log('logout')
      dispatch(logoutSuccess(response))
    })
    .catch((err) => dispatch(logputFailed(err)))
  }
};

export type TLogoutActions = 
  | ILogoutRequest
  | ILogoutSuccess
  | ILogputFailed