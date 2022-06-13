import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burgerConstructor.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getInitialIngredients } from '../../services/actions/initialIngredients';





/* Конструктор бургера */
const BurgerConstructor = (/* { ingredientsId, onOrderButtonClick } */) => {
  const ingredients = useSelector(store => store.initialIngredients.ingredients)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitialIngredients())
  }, [dispatch])

  /* Филтр булок */
  const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
  /* Филтр начинок */
  const fillings = ingredients.filter((ingredient) => ingredient.type !=='bun');
  /* цена булок */
  const bunsPrice = buns.reduce((prevValue, ingredient) => {
    return prevValue + ingredient.price
  }, 0)
  /* Цена начинок */
  const fillingsPrice = fillings.reduce((prevValue, ingredient) => {
    return prevValue + ingredient.price
  }, 0)
  /* Цена всех ингредиентов */
  const IngredientsTotalPrice = bunsPrice + fillingsPrice
  






  return (
    <section className={`${styles.burgerConstructor} pl-4`}>
      {ingredients
        /* Фильтр ингредиентов по названию булки (верхняя часть бургера) */
        .filter((ingredient) => ingredient.name === 'Краторная булка N-200i')
        /* Отрисовка отфильрованной булки */
        .map((ingredient) => {
          return (
            <article key={ingredient._id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2 mt-25`}>
              {/* Вставка заготовки ингредиентов для конструктора из библиотеки UI */}
              <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </article>
          )
        })
      }
      <div className={styles.burgerConstructor__wrapper}>
        <ul className={`${styles.burgerConstructor__list} pr-4`}>
          {fillings
            .map((ingredient) => {
              return (
                <li key={ingredient._id}>
                  <article className={styles.burgerConstructor__cardElement}>
                    <p className={styles.burgerConstructor__dragIcon}>
                      <DragIcon type='primary'/>
                    </p>
                    {/* Вставка заготовки ингредиентов для конструктора из библиотеки UI */}
                    <ConstructorElement
                      key={ingredient._id}
                      isLocked={false}
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image}
                    />
                  </article>
                </li>
              )
            })
          }
        </ul>
      </div>
        {ingredients
          /* Фильтр ингредиентов по названию булки (нижняя часть бургера) */
          .filter((ingredient) => ingredient.name === 'Краторная булка N-200i')
          .map((ingredient) => {
            return (
              <article key={ingredient._id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2 mb-6`}>
                {/* Вставка заготовки ингредиентов для конструктора из библиотеки UI */}
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text="Краторная булка N-200i (низ)"
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </article>
            )
          })
        }
        {/* Итоговая стоимость бругера с кнопкой заказа */}
        <div className={`${styles.burgerConstructor__totalPriceContainer} mr-4`}>
          <div className={`${styles.burgerConstructor__totalPrice} pr-10`}>
            <p className={`${styles.burgerConstructor__price} $text text_type_digits-medium`}>{IngredientsTotalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" /* onClick={() => onOrderButtonClick(ingredientsId)} */>Оформить заказ</Button>
        </div>
    </section>
  );
};

/* Проверка типов данных, полученных на вход */
/* BurgerConstructor.propTypes = {
  ingredientsId: PropTypes.array,
  onOrderButtonClick: PropTypes.func.isRequired
}; */

export default BurgerConstructor;