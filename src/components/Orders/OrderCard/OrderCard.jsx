import React from "react";
import styles from './orderCard.module.css';
import { Link, useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientOrderIcon from "../../IngredientOrderIcon/IngredientOrderIcon";

const OrderCard = () => {

  const location = useLocation()

  return (
    <li className={styles.orderCard}>
      <Link 
          className={styles.orderCard__link} 
          to={{
            pathname: `/order/id`,
            state: { background: location }
          }}>
        <article className={`${styles.orderCard__card} pt-6 pb-6 pl-6 pr-6`}>
          <div className={styles.orderCard__header}>
            <p className={`${styles.orderCard__number} text text_type_digits-default`}>#034535</p>
            <p className={`${styles.orderCard__date} text text_type_main-default text_color_inactive`}>
              Сегодня, 16:20 i-GMT+3
            </p>
          </div>
          <h3 className={`${styles.orderCard__name} text ext_type_main-medium`}>Death Star Starship Main бургер</h3>
          <div className={styles.orderCard__orderedBurgerInfo}>
            <ul className={styles.orderCard__ingredientsList}>
              <li className={styles.orderCard__ingredient}>
                <IngredientOrderIcon />
              </li>
              <li className={styles.orderCard__ingredient}>
                <IngredientOrderIcon />
              </li>
              <li className={styles.orderCard__ingredient}>
                <IngredientOrderIcon />
              </li>
              <li className={styles.orderCard__ingredient}>
                <IngredientOrderIcon />
              </li>
              <li className={styles.orderCard__ingredient}>
                <IngredientOrderIcon />
              </li>
            </ul>
            <div className={styles.orderCard__price}>
              <p className='text text_type_digits-default pt-1'>480</p>
              <CurrencyIcon type='primary'/>
            </div>
          </div>
        </article>
       </Link>
      </li>
  )
}

export default OrderCard;