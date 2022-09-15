import React from "react";
import styles from './orders.module.css';
import OrderCard from "./OrderCard/OrderCard";
import Preloader from "../Preloader/Preloader";

const Orders = ({orders}) => {

  return (
    <section className={`${styles.orders} pt-10 mr-10`}>
      <h1 className='text text_type_main-large pb-5'>Лента заказов</h1>
        <ul className={styles.orders__ordersList}>
          {orders && orders.map((order) => {
            return <OrderCard key={order._id} order={order} />
          })}
      </ul>
    </section>
  )
}

export default Orders;