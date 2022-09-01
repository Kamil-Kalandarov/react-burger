import React from "react";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import styles from './orderInfoPage.module.css';

export const OrderInfoPage = () => {
  return (
    <section className={styles.orderInfoPage}>
      <OrderInfo />
    </section>
  ) 
}