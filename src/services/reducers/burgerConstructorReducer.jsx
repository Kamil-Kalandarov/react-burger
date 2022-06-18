import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  RESET
} from '../actions/burgerConstructor';

const burgerConstructorInitialState = {
  bun: null,
  fillings: [],
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: 
      if (action.payload.type === 'bun') {
        return {
          ...state,
          bun: action.payload
        }
      } else {
        return {
          ...state,
          fillings: [ ...state.fillings, action.payload ]
        }
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        fillings: [
          ...state.fillings.slice(0, action.payload),
          ...state.fillings.slice(action.payload + 1)
        ],
      };
    case RESET: {
      return {
        burgerConstructorInitialState
      }
    }
    default: {
      return state
    }
  }
}