import React, { useMemo } from "react";
import styles from './orderCard.module.css';
import { Link, useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientOrderIcon from "../../IngredientOrderIcon/IngredientOrderIcon";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/formatDate";

const OrderCard = ({ order }) => {

  const initialIngredients = useSelector(store => store.initialIngredients.ingredients)
  const location = useLocation();

  const getIngredientsId = (() => {
    return (
      Array.from(order.ingredients.map((ingredientId) => {
        return initialIngredients.find((ingredient) => {
          return ingredientId === ingredient._id
        })
      }))
    )
  }, [order.ingredients, initialIngredients]);


  return (
    <li className={styles.orderCard}>
      <Link 
          className={styles.orderCard__link} 
          to={{
            pathname: `/feed/${order._id}`,
            /* state: { background: location } */
          }}>
        <article className={`${styles.orderCard__card} pt-6 pb-6 pl-6 pr-6`}>
          <div className={styles.orderCard__header}>
            <p className={`${styles.orderCard__number} text text_type_digits-default`}>#{order.number}</p>
            <p className={`${styles.orderCard__date} text text_type_main-default text_color_inactive`}>
              {formatDate(order.createdAt)}
            </p>
          </div>
          <h3 className={`${styles.orderCard__name} text ext_type_main-medium`}>{order.name}</h3>
          <div className={styles.orderCard__orderedBurgerInfo}>
            <ul className={styles.orderCard__ingredientsList}>
              {getIngredientsId[0].map((ingredient, index) => {
                return (
                  <li className={styles.orderCard__ingredient} key={index}>
                    <IngredientOrderIcon ingredientImg={ingredient.image_mobile}/>
                  </li>
                )
              })}
            </ul>
            <div className={styles.orderCard__price}>
              <p className='text text_type_digits-default pt-1'>
                { getIngredientsId.reduce((prev, next) => {
                  return (
                    prev + next.price * next.price, 0
                  )}
                )}
              </p>
              <CurrencyIcon type='primary'/>
            </div>
          </div>
        </article>
       </Link>
      </li>
  )
}

export default OrderCard;