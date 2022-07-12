import { checkResponse } from "../api";
import { apiConfig } from "../../constans/apiConfig";

export const GET_INGRDEIENTS_REQUEST = 'GET_INGRDEIENTS_REQUEST';
export const GET_INGRDEIENTS_SUCCESS = 'GET_INGRDEIENTS_SUCCESS';
export const GET_INGRDEIENTS_FAILED = 'GET_INGRDEIENTS_FAILED';
export const TAB_SWITCH = 'TAB_SWITCH';

export const setCurrentTab = (currentTab) => {
  return {
    type: TAB_SWITCH,
    payload: currentTab
  }
}

export const getIngredientsRequest = () => {
  return {
    type: GET_INGRDEIENTS_REQUEST,
    payload: true
  }
}

export const addIngredients = (ingrdeients) => {
  return {
    type: GET_INGRDEIENTS_SUCCESS,
    payload: ingrdeients
  }
} 

export const getiIngrdientsFailed = () => {
  return {
    type: GET_INGRDEIENTS_FAILED,
    payload: false
  }
}

export function getInitialIngredients() {
  return function(dispatch)  {
    dispatch (getIngredientsRequest());
    fetch(`${apiConfig.baseUrl}/ingredients`, {
      headers: apiConfig.headers
    })
    .then(checkResponse)
    .then((response) => dispatch(addIngredients(response.data)))
    .catch(dispatch(getiIngrdientsFailed()))
  }
}

