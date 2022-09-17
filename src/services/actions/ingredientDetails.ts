import { TIngredients } from "../../utils/types/dataTypes";

export const OPEN_INGREDIENT_DETAILS_MODAL: 'OPEN_INGREDIENT_DETAILS_MODAL' = 'OPEN_INGREDIENT_DETAILS_MODAL';
export const CLOSE_INGREDIENT_DETAILS_MODAL: 'CLOSE_INGREDIENT_DETAILS_MODAL' = 'CLOSE_INGREDIENT_DETAILS_MODAL';

export interface IOpenIngredientDetailsModal {
  readonly type: typeof OPEN_INGREDIENT_DETAILS_MODAL;
    payload: TIngredients
};

export interface ICloseIngredientDetailsModal {
  readonly type: typeof CLOSE_INGREDIENT_DETAILS_MODAL;
}

export const openIngredientDetailsModal = (currentIngredient: TIngredients): IOpenIngredientDetailsModal => {
  return {
    type: OPEN_INGREDIENT_DETAILS_MODAL,
    payload: currentIngredient
  }
};

export const closeIngredientDetailsModal = (): ICloseIngredientDetailsModal => {
  return {
    type: CLOSE_INGREDIENT_DETAILS_MODAL
  }
};

export type TIngredientDetailsModalActions =
  | IOpenIngredientDetailsModal
  | ICloseIngredientDetailsModal