import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { deleteCookie } from "../../utils/coockie";

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

export const logouSuccess = (/* response */) => {
  return {
    type: LOGOUT_SUCCESS,
   /*  payload: response.user */
  }
}

export const logputFailed = (err) => {
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
      dispatch(logouSuccess(response))
    })
    .catch((err) => dispatch(logputFailed(err)))
  }
}