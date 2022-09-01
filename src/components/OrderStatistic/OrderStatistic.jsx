import React from "react";
import styles from './orderStatistic.module.css';

const OrderStatistic = () => {
  return (
    <section className={`${styles.orderStatistic} pl-4 mt-25`}>
        <div className={`${styles.orderStatistic__ordersNumbers} pb-15`}>
          <div>
            <h3 className={`${styles.orderStatistic__header} text text_type_main-medium pb-6`}>Готовы:</h3>
            <ul className={`${styles.orderStatistic__ordersDone} text text_type_digits-default`}>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
            </ul>
          </div>
          <div>
            <h3 className={`${styles.orderStatistic__header} text text_type_main-medium pb-6`}>В работе:</h3>
            <ul className={`${styles.orderStatistic__ordersInProccess} text text_type_digits-default`}>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
              <li>034533</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className={`${styles.orderStatistic__header} text text_type_main-medium`}>Выполненно за все время</h3>
          <p className={`${styles.orderStatistic__totalNumber} text text_type_digits-large pb-15`}>28 752</p>
        </div>
        <div>
          <h3 className={`${styles.orderStatistic__header} text text_type_main-medium`}>Выполненно за сегодня</h3>
          <p className={`${styles.orderStatistic__totalNumber} text text_type_digits-large`}>138</p>
        </div>
    </section>
  )
}

export default OrderStatistic;