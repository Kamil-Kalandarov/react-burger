import React, { useMemo } from "react";
import styles from './orderInfo.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderInfoIngredient from "./OrderInfoIngredient/OrderInfoIngredient";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";

const OrderInfo = () => {

  const orderId = useParams();

  const orders = useSelector(store => store.ws.orders)
  const order = orders.find((order) => order._id  === orderId)
  console.log(order);
  const initialIngredients = useSelector(store => store.initialIngredients.ingredients)

  const getIngredientsId = useMemo(() => {
    return  order?.ingredients.map((ingredientId) => {
        return initialIngredients?.find((ingredient) => {
          return ingredientId === ingredient._id
        })
      }, [order?.ingredients, initialIngredients])
  });

  return (
    <div className={styles.orderInfo}>
      <p className={`${styles.orderInfo__number} text text_type_digits-default`}>#034533</p>
      <h3 className='text text_type_main-medium mt-10 mb-3'>Black Hole Singularity острый бургер</h3>
      <span className={`${styles.orderInfo__status} text text_type_main-default mb-15`}>Выполнен</span>
      <h3 className='text text_type_main-medium mb-6'>Состав:</h3>
      <ul className={`${styles.orderInfo__ingredientsList} pr-6`}>
        {[...new Set(getIngredientsId)].map((ingredient, index) => {
          return (
            <OrderInfoIngredient ingredient={ingredient} key={index}/>
          )
        })}
      </ul>
      <div className={`${styles.orderInfo__footer} mt-10`}>
        <p className='text text_type_main-default text_color_inactive'>DKCOEKC</p>
        <div className={styles.orderInfo__totalPrice}>
          <span className='text text_type_digits-default'>510</span>
          <CurrencyIcon type='primary'/>
        </div>
      </div>
    </div>
  )
}

export default OrderInfo;