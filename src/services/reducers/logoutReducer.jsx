import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED
} from '../actions/logout';

const logoutInitialState = {
  user: null,
  logoutRequest: false,
  logoutSuccess: false,
  logoutFailed: false
}

export const logoutReducer = (state = logoutInitialState, action) => {
  switch(action.type) {
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
    default: {
      return state
    }
  }
}