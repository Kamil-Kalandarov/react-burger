import { TUser, TError } from './../../utils/types';
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { setCookie } from "../../utils/coockie";

export const CREATE_USER_REQUEST: 'CREATE_USER_REQUEST' = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS' = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILED: 'CREATE_USER_FAILED' = 'CREATE_USER_FAILED';


export interface ICreateUserRequest {
  readonly type: typeof CREATE_USER_REQUEST;
}

export interface ICreateUserSuccess {
  readonly type: typeof CREATE_USER_SUCCESS
    readonly payload: TUser
}


export interface createUserFailed {
  readonly type: typeof CREATE_USER_SUCCESS
    readonly payload: string
}

export const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  }
}

export const createUserSuccess = (response: TUser) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: response.user
  }
}

export const createUserFailed = (err: TError) => {
  return {
    type: CREATE_USER_FAILED,
    payload: err.message
  }
}

export function createUser(name: string, email: string, password: string) {
  return function (dispatch) {
    dispatch(createUserRequest(name, email, password))
    fetch(`${apiConfig.baseUrl}/auth/register`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password
      })
    })
    .then(checkResponse)
    .then((response) => {
      let accessToken
      localStorage.setItem('refreshToken', response.refreshToken)
      response.headers.forEach(header => {
        if (header.indexOf('Bearer') === 0) {
          accessToken = header.split('Bearer ')[1];
        }
      });
      if (accessToken) {
        setCookie('accessToken', accessToken)
        createUserSuccess(response)
      }
    })
    .catch((err) => dispatch(createUserFailed(err)))
  }
};

export type TRegistrationActions = 
  | ICreateUserRequest
  | ICreateUserSuccess
  | createUserFailed
