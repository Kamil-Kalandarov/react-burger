import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
import { apiConfig } from '../../constans/apiConfig';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';

const App = () => {
  const [ingredients, setIngredients] = useState([])
  const [isIngredientsDetailsOpened, setIsIngredientsDetailsOpened] = useState(false)
  const [isOrderDetailsOpened, setOrderDetailsOpened] = useState(false)
  const [currentIngredient, setCurrentIngredient] = useState({})
  
  console.log(ingredients)

  const getIngredients = () => {
    fetch(`${apiConfig.baseUrl}/ingredients`, {
      headers: apiConfig.headers
    })
    .then(res => res.json())
    .then(res => setIngredients(res.data))
    .catch((err) => {
      console.log(err);
    })
  }
  
  useEffect(() => {
    getIngredients()
  }, []);

  const handleIngredientClick = (ingredient) => {
    setCurrentIngredient(ingredient)
    setIsIngredientsDetailsOpened(true)
  };

  const closeIngredientModal = () => {
    setIsIngredientsDetailsOpened(false)
  };

  const handleEscKeydownIngredientModal = (event) => {
    event.key === 'Escape' && closeIngredientModal()
  };

  const handleOrderClick = () => {
    setOrderDetailsOpened(true)
  }

  const closeOrderModal = () => {
    setOrderDetailsOpened(false)
  };

  const handleEscKeydownOrderModal = (event) => {
    event.key === 'Escape' && closeOrderModal()
  };


  return (
    <section className={styles.app}>
      <AppHeader />
      <main className={styles.app__flexComponents}>
        <BurgerIngredients ingredients={ingredients} onIngredientClick={handleIngredientClick} />
        <BurgerConstructor ingredients={ingredients} onOrderButtonClick={handleOrderClick}/>
      </main>
      {isIngredientsDetailsOpened && (
        <Modal onCloseClick={closeIngredientModal} onEsckeyDown={handleEscKeydownIngredientModal}>
          <IngredientDetails ingredient={currentIngredient}/>
        </Modal>
      )}
      {isOrderDetailsOpened && (
        <Modal onCloseClick={closeOrderModal} onEsckeyDown={handleEscKeydownOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default App;
