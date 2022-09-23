import React, { useEffect } from "react";
import styles from './feedPage.module.css';
import Orders from "../../components/Orders/Orders";
import OrderStatistic from "../../components/OrderStatistic/OrderStatistic";

import { wsUrl } from "../../constans/apiConfig";
import { wsClosed, wsStart } from "../../services/actions/ws";
import { useDispatch, useSelector } from "../../services/hooks";

export const FeedPage = () => {

  const dispatch = useDispatch();
  const orders = useSelector(store => store.ws.orders);

  useEffect(() => {
    dispatch(wsStart(wsUrl))
    return () => {
      dispatch(wsClosed())
    }
  }, [dispatch]);


  return (
    <section className={styles.feedPage}>
      <main className={styles.feedPage__gridComponent}>
        <Orders orders={orders}/>
        <OrderStatistic />      
      </main>
    </section>
  )
}