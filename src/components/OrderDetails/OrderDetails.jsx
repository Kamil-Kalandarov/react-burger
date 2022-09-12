import React from "react";
import styles from './orderDetails.module.css'
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";


/* Соержимое модалки с деталями заказа, которые устанваливаются кликом при формировании заказа */
const OrderDetails = () => {
  const currentOrderNumber = useSelector(store => store.orderDetails.currentOrderNumber);
  const isLoading = useSelector(store => store.orderDetails.orederRequest); 
  const isRequestSuccess = useSelector(store => store.orderDetails.orderSuccess);
  const requestFailed = useSelector(store => store.orderDetails.orderfailed)
  
  {!currentOrderNumber && (
    <Preloader />
)}
  if (currentOrderNumber) {
    return (
      <div className={`${styles.orderDetails} pt-30 pb-30`}>
        <h3 className='styles.orderDetails__title text text_type_digits-large'>{ currentOrderNumber }</h3>
        <p className='text text_type_main-medium pt-8 pb-15'>идентификатор заказа</p>
        <img className={styles.orderDetails__image} src={require('./images/order accpeted-popup-graphics.png')} alt='изображение готовности заказа' />
        <p className='text text_type_main-default pt-15 pb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
      </div>
    )
  } else if (requestFailed) {
    return (
      <div className={`${styles.orderDetails} pt-30 pb-30`}>
        <h3 className='styles.orderDetails__title text text_type_digits-medium'>Произошла ошибка, повторите позднее</h3>
      </div>
    )
  }
};

export default OrderDetails;