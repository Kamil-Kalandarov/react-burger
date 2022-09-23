import React, { useEffect } from "react";
import { useDispatch } from "../../services/hooks";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import styles from './userOrderInfoPage.module.css';
import { wsUserUrl } from "../../constans/apiConfig";
import { wsStart, wsClosed } from "../../services/actions/ws";
import { getCookie } from "../../utils/coockie";

export const UserOrderInfoPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getCookie('accessToken')
    dispatch(wsStart(`${wsUserUrl}?token=${accessToken}`))
    return () => {
      dispatch(wsClosed())
    }
  }, [dispatch]);

  return (
    <section className={styles.userOrderInfoPage}>
      <OrderInfo />
    </section>
  ) 
}