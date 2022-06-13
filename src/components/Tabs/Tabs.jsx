import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';

const Tabs = () => { 
  /* Переменная текущего состояния ТАБОВ */
  const current = useSelector(store => store.initialIngredients.currentTab)

  const dispatch = useDispatch()

/*   const handleScroll = (id) => {
    const ingredientsId = document.getElementById(id)
    dispatch(id)
    ingredientsId.scrollIntoView({behavior: "smooth"})
  } */
  return(
    <div className={styles.tabList}>
      <a className={styles.tab}><Tab value="bun" active={current === 'bun'} /* onClick={() => {handleScroll('bun')}} */>Булки</Tab></a>
      <a className={styles.tab}><Tab value="sauce" active={current === 'sauce'} /* onClick={() => {handleScroll('sauce')}} */>Соусы</Tab></a>
      <a className={styles.tab}><Tab value="main" active={current === 'main'} /* onClick={() => {handleScroll('main')}} */>Начинки</Tab></a>
    </div>
  )
}

export default Tabs;