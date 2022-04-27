/* export const checkResponse = () => {
  if (response.ok) {
    return response.json()
  }
  return Promise.reject(`Ошибка: ${response.status}`);
} 

export const getIngredients = () => {
  fetch('https://norma.nomoreparties.space/api/ingredients', {
    headers: {
      'Content-Type': 'aplication.json'
    }
  })
  .then(checkResponse())
  .then(console.log(response))
}; */