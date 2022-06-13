import { OPEN_INGREDIENT_DETAILS_MODAL, CLOSE_INGREDIENT_DETAILS_MODAL } from "../actions/ingredientDetails";

const ingredientDetailInitialState = {
  ingredient: {},
  isOpened: false
}

export const ingredientDetailsReducer = (state = ingredientDetailInitialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_DETAILS_MODAL: {
      return {
        ...state,
        ingredient: action.payload,
        isOpened: true
      }
    }
    case CLOSE_INGREDIENT_DETAILS_MODAL: {
      return {
        ...state,
        ingredient: {},
        isOpened: false
      }
    }
    default: {
      return state;
    }
  }
}