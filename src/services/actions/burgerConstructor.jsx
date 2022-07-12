import { nanoid } from "nanoid";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const CHANGE_FILLING_POSITION = 'CHANGE_FILLING_POSITION';
export const RESET = 'RESET'

export const addIngredient = (ingredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient, id: nanoid() 
  }
}

export const deleteIngredient = (id) => {
  return {
    type: DELETE_INGREDIENT,
    id
  }
}

export const changeFillingPosition = (dragIndex, hoverIndex) => {
  return {
    type: CHANGE_FILLING_POSITION,
    payload: {
      from: dragIndex,
      to: hoverIndex
    }
  }
}

export const resetConstructor = () => {
  return {
    type: RESET
  }
}

