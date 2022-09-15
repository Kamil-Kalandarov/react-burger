import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { setCookie } from "../../utils/coockie";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    payload: response.user
  }
}

export const loginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err.message
  }
}

export function login(email, password) {
  return function (dispatch) {
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
        dispatch(loginSuccess(response))
      }
    })
    .catch((err) => dispatch(loginFailed(err)))
  }
}