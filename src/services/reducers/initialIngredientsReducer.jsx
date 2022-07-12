import {
  GET_INGRDEIENTS_REQUEST,
  GET_INGRDEIENTS_SUCCESS,
  GET_INGRDEIENTS_FAILED,
  TAB_SWITCH
} from '../actions/initialIngredients';

/* Начальный стейт ингредиентов */
const initialIngredients = {
  ingredients: [],
  currentTab: 'buns',
  ingredientsRequest: false,
  ingredientsFailed: false,
  isLoading: false,
  error: null
}
/* Reducer начальных ингредиентов */
export const initialIngredientsReducer = (state = initialIngredients, action) => {
  switch (action.type) {
    /* Переключени табов */
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: action.payload
      }
    }
    case GET_INGRDEIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        isLoading: true
      }
    }
    case GET_INGRDEIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.payload,
        ingredientsRequest: false,
        isLoading: false,
      }
    }
    case GET_INGRDEIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFailed: true,
        error: 'Не удалось получить ингредиенты!'
      }
    }
    default: {
      return state;
    }
  }
}