import React from "react";
import styles from './orderStatistic.module.css';

const OrderStatistic = () => {
  return (
    <section className={`${styles.orderStatistic} pl-4 mt-25`}>
      <div className={styles.orderStatistic__numbers}>
        <ul className={styles.orderStatistic__ordersDone}>
          <li>034533</li>
          <li>034533</li>
          <li>034533</li>
          <li>034533</li>
          <li>034533</li>
          <li>034533</li>
        </ul>
        <ul className={styles.orderStatistic__ordersInProccess}>
          <li>034533</li>
          <li>034533</li>
          <li>034533</li>
          <li>034533</li>
          <li>034533</li>
          <li>034533</li>
        </ul>
      </div>
    </section>
  )
}

export default OrderStatistic;