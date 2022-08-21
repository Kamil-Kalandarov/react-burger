import { 
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED 
} from "../actions/register";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions/login';

import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  USER_AUTH_CHECK
} from '../actions/getUser';

import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED
} from '../actions/updateUserData';

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED
} from '../actions/logout';

import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED
} from '../actions/forgotPassword';

const userInitialState = {
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
  forgotPasswordFailed: false
}

export const userReducer = (state = userInitialState, action) => {
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

    default: {
      return state
    }
  }
}