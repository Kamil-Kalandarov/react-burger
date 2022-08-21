import React from "react";
import styles from './orderCard.module.css';
import { Link } from "react-router-dom";

const OrderCard = () => {

  return (
    <li className='pt-6 pb-6 pl-6 pr-6'>
      <article className={styles.orderCard}>
        <div className={styles.orderCard__header}>
          <p className={styles.orderCard__number}></p>
          <p className={`${styles.orderCard__date} text text_type_main-default text_color_inactive`}>
            Сегодня, 16:20 i-GMT+3
          </p>
        </div>
        <h3 className={`${styles.orderCard__name} text text_type_main-default text_color_inactive`}>
            Death Star Starship Main бургер
        </h3>
        <div className={styles.orderCard__orderedBurgerInfo}>
          <ul className={styles.orderCard__ingredientsList}>
            <li>

            </li>
          </ul>
        </div>
      </article>
      </li>
  )
}

export default OrderCard;