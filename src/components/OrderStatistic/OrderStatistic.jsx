import React from "react";
import { useSelector } from "react-redux";
import styles from './orderStatistic.module.css';

const OrderStatistic = () => {

  const { total, totalToday, orders } = useSelector(store => store.ws);

  return (
    <section className={`${styles.orderStatistic} pl-4 mt-25`}>
        <div className={`${styles.orderStatistic__ordersNumbers} pb-15`}>
          <div>
            <h3 className={`${styles.orderStatistic__header} text text_type_main-medium pb-6`}>Готовы:</h3>
            <ul className={`${styles.orderStatistic__ordersDone} text text_type_digits-default`}>
              {orders.map((order, index) => {
                if(order.status === 'done') {
                  return (<li key={index}>{order.number}</li>)
                }
              })}
            </ul>
          </div>
          <div>
            <h3 className={`${styles.orderStatistic__header} text text_type_main-medium pb-6`}>В работе:</h3>
            <ul className={`${styles.orderStatistic__ordersInProccess} text text_type_digits-default`}>
              {orders.map((order, index) => {
                if(order.status !== 'done') {
                  return (<li key={index}>{order.number}</li>)
                }
              })}
            </ul>
          </div>
        </div>
        <div>
          <h3 className={`${styles.orderStatistic__header} text text_type_main-medium`}>Выполненно за все время</h3>
          <p className={`${styles.orderStatistic__totalNumber} text text_type_digits-large pb-15`}>{total}</p>
        </div>
        <div>
          <h3 className={`${styles.orderStatistic__header} text text_type_main-medium`}>Выполненно за сегодня</h3>
          <p className={`${styles.orderStatistic__totalNumber} text text_type_digits-large`}>{totalToday}</p>
        </div>
    </section>
  )
}

export default OrderStatistic;