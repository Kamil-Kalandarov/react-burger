import { nanoid } from "nanoid";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const RESET = 'RESET'

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient, id: nanoid()
  }
}

export const resetConstructor = () => {
  return {
    type: RESET
  }
}

/* deletefillingFromConstructor = (ingredientId) => {
  return {
    type: DELETE_FILLING,
    ingredientId
  }
} */

