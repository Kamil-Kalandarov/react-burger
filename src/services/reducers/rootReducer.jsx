import { combineReducers } from "redux";
import { initialIngredientsReducer } from "./initialIngredientsReducer";
import { ingredientDetailsReducer } from "./ingredinetDetailsReducer";
import { orderDetailsRducer } from "./orderDetailsReducer";
import { burgerConstructorReducer } from "./burgerConstructorReducer";
import { createUserReducer } from "./registerReducer";
import { LoginReducer } from "./loginReducer";
import { getUserReducer } from "./getUserReducer";
import { updateUserReducer } from "./updateUserDataReducer";

export const rootReducer = combineReducers({
  initialIngredients: initialIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsRducer,
  constructorIngredients: burgerConstructorReducer,
  register: createUserReducer,
  login: LoginReducer,
  getUser: getUserReducer,
  updateUserData: updateUserReducer
})
