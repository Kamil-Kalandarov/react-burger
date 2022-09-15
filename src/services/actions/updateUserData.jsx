import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { getCookie } from "../../utils/coockie";

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  }
}

export const updateUserSuccess = (response) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: response.user
  }
}

export const updateUserFailed = () => {
  return {
    type: UPDATE_USER_FAILED,
  }
}

export function updateUserData(name, email, password) {
  return function (dispatch) {
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
    .catch(() => dispatch(updateUserFailed()))
  }
}