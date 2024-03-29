import { combineReducers } from "redux";
import { initialIngredientsReducer } from "./initialIngredientsReducer";
import { ingredientDetailsReducer } from "./ingredinetDetailsReducer";
import { orderDetailsRducer } from "./orderDetailsReducer";
import { burgerConstructorReducer } from "./burgerConstructorReducer";
import { userReducer } from "./userReducer";
import { wsReducer } from "./wsReducer";


export const rootReducer = combineReducers({
  initialIngredients: initialIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsRducer,
  constructorIngredients: burgerConstructorReducer,
  user: userReducer,
  ws: wsReducer
})
