import React, { FC } from "react";
import styles from './mainPage.module.css';
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const MainPage: FC = () => {
  return (
    <section className={styles.mainPage}>
      <main className={styles.mainPage__gridComponent}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </main>
    </section>
  ) 
}