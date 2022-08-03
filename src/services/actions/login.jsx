import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginRequest = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    email, password
  }
}

export const loginSuccess = (email, password) => {
  return {
    type: LOGIN_SUCCESS,
    payload: email, password
  }
}

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  }
}

export function login(email, password) {
  return function (dispatch) {
    dispatch(loginRequest(email, password))
    fetch(`${apiConfig.baseUrl}/auth/login`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })
    .then(checkResponse)
    .then((response) => console.log(response))
    .then((response) => loginSuccess(response))
    .catch(dispatch(loginFailed()))
  }
}