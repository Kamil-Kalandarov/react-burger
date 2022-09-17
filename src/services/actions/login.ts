import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { setCookie } from "../../utils/coockie";
import { TUser, TError } from '../../utils/types/dataTypes';
import { AppDispatch, AppThunk } from "../../utils/types";

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_FAILED: 'LOGIN_FAILED' = 'LOGIN_FAILED';

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST;
};

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
    payload: TUser
};

export interface ILoginFailed {
  readonly type: typeof LOGIN_FAILED;
    payload: string
};

export const loginRequest = (): ILoginRequest => {
  return {
    type: LOGIN_REQUEST
  }
};

export const loginSuccess = (response: TUser): ILoginSuccess => {
  return {
    type: LOGIN_SUCCESS,
    payload: response
  }
};

export const loginFailed = (err: TError): ILoginFailed => {
  return {
    type: LOGIN_FAILED,
    payload: err.message
  }
};

export const login: AppThunk = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(loginRequest())
    fetch(`${apiConfig.baseUrl}/auth/login`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
    .then(checkResponse)
    .then((response) => {
      const accessToken = response.accessToken.split('Bearer ')[1]
      localStorage.setItem('refreshToken', response.refreshToken)
      if (accessToken) {
        setCookie('accessToken', accessToken)
        dispatch(loginSuccess(response.user))
      }
    })
    .catch((err) => dispatch(loginFailed(err)))
  }
};

export type TloginActions =
  | ILoginRequest
  | ILoginSuccess
  | ILoginFailed