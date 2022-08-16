import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED
} from '../actions/updateUserData';

const userData = {
  user: null,
  updateUserRequest: false,
  updateUserSuccess: false,
  updateUserFailed: false,
}

export const updateUserReducer = (state = userData, action) => {
  switch(action.type) {
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
    default: {
      return state
    }
  }
}