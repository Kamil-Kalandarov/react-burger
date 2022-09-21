import { TError } from '../../utils/types/dataTypes';
import { apiConfig } from "../../constans/apiConfig";
import { getCookie, setCookie } from "../../utils/coockie";
import { checkResponse } from "../api";
import { TUser } from "../../utils/types/dataTypes";
import { AppDispatch, AppThunk } from '../../utils/types';


export const REFRESH_TOKEN_REQUEST: 'REFRESH_TOKEN_REQUEST' = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS' = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED : 'REFRESH_TOKEN_FAILED' = 'REFRESH_TOKEN_FAILED';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';


export interface IRefreshTokenRequest {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccess {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
    payload: string;
}

export interface IRefreshTokenFailed {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}


export const refreshTokenRequest = (): IRefreshTokenRequest  => {
  return {
    type: REFRESH_TOKEN_REQUEST
  }
}

export const refreshTokenSuccess = (refreshToken: string): IRefreshTokenSuccess  => {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload: refreshToken
  }
}

export const refreshTokenFailed = ():IRefreshTokenFailed  => {
  return {
    type: REFRESH_TOKEN_FAILED,
  }
}

export const refreshToken  = () => {
  return fetch(`${apiConfig.baseUrl}/auth/token`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    })
  })
  .then(checkResponse)
  .then((response) => {
    if (!response.success) {
      return Promise.reject(response)
    }
    localStorage.setItem('refreshToken', response.refreshToken)
    setCookie('accessToken', response.accessToken.split('Bearer ')[1])
    return response
  })
}



export const fetchWithRefresh = async(url:string, options: RequestInit) => {
  try {
    const response = await fetch(url, options)
    return await checkResponse(response)
  } catch (err) {
      const typedError = err as Error
      if (typedError?.message === 'jwt expired') {
        const refreshData = await refreshToken();
        (options.headers as {[key: string]: string}).authorization = refreshData.accessToken
        const response = await fetch(url, options)
        return await checkResponse(response)
    } else {
      return Promise.reject(err)
    }
  }
};

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
    payload: TUser
}

export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
    payload: string
}

export const getUserRequest = (): IGetUserRequest => {
  return {
    type: GET_USER_REQUEST
  }
}

export const getUserSuccess = (user: TUser): IGetUserSuccess => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
}

export const getUserFailed = (err: TError): IGetUserFailed  => {
  return {
    type: GET_USER_FAILED,
    payload: err.message
  }
}

export const getUser: AppThunk = () => {
  return function (dispatch) {
    console.log('getUser')
    dispatch(getUserRequest())
    return fetchWithRefresh(`${apiConfig.baseUrl}/auth/user`, {
      headers: {
        ...apiConfig.headers, 
        'authorization': `Barear ${getCookie('accessToken')}`
      }
    })
    .then((response) => dispatch(getUserSuccess(response)))
    .catch((err) => dispatch(getUserFailed(err)))
  }
}


export const USER_AUTH_CHECK: 'USER_AUTH_CHECK' = 'USER_AUTH_CHECK';

export interface IUserAuthChek {
  readonly type: typeof USER_AUTH_CHECK;
}

export const userAuthChek = (): IUserAuthChek => {
  return {
    type: USER_AUTH_CHECK
  }
}

export const checkUserAuth: AppThunk = () => {
  return function (dispatch) {
    if (getCookie('accessToken')) {
      dispatch(getUser())
      dispatch(userAuthChek())
    };
  };
};

export type TGetUserActions =
  | IRefreshTokenRequest
  | IRefreshTokenSuccess
  | IRefreshTokenFailed
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserFailed
  | IUserAuthChek