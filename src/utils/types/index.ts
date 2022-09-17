import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../../services/store';
import { TGetUserActions } from '../../services/actions/getUser';
import { TloginActions } from '../../services/actions/login';
import { TLogoutActions } from '../../services/actions/logout';
import { TRegistrationActions } from '../../services/actions/register';

type TApplicationActions = TGetUserActions | TloginActions | TLogoutActions | TRegistrationActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;

/* export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>; */