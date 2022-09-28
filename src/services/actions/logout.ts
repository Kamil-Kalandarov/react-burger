import { TError, TUser } from '../../utils/types/dataTypes';
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { deleteCookie } from "../../utils/coockie";
import { AppDispatch, AppThunk } from '../../utils/types';

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
    payload: null
}

export interface ILogputFailed {
  readonly type: typeof LOGOUT_FAILED;
    payload: string
}

export const logoutRequest = (): ILogoutRequest  => {
  return {
    type: LOGOUT_REQUEST
  }
}

export const logoutSuccess = (response: null): ILogoutSuccess => {
  return {
    type: LOGOUT_SUCCESS,
    payload: response
  }
}

export const logputFailed = (err:TError): ILogputFailed => {
  return {
    type: LOGOUT_FAILED,
    payload: err.message
  }
}

export const logout: AppThunk = () => {
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