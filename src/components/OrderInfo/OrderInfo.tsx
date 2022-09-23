import React, { useMemo } from "react";
import styles from './orderInfo.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderInfoIngredient from "./OrderInfoIngredient/OrderInfoIngredient";
import { useParams } from "react-router-dom";

import { formatDate } from "../../utils/formatDate";
import Preloader from "../Preloader/Preloader";
import { useSelector } from "../../services/hooks";

const OrderInfo = () => {

  const { orderNumber } = useParams<{ orderNumber: string }>();

  const orders = useSelector(store => store.ws.orders)
  const order = orders?.find((order) => order.number === Number(orderNumber));
  const initialIngredients = useSelector(store => store.initialIngredients.ingredients);

  console.log('order',order);
  
  const getIngredientsId = useMemo(() => {
    return order?.ingredients.map((ingredientId) => {
        return initialIngredients?.find((ingredient) => {
          return ingredientId === ingredient._id
        })
      })}, [order?.ingredients, initialIngredients])

  const totalOrder = useMemo(() => {
    return getIngredientsId?.reduce((prev, next) => {
      return (prev += next ? next.price : 0);
    }, 0);
  }, [getIngredientsId]);

  const status = order?.status === 'done' ? 'Выполнен' : order?.status === 'pending' ? 'Готовиться' : order?.status === 'created' ? 'Создан' : '';

  return (
    <div className={styles.orderInfo}>
      {!order && <Preloader />}
      {order && 
      <>
        <p className={`${styles.orderInfo__number} text text_type_digits-default`}>#{order.number}</p>
        <h3 className='text text_type_main-medium mt-10 mb-3'>{order.name}</h3>
        {status === 'Выполнен' && <span className={`${styles.orderInfo__status} text text_type_main-default mb-15`}>{status}</span>}
        {status === 'Готовиться' && 'Создан' && <span className='text text_type_main-default mb-15'>{status}</span>}
        <h3 className='text text_type_main-medium mb-6'>Состав:</h3>
        <ul className={`${styles.orderInfo__ingredientsList} pr-6`}>
          {[...new Set(getIngredientsId)].map((ingredient, index) => {
            return (
              <OrderInfoIngredient 
                ingredient={ingredient} 
                key={index} 
                myKey={index}
                quantity={
                  getIngredientsId?.filter(
                    (item) => item?._id === ingredient?._id
                  ).length
                }
              />
            )
          })}
        </ul>
        <div className={`${styles.orderInfo__footer} mt-10`}>
          {order.createdAt && <p className='text text_type_main-default text_color_inactive'>{formatDate(order.createdAt)}</p>}    
          <div className={styles.orderInfo__totalPrice}>
            <span className='text text_type_digits-default'>{totalOrder}</span>
            <CurrencyIcon type='primary'/>
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default OrderInfo;