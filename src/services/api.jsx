/* Проверка ответа от сервера*/
export const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    return response.json().then((err) => Promise.reject(err)) 
  };
};

