import React from 'react';
import styles from './header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';

const AppHeader = () => {
  
  const location = useLocation()
  console.log('pathname', location.pathname)

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.header__nav}>
        <Link to='/main' className={`${styles.header__menuItemLink} p-5`}>
          <BurgerIcon type='primary'/>
          <p className='text text_type_main-default ml-2'>Конструктор</p>
        </Link>
        <Link className={`${styles.header__menuItemLink} p-5`}>
          <ListIcon type='secondary'/>
          <p className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</p>
        </Link>
        <Link to='/main' className={styles.header__logo}>
          <Logo />
        </Link>
        <Link className={`${styles.header__menuItemLink} p-5`}>
          <ProfileIcon type='secondary'/>
          <p className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</p>
        </Link>
      </nav>
    </header>
  );
};

export default AppHeader;