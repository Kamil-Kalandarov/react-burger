import React from "react";
import styles from './feedPage.module.css';
import Orders from "../../components/Orders/Orders";
import OrderStatistic from "../../components/OrderStatistic/OrderStatistic";

export const FeedPage = () => {

  return (
    <section className={styles.feedPage}>
      <main className={styles.feedPage__gridComponent}>
        <Orders />
        <OrderStatistic />
      </main>
    </section>
  )
}