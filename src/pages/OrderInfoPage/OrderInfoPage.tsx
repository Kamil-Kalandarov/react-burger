import React, { useEffect } from "react";
import { useDispatch } from "../../services/hooks";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import styles from './orderInfoPage.module.css';
import { wsUrl } from "../../constans/apiConfig";
import { wsStart, wsClosed } from "../../services/actions/ws";

export const OrderInfoPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsStart(wsUrl))
    return () => {
      dispatch(wsClosed())
    }
  }, [dispatch]);

  return (
    <section className={styles.orderInfoPage}>
      <OrderInfo />
    </section>
  ) 
}