import { combineReducers } from "redux";
import { initialIngredientsReducer } from "./initialIngredientsReducer";
import { ingredientDetailsReducer } from "./ingredinetDetailsReducer";
import { orderDetailsRducer } from "./orderDetailsReducer";
import { burgerConstructorReducer } from "./burgerConstructorReducer";
import { createUserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  initialIngredients: initialIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsRducer,
  constructorIngredients: burgerConstructorReducer,
  user: createUserReducer
})
