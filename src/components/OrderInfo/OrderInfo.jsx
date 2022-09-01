import React from "react";
import styles from './orderInfo.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderInfoIngredient from "./OrderInfoIngredient/OrderInfoIngredient";

const OrderInfo = () => {
  return (
    <div className={styles.orderInfo}>
      <p className={`${styles.orderInfo__number} text text_type_digits-default`}>#034533</p>
      <h3 className='text text_type_main-medium mt-10 mb-3'>Black Hole Singularity острый бургер</h3>
      <span className={`${styles.orderInfo__status} text text_type_main-default mb-15`}>Выполнен</span>
      <h3 className='text text_type_main-medium mb-6'>Состав:</h3>
      <ul className={`${styles.orderInfo__ingredientsList} pr-6`}>
        <OrderInfoIngredient />
        <OrderInfoIngredient />
        <OrderInfoIngredient />
        <OrderInfoIngredient />
        <OrderInfoIngredient />
      </ul>
      <div className={`${styles.orderInfo__footer} mt-10`}>
        <p className='text text_type_main-default text_color_inactive'>Вчера, 13:50 i-GMT+3</p>
        <div className={styles.orderInfo__totalPrice}>
          <span className='text text_type_digits-default'>510</span>
          <CurrencyIcon type='primary'/>
        </div>
      </div>
    </div>
  )
}

export default OrderInfo;