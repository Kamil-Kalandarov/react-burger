import { apiConfig } from "../constans/apiConfig";

/* Проверка ответа от сервера*/
export const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    return Promise.reject(response.status)
  };
};

/* Запрос на сервер и монитрование полученного списка ингредиентов в компонент "BurgerIngredients" */
export const getIngredients = () => {
  fetch(`${apiConfig.baseUrl}/ingredients`, {
    headers: apiConfig.headers
  })
  .then((checkResponse))
}

