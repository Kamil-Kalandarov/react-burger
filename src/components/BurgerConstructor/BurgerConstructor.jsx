import React, { useContext, useEffect, useMemo } from 'react';
import PropTypes from "prop-types"; 
import PropTypesIngredientsData from '../../utils/propTypes';
import styles from './burgerConstructor.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { BurgerIngredientsContext } from '../../services/burgerIngredientsContext';





/* Конструктор бургера */
const BurgerConstructor = ({ ingredientsId, onOrderButtonClick }) => {

  /* Обращение к кнтексту с ингредиентами */
  const { ingredients } = useContext(BurgerIngredientsContext)

  const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');

  const fillings = ingredients.filter((ingredient) => ingredient.type !=='bun');

  const bunsPrice = buns.reduce((prevValue, ingredient) => {
    return prevValue + ingredient.price
  }, 0)

  const fillingsPrice = fillings.reduce((prevValue, ingredient) => {
    return prevValue + ingredient.price
  }, 0)

  const IngredientsTotalPrice = bunsPrice + fillingsPrice
  

  console.log(IngredientsTotalPrice)




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
          {ingredients
            .filter((ingredient) => ingredient.type !== 'bun')
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
          <Button type="primary" size="large" onClick={() => onOrderButtonClick(ingredientsId)}>Оформить заказ</Button>
        </div>
    </section>
  );
};

/* Проверка типов данных, полученных на вход */
BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypesIngredientsData),
  ingredientsId: PropTypes.array,
  onOrderButtonClick: PropTypes.func.isRequired
};

export default BurgerConstructor;