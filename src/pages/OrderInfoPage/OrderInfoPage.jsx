import React from "react";
import { useSelector } from "react-redux";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import styles from './orderInfoPage.module.css';

export const OrderInfoPage = () => {

  return (
    <section className={styles.orderInfoPage}>
      <OrderInfo />
    </section>
  ) 
}