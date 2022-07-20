import React from 'react';
import styles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

const App = () => {
  /* Рендер всех компонентов */
  return (
    <section className={styles.app}>
      <AppHeader />
      <main className={styles.app__flexComponents}>
        <DndProvider backend={HTML5Backend}>
          <DndProvider backend={TouchBackend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </DndProvider>
      </main>
    </section>
  );
}

export default App;
