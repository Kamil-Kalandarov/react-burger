import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const forgotPasswordRequest = () => {
  return {
    type: FORGOT_PASSWORD_REQUEST
  }
}

export const forgotPasswordSuccess = () => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  }
}

export const forgotPasswordFailed = (err) => {
  return {
    type: FORGOT_PASSWORD_FAILED,
    payload: err.message
  }
}

export function forgotPassword (email) {
  return function (dispatch) {
    dispatch(forgotPasswordRequest())
    fetch(`${apiConfig.baseUrl}/password-reset`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        'email': email
      })
    })
    .then(checkResponse)
    .then(dispatch(forgotPasswordSuccess()))
    .catch((err) => dispatch(forgotPasswordFailed(err.status)))
  }
}