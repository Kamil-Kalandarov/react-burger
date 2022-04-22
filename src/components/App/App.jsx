import React from 'react';
import styles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { data } from '../../utils/data.js';

const App = () => {
  return (
    <section className={styles.app}>
      <AppHeader />
      <main className={styles.app__flexComponents}>
        <BurgerIngredients ingredients={data}/>
        <BurgerConstructor ingredients={data}/>
      </main>
    </section>
  );
}

export default App;
