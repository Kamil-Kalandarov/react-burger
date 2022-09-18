import { OPEN_INGREDIENT_DETAILS_MODAL, CLOSE_INGREDIENT_DETAILS_MODAL } from "../actions/ingredientDetails";
import { TIngredientDetailsModalActions } from "../actions/ingredientDetails";
import { TIngredients } from './../../utils/types/dataTypes';

type TIngredientDetailInitialState = {
  ingredient: TIngredients | null
}

const ingredientDetailInitialState = {
  ingredient: null
}

export const ingredientDetailsReducer = (state = ingredientDetailInitialState, action: TIngredientDetailsModalActions): TIngredientDetailInitialState => {
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