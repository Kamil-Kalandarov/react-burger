import { nanoid } from "nanoid";
import { TIngredients } from "../../utils/types/dataTypes";

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const CHANGE_FILLING_POSITION: 'CHANGE_FILLING_POSITION' = 'CHANGE_FILLING_POSITION';
export const RESET: 'RESET' = 'RESET';

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
    payload: TIngredients
};

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
    id: string
};

export interface IChangeFillingPosition {
  readonly type: typeof CHANGE_FILLING_POSITION;
    payload: {from: number, to: number}
};

export interface IResetConstructor {
  readonly type: typeof RESET;
};

export const addIngredient = (ingredient: TIngredients): IAddIngredient => {
  return {
    type: ADD_INGREDIENT,
    payload: {...ingredient, id: nanoid()} 
  }
};

export const deleteIngredient = (id: string): IDeleteIngredient => {
  return {
    type: DELETE_INGREDIENT,
    id
  }
};

export const changeFillingPosition = (dragIndex: number, hoverIndex: number): IChangeFillingPosition => {
  return {
    type: CHANGE_FILLING_POSITION,
    payload: {
      from: dragIndex,
      to: hoverIndex
    }
  }
};

export const resetConstructor = (): IResetConstructor => {
  return {
    type: RESET
  }
};

export type TBurgerConstructorActions = 
  | IAddIngredient
  | IDeleteIngredient
  | IChangeFillingPosition
  | IResetConstructor
