import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal from '../Modal/Modal';
/* import { data } from '../../utils/data.js'; */
import { apiConfig } from '../../constans/apiConfig';
import IngredientDetails from '../IngredientDetails/IngredientDetails';


const App = () => {
  const [ingredients, setIngredients] = useState([])
  const [isIngredientsDetailsOpened, setIsIngredientsDetailsOpened] = useState(true)
  
  const getIngredients = () => {
    fetch(`${apiConfig.baseUrl}/ingredients`, {
      headers: apiConfig.headers
    })
    .then(res => res.json())
    .then(res => setIngredients(res.data))
    .catch((err) => {
      console.log(err);
    })
  };
  
  useEffect(() => {
    getIngredients()
  }, []);

  const closeModals = () => {
    setIsIngredientsDetailsOpened(false)
  };

  const handleEscKeydown = (event) => {
    event.key === 'Escape' && closeModals()
  };

  return (
    <section className={styles.app}>
      <AppHeader />
      <main className={styles.app__flexComponents}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
      {isIngredientsDetailsOpened && (
        <Modal onCloseClick={closeModals} onEscKeydown={handleEscKeydown}>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
}

export default App;
