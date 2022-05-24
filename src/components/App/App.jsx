import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import { apiConfig } from '../../constans/apiConfig';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';
import { BurgerIngredientsContext } from '../../services/burgerIngredientsContext';

const App = () => {
  /* Стейт ингредиентов для компонента 'BurgerIngredients' */
  const [ingredients, setIngredients] = useState([]) 
  /* Стейт для изменения состояния (открыто/закрыто) для модального окна с ингредиентом */
  const [isIngredientsDetailsOpened, setIsIngredientsDetailsOpened] = useState(false) 
  /* Стейт для изменения состояния (открыто/закрыто) для модального окна с деталями сделанного заказа */
  const [isOrderDetailsOpened, setOrderDetailsOpened] = useState(false) 
  /* Стейт для передачи в модальное окно выбранного ингредиента */
  const [currentIngredient, setCurrentIngredient] = useState({})
  /* Стейт текущего номера заказа */
  const [currentOrderNumber, setCurrentOrderNumber] = useState({
    name: "",
    order: {
      number: ""
    },
    success: true
  })
  
  /* Монитрование пустого массива для ингредиентов, куда в дальнейшем будут вмонитрованы ингредиенты функцией "getIngredients" */
  useEffect(() => {
    getIngredients()
  }, []);

  /* Проверка ответа от сервера*/
  const checkResponse = (response) => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject(response.status)
    };
  };

  /* Запрос на сервер и монитрование полученного списка ингредиентов в компонент "BurgerIngredients" */
  const getIngredients = () => {
    fetch(`${apiConfig.baseUrl}/ingredients`, {
      headers: apiConfig.headers
    })
    .then(checkResponse)
    .then(response => setIngredients(response.data))
    .catch((err) => {
      console.log(err);
    })
  }

 /* Массив ID ингредиентов */
  const ingredientsId = ingredients.map(ingredient => ingredient._id)
  
  /* Отправка на сервер ID ингредиентов и получение номера заказа */
  const postOrderNumber = (ingredientsId) => {
    fetch(`${apiConfig.baseUrl}/orders`, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        "ingredients": ingredientsId
      })
    })
    .then(checkResponse)
    .then((currentOrderNumber) => {
      setCurrentOrderNumber(currentOrderNumber)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  /* Хендлер клика по ингредиенту, открывающий модалку и передающий в нее значения кликнутого ингредиента, 
  "ingredient", передан через props в компонент "BurgerIngredients" */
  const handleIngredientClick = (ingredient) => {
    setCurrentIngredient(ingredient)
    setIsIngredientsDetailsOpened(true)
  };

  /* Закрытие модального окна с ингредиентом */
  const closeIngredientModal = () => {
    setIsIngredientsDetailsOpened(false)
  };

  /* Закрытие модального окна с ингредиентом клавишей "Escape */
  const handleEscKeydownIngredientModal = (event) => {
    event.key === 'Escape' && closeIngredientModal()
  };

  /* Хендлер октрытия модального окна с деталями заказа */
  const handleOrderClick = (ingredientsId) => {
    postOrderNumber(ingredientsId)
    setOrderDetailsOpened(true)
  }

  /* Закрытие модального окна с деталями заказа */
  const closeOrderModal = () => {
    setOrderDetailsOpened(false)
  };

  /* Закрытие модального окна с деталями заказа клавишей "Escape */
  const handleEscKeydownOrderModal = (event) => {
    event.key === 'Escape' && closeOrderModal()
  };



  /* Рендер всех компонентов */
  return (
    <section className={styles.app}>
      <AppHeader />
      <main className={styles.app__flexComponents}>
        <BurgerIngredientsContext.Provider value={{ingredients, setIngredients}}>
          <BurgerIngredients onIngredientClick={handleIngredientClick} />
          <BurgerConstructor ingredientsId={ingredientsId} onOrderButtonClick={handleOrderClick}/>
        </BurgerIngredientsContext.Provider>
      </main>
      {isIngredientsDetailsOpened && (
        <Modal onCloseClick={closeIngredientModal} onEsckeyDown={handleEscKeydownIngredientModal}>
          <IngredientDetails ingredient={currentIngredient}/>
        </Modal>
      )}
      {isOrderDetailsOpened && (
        <Modal onCloseClick={closeOrderModal} onEsckeyDown={handleEscKeydownOrderModal}>
          <OrderDetails currentOrderNumber={currentOrderNumber} />
        </Modal>
      )}
    </section>
  );
}

export default App;
