import { 
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  TRegistrationActions 
} from "../actions/register";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  TloginActions
} from '../actions/login';

import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  USER_AUTH_CHECK,
  TGetUserActions
} from '../actions/getUser';

import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  TUpdateUserDaraActions
} from '../actions/updateUserData';

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  TLogoutActions
} from '../actions/logout';

import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  TForgotPasswordActions
} from '../actions/forgotPassword';

import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  TResetPasswordActions
} from '../actions/resetPassword';

import { TUser } from '../../utils/types/dataTypes';;

type TUserActions = 
  | TRegistrationActions
  | TloginActions
  | TLogoutActions
  | TGetUserActions
  | TUpdateUserDaraActions
  | TForgotPasswordActions
  | TResetPasswordActions

type TUserInitialState = {
  user: TUser | null

  createUserRequest: boolean,
  createUserSuccess: boolean | string,
  createUserFailed: boolean,

  loginRequest: boolean,
  loginSuccess: boolean | string,
  loginFailed: boolean,

  getUserRequest: boolean,
  getUserSuccess: boolean,
  getUserFailed: boolean,

  userAuthCheck: boolean,

  updateUserRequest: boolean,
  updateUserSuccess: boolean,
  updateUserFailed: boolean,

  logoutRequest: boolean,
  logoutSuccess: boolean | string,
  logoutFailed: boolean,

  forgotPasswordRequest: boolean,
  forgotPasswordSuccess: boolean,
  forgotPasswordFailed: boolean,

  resetPasswordRequest: boolean,
  resetPasswordSuccess: boolean,
  resetPasswordFailed: boolean
}

const userInitialState: TUserInitialState = {
  user: null,
  
  createUserRequest: false,
  createUserSuccess: false,
  createUserFailed: false,

  loginRequest: false,
  loginSuccess: false,
  loginFailed: false,

  getUserRequest: false,
  getUserSuccess: false,
  getUserFailed: false,

  userAuthCheck: false,

  updateUserRequest: false,
  updateUserSuccess: false,
  updateUserFailed: false,

  logoutRequest: false,
  logoutSuccess: false,
  logoutFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordSuccess: false,
  forgotPasswordFailed: false,

  resetPasswordRequest: false,
  resetPasswordSuccess: false,
  resetPasswordFailed: false
}

export const userReducer = (state = userInitialState, action: TUserActions): TUserInitialState => {
  switch(action.type) {
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        createUserRequest: true,
      }
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        createUserRequest: false,
        createUserSuccess: 'success',
        user: action.payload
      }
    }
    case CREATE_USER_FAILED: {
      return {
        ...state,
        createUserRequest: false,
        createUserFailed: true,
      }
    }

    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        loginSuccess: 'success',
        user: action.payload
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      }
    }

    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        getUserSuccess: true,
        user: action.payload
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true
      }
    }
    case USER_AUTH_CHECK: {
      return {
        ...state,
        userAuthCheck: true
      }
    }

    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true
      }
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserSuccess: true,
        user: action.payload
      }
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: true
      }
    }

    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: 'success',
        user: null
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true,
      }
    }

    case FORGOT_PASSWORD_REQUEST: { 
      return {
        ...state,
        forgotPasswordRequest: true,
      }
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordSuccess: true,
      }
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
      }
    }

    case RESET_PASSWORD_REQUEST: { 
      return {
        ...state,
        resetPasswordRequest: true,
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordSuccess: true,
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      }
    }
    default: {
      return state
    }
  }
}