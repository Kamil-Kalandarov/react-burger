import { checkResponse } from "../api";
import { apiConfig } from "../../constans/apiConfig";
import { TError, TIngredients } from '../../utils/types/dataTypes';
import { AppDispatch, AppThunk } from "../../utils/types";

export const GET_INGRDEIENTS_REQUEST: 'GET_INGRDEIENTS_REQUEST' = 'GET_INGRDEIENTS_REQUEST';
export const GET_INGRDEIENTS_SUCCESS: 'GET_INGRDEIENTS_SUCCESS' = 'GET_INGRDEIENTS_SUCCESS';
export const GET_INGRDEIENTS_FAILED: 'GET_INGRDEIENTS_FAILED' = 'GET_INGRDEIENTS_FAILED';
export const TAB_SWITCH: 'TAB_SWITCH' = 'TAB_SWITCH';

export interface ISetCurrentTab {
  readonly type: typeof TAB_SWITCH
    payload: string
}

export interface IGetIngredientsRequest {
  readonly type: typeof GET_INGRDEIENTS_REQUEST
}

export interface IAddIngredients {
  readonly type: typeof GET_INGRDEIENTS_SUCCESS
    payload: ReadonlyArray<TIngredients>
}

export interface IGetiIngrdientsFailed {
  readonly type: typeof GET_INGRDEIENTS_FAILED
    payload: string
}

export const setCurrentTab = (currentTab: string): ISetCurrentTab => {
  return {
    type: TAB_SWITCH,
    payload: currentTab
  }
}

export const getIngredientsRequest = (): IGetIngredientsRequest => {
  return {
    type: GET_INGRDEIENTS_REQUEST,
  }
}

export const addIngredients = (ingrdeients: ReadonlyArray<TIngredients>): IAddIngredients => {
  return {
    type: GET_INGRDEIENTS_SUCCESS,
    payload: ingrdeients
  }
} 

export const getiIngrdientsFailed = (err: TError): IGetiIngrdientsFailed => {
  return {
    type: GET_INGRDEIENTS_FAILED,
    payload: err.message
  }
}

export const getInitialIngredients: AppThunk = () => {
  return function(dispatch: AppDispatch)  {
    dispatch (getIngredientsRequest());
    fetch(`${apiConfig.baseUrl}/ingredients`, {
      headers: apiConfig.headers
    })
    .then(checkResponse)
    .then((response) => dispatch(addIngredients(response.data)))
    .catch((err) => dispatch(getiIngrdientsFailed(err)))
  }
};

export type TInitialIngredientsActions =
  | ISetCurrentTab
  | IGetIngredientsRequest
  | IAddIngredients
  | IGetiIngrdientsFailed

