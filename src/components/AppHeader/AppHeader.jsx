import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './header.module.css';

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.header__nav}>
        <a className={`${styles.header__menuItemLink} p-5`}>
          <BurgerIcon type='secondary'/>
          <p className='text text_type_main-default ml-2'>Конструктор</p>
        </a>
        <a className={`${styles.header__menuItemLink} p-5`}>
          <ListIcon type='secondary'/>
          <p className='text text_type_main-default ml-2'>Лента заказов</p>
        </a>
        <a className={styles.header__logo}>
          <Logo />
        </a>
        <a className={`${styles.header__menuItemLink} p-5`}>
          <ProfileIcon type='secondary'/>
          <p className='text text_type_main-default ml-2'>Личный кабинет</p>
        </a>
      </nav>
    </header>
  );
};

export default AppHeader;