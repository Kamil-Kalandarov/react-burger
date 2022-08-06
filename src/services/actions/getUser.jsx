import { apiConfig } from "../../constans/apiConfig";
import { setCookie } from "../../utils/coockie";
import { checkResponse } from "../api";


/* export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

export const refreshTokenRequest = (refreshToken) => {
  return {
    type: REFRESH_TOKEN_REQUEST,
    refreshToken
  }
}

export const refreshTokenSuccess = (refreshToken) => {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload: refreshToken
  }
}

export const refreshTokenFailed = () => {
  return {
    type: REFRESH_TOKEN_FAILED,
  }
} */

export const refreshToken  = () => {
  fetch(`${apiConfig.baseUrl}/auth/token`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      "token": localStorage.getItem('refresToken')
    })
  })
  .then(checkResponse)
  .then((response) => console.log(response))
}

export const fetchWithRefresh = async(url, options) => {
  try {
    const response = await fetch(url, options)
    const data = await checkResponse(response)
    return data
  } catch(err) {
    if (err.message === 'jwt espired') {
      const refreshData = await refreshToken()
      if (!refreshData.success) {
        return Promise.reject(refreshData)
      }
      localStorage.setItem('refresToken', refreshData.refreshToken)
      setCookie('accessToken', refreshData.accessToken)

      options.headers.authorization = refreshData.accessToken
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          authorization: refreshData.accessToken
        }
      });
      const data = await(checkResponse(response))
      return data
    } else {
      return Promise.reject(err)
    }
  }
}

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const getUserRequest = (accessToken) => {
  return {
    type: GET_USER_REQUEST,
    accessToken
  }
}

export const getUserSuccess = (accessToken) => {
  return {
    type: GET_USER_SUCCESS,
    payload: accessToken
  }
}

export const getUserFailed = () => {
  return {
    type: GET_USER_FAILED
  }
}

export function getUser (accessToken) {
  return function (dispatch) {
    dispatch(getUserRequest(accessToken))
    fetch(`${apiConfig.baseUrl}/auth/user`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        'authorization': accessToken
      })
    })
    .then(fetchWithRefresh())
    .then(checkResponse)
    .then((response) => console.log(response))
    .catch(dispatch(getUserFailed()))
  }
}


export const USER_AUTH_CHECK = 'USER_AUTH_CHECKED';
export const USER_AUTH_CHECKED = 'USER_AUTH_CHECKED';

export const userAuthChek = () => {
  return {
    type: USER_AUTH_CHECK,
  }
}

export const userAuthCheked = () => {
  return {
    type: USER_AUTH_CHECKED,
  }
}

export function checkUserAuth () {
  return function (dispatch) {
    if(!accessToken) {
      dispatch(getUser()).finally(() => {
        dispatch(checkUserAuth())
      })
    } else {
      dispatch(userAuthCheked())
    }
  }
}