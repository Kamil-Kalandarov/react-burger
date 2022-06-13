import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burgerIngredients.module.css';
import Tabs from '../Tabs/Tabs';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { getInitialIngredients } from '../../services/actions/initialIngredients';
import { openIngredientDetailsModal } from '../../services/actions/ingredientDetails';
import { store } from '../../services/store';

/* Выбор ингредиентов для бургера */
const BurgerIngredients = () => {
   /* Обращение к store */
   const ingredients = useSelector(store => store.initialIngredients.ingredients)
   const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitialIngredients())
  }, [dispatch])


  const onIngredientClick = (ingredient) => {
    dispatch(openIngredientDetailsModal(ingredient))
  }

  return (
    <section className={`${styles.burgerIngredients} pt-10 mr-10`}>
      <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
      <Tabs />
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
/* BurgerIngredients.propTypes = {
  onIngredientClick: PropTypes.func.isRequired
}; */

export default BurgerIngredients;