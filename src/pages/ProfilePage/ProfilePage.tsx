import React, { FC, useEffect } from "react";
import { store } from "../../services/store";
import styles from './profilePage.module.css';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/hooks";
import { logout } from "../../services/actions/logout";
import ProfileFrom from "../../components/ProfileForm/ProfileForm";
import { Switch, Route } from 'react-router-dom';
import { wsStart, wsClosed } from "../../services/actions/ws";
import { wsUserUrl } from "../../constans/apiConfig";
import { getCookie } from "../../utils/coockie";
import UserOrders from "../../components/UserOrders/UserOrders";

export const ProfilePage: FC = () => {

  const dispatch = useDispatch();
  const orders = useSelector(store => store.ws.orders);

  const exitProfile = () => {
    dispatch(logout())
  };

  useEffect(() => {
    const accessToken = getCookie('accessToken')
    dispatch(wsStart(`${wsUserUrl}?token=${accessToken}`))
    return () => {
      dispatch(wsClosed())
    }
  }, [dispatch]);

  return (
    <main className={styles.profilePage}>
      <div className={styles.profilePage__navigationContainer}>
        <ul className={styles.profilePage__navigationList}>
          <li>
            <NavLink 
              to='/profile' 
              exact
              className={`${styles.profilePage__navigationLink} text text_type_main-medium`}
              activeClassName={styles.profilePage__navigationLink_active}>Профиль</NavLink>
          </li>
          <li className="pt-9">
            <NavLink 
              to='/profile/orders' 
              className={`${styles.profilePage__navigationLink} text text_type_main-medium`}
              activeClassName={styles.profilePage__navigationLink_active}>История заказов</NavLink>
          </li>
          <li className="pt-9">
            <NavLink 
              to='/login' 
              onClick={exitProfile}
              className={`${styles.profilePage__navigationLink} text text_type_main-medium`}
              activeClassName={styles.profilePage__navigationLink_active}>Выход</NavLink>
          </li>
        </ul>
        <p className={`${styles.profilePage__navigationInfo} text text_type_main-default text_color_inactive pt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Switch>
        <Route path='/profile' exact>
          <ProfileFrom />
        </Route>
        <Route path='/profile/orders' exact>
          <UserOrders orders={orders}/>
        </Route>
      </Switch>
    </main>
  )
}