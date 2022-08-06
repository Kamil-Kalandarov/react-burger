import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../api";
import { setCookie } from "../../utils/coockie";

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED';

export const createUserRequest = (name, email, password) => {
  return {
    type: CREATE_USER_REQUEST,
    name, email, password
  }
}

export const createUserSuccess = ({name, email, password}) => {
  return {
    type: CREATE_USER_REQUEST,
    payload: {name, email, password}
  }
}

export const createUserFailed = () => {
  return {
    type: CREATE_USER_FAILED,
  }
}

export function createUser(name, email, password) {
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
      let authToken;
      response.headers.forEach(header => {
        if (header.indexOf('Bearer') === 0) {
          authToken = header.split('Bearer ')[1];
        }
      });
      if (authToken) {
        setCookie('accessToken', authToken);
    }})
    .then((response) => localStorage.setItem('refreshToken', response.refreshToken))
    .then((response) => createUserSuccess(response)) 
    .catch(dispatch(createUserFailed()))
  }
}