import { OPEN_INGREDIENT_DETAILS_MODAL, CLOSE_INGREDIENT_DETAILS_MODAL } from "../actions/ingredientDetails";

const ingredientDetailInitialState = {
  ingredient: null
}

export const ingredientDetailsReducer = (state = ingredientDetailInitialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS_MODAL: {
      return {
        ...state,
        ingredient: action.payload
      }
    }
    case CLOSE_INGREDIENT_DETAILS_MODAL: {
      return ingredientDetailInitialState;
    }
    default: {
      return state;
    }
  }
}