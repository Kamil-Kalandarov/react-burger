import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
  USER_AUTH_CHECK
} from '../actions/getUser';

const userDataState = {
  user: null,
  getUserRequest: false,
  getUserSuccess: false,
  getUserFailed: false,
  refreshTokenRequest: false,
  refreshTokenSuccess: false,
  refreshTokenFailed: false,
  userAuthCheck: false
}

export const getUserReducer = (state = userDataState, action) => {
  switch(action.type) {
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
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true
      }
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenSuccess: 'success'
      }
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFailed: true
      }
    }
    case USER_AUTH_CHECK: {
      return {
        ...state,
        userAuthCheck: true
      }
    }
    default: {
      return state
    }
  }
}