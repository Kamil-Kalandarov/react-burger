import React, { useEffect } from "react";
import styles from './feedPage.module.css';
import Orders from "../../components/Orders/Orders";
import OrderStatistic from "../../components/OrderStatistic/OrderStatistic";
import Preloader from "../../components/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { wsApiConfig } from "../../constans/apiConfig";
import { wsClosed, wsStart } from "../../services/actions/ws";

export const FeedPage = () => {

  const ws = useSelector(store => store.ws)
  console.log(ws)
  const dispatch = useDispatch()

  useEffect =(() => {
    dispatch(wsStart(wsApiConfig))
    return () => {
      dispatch(wsClosed())
    }
  }, [dispatch])

  return (
    <section className={styles.feedPage}>
      <main className={styles.feedPage__gridComponent}>
        <Orders />
        <OrderStatistic />
      </main>
    </section>
  )
}