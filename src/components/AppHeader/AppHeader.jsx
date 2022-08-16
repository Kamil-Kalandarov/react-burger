import React from 'react';
import styles from './header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppHeader = () => {

  const user  = useSelector(store => store.getUser.user)
  console.log(user);
  
  const location = useLocation()
  console.log('pathname', location.pathname)

  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.header__nav}>
        <NavLink 
          to='/' 
          className={`${styles.header__menuItemLink} p-5`} 
          activeClassName={styles.header__menuItemLink_active}>
          <BurgerIcon type={location.pathname === '/' ? 'primary' : 'secondary'}/> 
          <p className={'text text_type_main-default ml-2'}>Конструктор</p>
        </NavLink>
        <NavLink 
          to='/feed' 
          className={`${styles.header__menuItemLink} p-5`} 
          activeClassName={styles.header__menuItemLink_active}>
          <ListIcon type={location.pathname === '/' ? 'primary' : 'secondary'}/>
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </NavLink>
        <Link to='/' className={styles.header__logo}>
          <Logo />
        </Link>
        <NavLink 
          to={user ? '/profile' : '/login'} 
          className={`${styles.header__menuItemLink} p-5`} 
          activeClassName={styles.header__menuItemLink_active}>
          <ProfileIcon type={location.pathname === '/login' ? 'primary' : 'secondary'}/>
          <p className='text text_type_main-default ml-2'>{user ? user.name : 'Личный кабинет'}</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;