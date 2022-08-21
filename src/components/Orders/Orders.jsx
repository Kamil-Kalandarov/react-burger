import React from "react";
import styles from './orders.module.css';
import OrderCard from "../OrderCard/OrderCard";

const Orders = () => {
  return (
    <section className={`${styles.orders} pt-10 mr-10`}>
      <h1 className='text text_type_main-large pb-5'>Лента заказов</h1>
      <div className={styles.orders__ordersWrapper}>
        <ul className={styles.orders__ordersList}>
          <OrderCard />
        </ul>
    </div>
    </section>
  )
}

export default Orders;