import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  CHANGE_FILLING_POSITION,
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
          fillings: [ ...state.fillings, {...action.payload, id: action.id }]
        }
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        fillings: [...state.fillings].filter((filling) => filling.id !== action.id),
        
      };
    case CHANGE_FILLING_POSITION:
      const ingredients = [...state.fillings];
      ingredients.splice(
        action.payload.to,
        0,
        ingredients.splice(action.payload.from, 1)[0]
      );
      return {
        ...state,
        fillings: ingredients
      }
    case RESET: {
      return {
        bun: null,
        fillings: []
      }
    }
    default: {
      return state
    }
  }
}