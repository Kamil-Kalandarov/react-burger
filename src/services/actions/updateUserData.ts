import { AppDispatch, AppThunk } from './../../utils/types/index';
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { getCookie } from "../../utils/coockie";
import { TError, TUser } from "../../utils/types/dataTypes";

export const UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST' = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS' = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = 'UPDATE_USER_FAILED';

export interface IUpdateUserRequest {
  readonly type: typeof UPDATE_USER_REQUEST;
};

export interface IUpdateUserSuccess {
  readonly type: typeof UPDATE_USER_SUCCESS;
    payload: TUser
};

export interface IUpdateUserFailed {
  readonly type: typeof UPDATE_USER_FAILED;
    payload: string
}

export const updateUserRequest = (): IUpdateUserRequest => {
  return {
    type: UPDATE_USER_REQUEST,
  }
};

export const updateUserSuccess = (response: TUser): IUpdateUserSuccess => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: response
  }
};

export const updateUserFailed = (err: TError): IUpdateUserFailed => {
  return {
    type: UPDATE_USER_FAILED,
    payload: err.message
  }
};

export const updateUserData: AppThunk = (name: string, email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(updateUserRequest())
    fetch(`${apiConfig.baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        ...apiConfig.headers, 
        'authorization': `Barear ${getCookie('accessToken')}`
      },
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password
      })
    })
    .then(checkResponse)
    .then((response) => dispatch(updateUserSuccess(response)))
    .catch((err) => dispatch(updateUserFailed(err)))
  }
};

export type TUpdateUserDaraActions =
  | IUpdateUserRequest
  | IUpdateUserSuccess
  | IUpdateUserFailed