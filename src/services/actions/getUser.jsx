import { apiConfig } from "../../constans/apiConfig";
import { getCookie, setCookie } from "../../utils/coockie";
import { checkResponse } from "../api";


export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
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
}

export const refreshToken  = () => {
  fetch(`${apiConfig.baseUrl}/auth/token`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })
  .then(checkResponse)
  .then((response) => {
    if (!response.succcess) {
      return Promise.reject(response)
    }
    localStorage.setItem('refreshToken', response.refreshToken)
    setCookie('accessToken', response.accessToken.split(('Bearer ')[1]))
    return response
  })
}

export const fetchWithRefresh = async(url, options) => {
  try {
    const response = await fetch(url, options)
    return await checkResponse(response)
  } catch (err) {
    if (err.message = 'jwt expired') {
      const refreshData = await refreshToken()
      options.headers.authorization = refreshData.accessToken
      const response = await fetch(url, options)
      return await checkResponse(response)
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

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
}

export const getUserFailed = () => {
  return {
    type: GET_USER_FAILED
  }
}

export function getUser (accessToken) {
  return function (dispatch) {
    console.log('getUser')
    dispatch(getUserRequest(accessToken))
    fetchWithRefresh(`${apiConfig.baseUrl}/auth/user`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        'authorization': accessToken
      })
    })
    .then(checkResponse)
    .then((response) => dispatch(getUserSuccess(response.user)))
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
    const accessToken = getCookie('accessToken')
    if(!accessToken) {
      dispatch(getUser(accessToken))
      .finally(() => {
        dispatch(checkUserAuth())
      })
    } else {
      dispatch(userAuthCheked())
    }
  }
}



/* export const fetchWithRefresh = (url, options) => {
  return function (dispatch) {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('Token does not exist in storage');
    } else {
      dispatch(refreshTokenRequest(refreshToken))
      .then(refreshToken(refreshToken))
      .then((response) => {
        let accessToken
        localStorage.setItem('refreshToken', response.refreshToken)
        response.headers.forEach(header => {
          if (header.indexOf('Bearer') === 0) {
            accessToken = header.split('Bearer ')[1];
          }
        });
        if (accessToken) {
        setCookie('accessToken', accessToken);
       }})
      .then((response) => {
        options = {
          ...options,
          headers: {
            ...options.headers,
            authorization: response.accessToken
          }
        }
      })
      .catch(dispatch(refreshTokenFailed()))
    } 
  }
} */