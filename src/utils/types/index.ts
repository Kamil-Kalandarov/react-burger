import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../../services/store';
import { TGetUserActions } from '../../services/actions/getUser';
import { TloginActions } from '../../services/actions/login';
import { TLogoutActions } from '../../services/actions/logout';
import { TRegistrationActions } from '../../services/actions/register';
import { TUpdateUserDaraActions } from './../../services/actions/updateUserData';
import { TForgotPasswordActions } from './../../services/actions/forgotPassword';
import { TWsActions } from './../../services/actions/ws';
import { TOrderDetailsActions } from './../../services/actions/orderDetails';
import { TIngredientDetailsModalActions } from './../../services/actions/ingredientDetails';
import { TBurgerConstructorActions } from './../../services/actions/burgerConstructor';
import { TInitialIngredientsActions } from './../../services/actions/initialIngredients';

type TApplicationActions = 
  | TGetUserActions
  | TloginActions 
  | TLogoutActions 
  | TRegistrationActions 
  | TUpdateUserDaraActions
  | TForgotPasswordActions
  | TWsActions
  | TOrderDetailsActions
  | TIngredientDetailsModalActions
  | TBurgerConstructorActions
  | TInitialIngredientsActions


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;