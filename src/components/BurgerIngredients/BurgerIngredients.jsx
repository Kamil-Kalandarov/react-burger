import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { useState } from 'react';
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIngredientsContext } from '../../services/burgerIngredientsContext';

/* Выбор ингредиентов для бургера */
const BurgerIngredients = ({ onIngredientClick }) => {
   /* Обращение к кнтексту с ингредиентами */
  const { ingredients } = useContext(BurgerIngredientsContext)
  /* Переменная текущего состояния ТАБОВ */
  const [current, setCurrent] = useState('bun')

  const handleScroll = (id) => {
    const ingredientsId = document.getElementById(id)
    setCurrent(id)
    ingredientsId.scrollIntoView({behavior: "smooth"})
  }

  return (
    <section className={`${styles.burgerIngredients} pt-10 mr-10`}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <div className={styles.burgerIngredients__tabList}>
        <a className={styles.burgerIngredients__tab}><Tab value="bun" active={current === 'bun'} onClick={() => {handleScroll('bun')}}>Булки</Tab></a>
        <a className={styles.burgerIngredients__tab}><Tab value="sauce" active={current === 'sauce'} onClick={() => {handleScroll('sauce')}}>Соусы</Tab></a>
        <a className={styles.burgerIngredients__tab}><Tab value="main" active={current === 'main'} onClick={() => {handleScroll('main')}}>Начинки</Tab></a>
      </div>
   <div className={`${styles.burgerIngredients__cardsWrapper} mt-10`}>
        <h3 className='text text_type_main-medium' id='bun'>Булки</h3>
        <ul className={styles.burgerIngredients__cardList}>
          {ingredients
            /* Фильтр ингредиентов по типу */
            .filter((ingredient) => ingredient.type === 'bun') 
            /* Отрисовка отфильтрованных ингредиентов */
            .map((ingredient) => {
            return (
              <li className='pl-4 pr-2 pb-10' key={ingredient._id}>
                <article className={styles.burgerIngredients__cardElement} onClick={() => onIngredientClick(ingredient)}>
                  <div className='pl-4 pb-1 pr-4'>
                    <img src={ingredient.image}/>
                    <div className={styles.burgerIngredients__cardPrice}>
                      <p className='text text_type_digits-default pt-1'>{ingredient.price}</p>
                      <CurrencyIcon type='primary'/>
                    </div>
                  </div>
                  <h3 className={`${styles.burgerIngredients__cardName} text text_type_main-default`}>{ingredient.name}</h3>
                </article>
            </li>
            )
          }
          )}
        </ul>
        <h3 className='text text_type_main-medium pt-4' id='sauce'>Соусы</h3>
        <ul className={styles.burgerIngredients__cardList}>
          {ingredients
            /* Фильтр ингредиентов по типу */
            .filter((ingredient) => ingredient.type === 'sauce')
            /* Отрисовка отфильтрованных ингредиентов */
            .map((ingredient) => {
            return (
              <li className='pl-4 pr-2 pb-10' key={ingredient._id}>
                <article className={styles.burgerIngredients__cardElement} onClick={() => onIngredientClick(ingredient)}>
                  <div className='pl-4 pb-1 pr-4'>
                    <img src={ingredient.image}/>
                    <div className={styles.burgerIngredients__cardPrice}>
                      <p className='text text_type_digits-default pt-1'>{ingredient.price}</p>
                      <CurrencyIcon type='primary'/>
                    </div>
                  </div>
                  <h3 className={`${styles.burgerIngredients__cardName} text text_type_main-default`}>{ingredient.name}</h3>
                </article>
            </li>
            )
          }
          )}
        </ul>
        <h3 className='text text_type_main-medium pt-4' id='main'>Начинки</h3>
        <ul className={styles.burgerIngredients__cardList}>
          {ingredients
            /* Фильтр ингредиентов по типу */
            .filter((ingredient) => ingredient.type === 'main')
            /* Отрисовка отфильтрованных ингредиентов */
            .map((ingredient) => {
            return (
              <li className='pl-4 pr-2 pb-10' key={ingredient._id}>
                <article className={styles.burgerIngredients__cardElement} onClick={() => onIngredientClick(ingredient)}>
                  <div className='pl-4 pb-1 pr-4'>
                    <img src={ingredient.image}/>
                    <div className={styles.burgerIngredients__cardPrice}>
                      <p className='text text_type_digits-default pt-1'>{ingredient.price}</p>
                      <CurrencyIcon type='primary'/>
                    </div>
                  </div>
                  <h3 className={`${styles.burgerIngredients__cardName} text text_type_main-default`}>{ingredient.name}</h3>
                </article>
            </li>
            )
          }
          )}
        </ul>
      </div>
    </section>
  );
};

/* Проверка типов данных, полученных на вход */
BurgerIngredients.propTypes = {
  onIngredientClick: PropTypes.func.isRequired
};

export default BurgerIngredients;