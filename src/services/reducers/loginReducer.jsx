import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions/login';

const loginInitialState = {
  user: null,
  loginRequest: false,
  loginSuccess: false,
  loginFailed: false
}

export const LoginReducer = (state = loginInitialState, action) => {
  switch(action.type) {
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
        user: action.payload
      }
    }
    default: {
      return state
    }
  }
}