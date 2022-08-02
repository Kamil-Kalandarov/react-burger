import { 
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED 
} from "../actions/user";

const userInitialState = {
  user: null,
  createUserRequest: false,
  createUserSuccess: false,
  createUserFailed: false
}

export const createUserReducer = (state = userInitialState, action) => {
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
        user: action.payload
      }
    }
    default: {
      return state
    }
  }
}