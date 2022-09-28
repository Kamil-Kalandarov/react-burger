import { TError } from './../../utils/types/dataTypes';
import {  AppThunk } from '../../utils/types';
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED: 'RESET_PASSWORD_FAILED' = 'RESET_PASSWORD_FAILED';

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
};

export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
};

export interface IResetPasswordFailed {
  readonly type: typeof RESET_PASSWORD_FAILED,
  payload: string
};

export const resetPasswordRequest = (): IResetPasswordRequest => {
  return {
    type: RESET_PASSWORD_REQUEST
  }
};

export const resetPasswordSuccess = (): IResetPasswordSuccess => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  }
};

export const resetPasswordFailed = (err: TError): IResetPasswordFailed => {
  return {
    type: RESET_PASSWORD_FAILED,
    payload: err.message
  }
};

export const resetPassword: AppThunk = (newPassword: string, token: string) => {
  return function (dispatch) {
    dispatch(resetPasswordRequest())
    fetch(`${apiConfig.baseUrl}/password-reset/reset`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        'password':newPassword, 
        'token': token
      })
    })
    .then(checkResponse)
    .then(() => dispatch(resetPasswordSuccess()))
    .catch((err) => dispatch(resetPasswordFailed(err.status)))
  }
};

export type TResetPasswordActions =
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordFailed