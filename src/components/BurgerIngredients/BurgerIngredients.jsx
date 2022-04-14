import React from 'react';
import PropTypes from "prop-types"; 
import { useState } from 'react';
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = ({ingredients}) => {
  /* Переменная текущего состояния ТАБОВ */
  const [current, setCurrent] = useState('bun')
  return (
    <section className={`${styles.burgerIngredients} pt-10 mr-10`}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <a className={styles.burgerIngredients__tab} href='#bun'><Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab></a>
        <a className={styles.burgerIngredients__tab} href='#sauce'><Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>Соусы</Tab></a>
        <a className={styles.burgerIngredients__tab} href='#main'><Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab></a>
      </div>
      <div className={`${styles.burgerIngredients__cardsWrapper} mt-10`}>
        <a name='bun'></a>
        <h3 className='text text_type_main-medium'>Булки</h3>
        <ul className={styles.burgerIngredients__cardList}>
          {ingredients
            .filter((ingredient) => ingredient.type === 'bun')
            .map((ingredient) => {
            return (
              <li className='pl-4 pr-2 pb-10' key={ingredient._id}>
                <article className={styles.burgerIngredients__cardElement}>
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
        <a name='sauce'></a>
        <h3 className='text text_type_main-medium pt-4'>Соусы</h3>
        <ul className={styles.burgerIngredients__cardList}>
          {ingredients
            .filter((ingredient) => ingredient.type === 'sauce')
            .map((ingredient) => {
            return (
              <li className='pl-4 pr-2 pb-10' key={ingredient._id}>
                <article className={styles.burgerIngredients__cardElement}>
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
        <a name='main'></a>
        <h3 className='text text_type_main-medium pt-4'>Начинки</h3>
        <ul className={styles.burgerIngredients__cardList}>
          {ingredients
            .filter((ingredient) => ingredient.type === 'main')
            .map((ingredient) => {
            return (
              <li className='pl-4 pr-2 pb-10' key={ingredient._id}>
                <article className={styles.burgerIngredients__cardElement}>
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
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func
};

export default BurgerIngredients;