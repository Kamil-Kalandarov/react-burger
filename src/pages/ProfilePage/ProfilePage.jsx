import React, { useCallback, useState } from "react";
import styles from './profilePage.module.css';
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/actions/logout";

export const ProfilePage = () => {

  const dispatch = useDispatch();

  const exitProfile = useCallback((e) => {
    dispatch(logout())
  })

  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  };
  
  return (
    <main className={styles.profilePage}>
      <div>
        <ul className={styles.profilePage__navigationList}>
          <li>
            <NavLink 
              to='/profile' 
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
      <Form name='profile' onSubmit={handleSubmit}>
        <InputSection>
          <EmailInput 
            name={'email'} 
            placeholder={'имя'}
            onChange={e => setEmail(e.target.value)}
            value={email} 
          />
        </InputSection>
        <InputSection padding='pt-6'>
          <EmailInput 
            name={'email'} 
            onChange={e => setEmail(e.target.value)}
            value={email} 
          />
        </InputSection>
        <InputSection padding='pt-6'>
          <EmailInput 
            name={'email'} 
            onChange={e => setEmail(e.target.value)}
            value={email} 
          />
        </InputSection>
      </Form>
    </main>
  )
}