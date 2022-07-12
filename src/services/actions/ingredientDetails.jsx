export const OPEN_INGREDIENT_DETAILS_MODAL = 'OPEN_INGREDIENT_DETAILS_MODAL';
export const CLOSE_INGREDIENT_DETAILS_MODAL = 'OPEN_INGREDIENT_DETAILS_MODAL';

export const openIngredientDetailsModal = (currentIngredient) => {
  return {
    type: OPEN_INGREDIENT_DETAILS_MODAL,
    payload: currentIngredient
  }
}

export const closeIngredientDetailsModal = () => {
  return {
    type: CLOSE_INGREDIENT_DETAILS_MODAL
  }
}
