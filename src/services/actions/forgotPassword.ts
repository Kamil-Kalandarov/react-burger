import { AppDispatch, AppThunk } from './../../utils/types';
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { TError } from '../../utils/types/dataTypes';

export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED: 'FORGOT_PASSWORD_FAILED' = 'FORGOT_PASSWORD_FAILED';

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
};

export interface IForgotPasswordSuccess {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
};

export interface IForgotPasswordFailed {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
    payload: string;
};

export const forgotPasswordRequest = (): IForgotPasswordRequest => {
  return {
    type: FORGOT_PASSWORD_REQUEST
  }
};

export const forgotPasswordSuccess = (): IForgotPasswordSuccess => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  }
};

export const forgotPasswordFailed = (err: TError): IForgotPasswordFailed => {
  return {
    type: FORGOT_PASSWORD_FAILED,
    payload: err.message
  }
};

export const forgotPassword: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(forgotPasswordRequest())
    fetch(`${apiConfig.baseUrl}/password-reset`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        'email': email
      })
    })
    .then(checkResponse)
    .then(() => dispatch(forgotPasswordSuccess()))
    .catch((err) => dispatch(forgotPasswordFailed(err.status)))
  }
};

export type TForgotPasswordActions =
  | IForgotPasswordRequest
  | IForgotPasswordSuccess
  | IForgotPasswordFailed