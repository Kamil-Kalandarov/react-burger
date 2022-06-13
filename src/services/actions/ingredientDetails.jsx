export const OPEN_INGREDIENT_DETAILS_MODAL = 'OPEN_INGREDIENT_DETAILS_MODAL';
export const CLOSE_INGREDIENT_DETAILS_MODAL = 'OPEN_INGREDIENT_DETAILS_MODAL';

export const openIngredientDetailsModal = (currentIngredients) => {
  return {
    type: OPEN_INGREDIENT_DETAILS_MODAL,
    payload: currentIngredients
  }
}

export const closeIngredientDetailsModal = () => {
  return {
    type: CLOSE_INGREDIENT_DETAILS_MODAL
  }
}
