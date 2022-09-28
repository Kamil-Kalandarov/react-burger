import React from "react";
import styles from './userOrders.module.css';
import UserOrderCard from "./UserOrderCard/UserOrderCard";
import { TOrder } from "../../utils/types/dataTypes";

type TUserOrdersProps = {
  orders: TOrder[];
};

const UserOrders: React.FC<TUserOrdersProps> = ({orders}) => { 
  return (
    <section className={`${styles.userOrders} pt-10 mr-10`}>
      <ul className={styles.userOrders__ordersList}>
        {orders && orders.reverse().map((order) => {
          return <UserOrderCard key={order._id} order={order} />
        })}
      </ul>
    </section>
  )
}

export default UserOrders;