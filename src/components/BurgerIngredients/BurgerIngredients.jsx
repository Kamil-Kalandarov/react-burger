import React from 'react';
import PropTypes from "prop-types"; 
import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = ({ingredients, filteredIngredients}) => {
  const [current, setCurrent] = React.useState('buns')
  return (
    <section className={`${styles.burgerIngredients} pt-10 mr-10`}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <div style={{ display: 'flex' }}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.burgerIngredients__cardsWrapper}>
        <h3 className='text text_type_main-medium pt-4'>Булки</h3>
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
                  <h3 className={`${styles.burgerIngredients__cardName} text text_type_main-default`} 
                    onClick={() => filteredIngredients(ingredient)}>{ingredient.name}</h3>
                </article>
            </li>
            )
          }
          )};
        </ul>
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
                  <h3 className={`${styles.burgerIngredients__cardName} text text_type_main-default`} 
                    onClick={() => filteredIngredients(ingredient)}>{ingredient.name}</h3>
                </article>
            </li>
            )
          }
          )};
        </ul>
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
                  <h3 className={`${styles.burgerIngredients__cardName} text text_type_main-default`} 
                    onClick={() => filteredIngredients(ingredient)}>{ingredient.name}</h3>
                </article>
            </li>
            )
          }
          )};
        </ul>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func
};

export default BurgerIngredients;