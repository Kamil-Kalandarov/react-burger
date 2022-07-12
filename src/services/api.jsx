/* Проверка ответа от сервера*/
export const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    return Promise.reject(response.status)
  };
};

