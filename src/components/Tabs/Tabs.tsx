import React, {useEffect} from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';
import { setCurrentTab } from '../../services/actions/initialIngredients';
import { useDispatch, useSelector } from '../../services/hooks';

type TTabs = {
  inViewBuns: boolean;
  inViewSauces: boolean;
  inViewMains: boolean
};

const Tabs:React.FC<TTabs> = ({ inViewBuns, inViewSauces, inViewMains }) => { 
  
  const currentTab = useSelector(store => store.initialIngredients.currentTab);
  const dispatch = useDispatch();

  useEffect(() => {
    if (inViewBuns) {
      dispatch(setCurrentTab('buns'))
    } else if (inViewSauces) {
      dispatch(setCurrentTab('sauces'))
    } else if (inViewMains) {
      dispatch(setCurrentTab('mains'))
    }
  }, [inViewBuns, inViewSauces, inViewMains])

  
  const handleScroll = (currentTab: string) => {
    dispatch(setCurrentTab(currentTab))
    const element = document.getElementById(currentTab)
    if (element) element.scrollIntoView({behavior: "smooth"})
  }

  return(
    <div className={styles.tabList}>
      <a className={styles.tab}><Tab value="buns" active={currentTab === 'buns'} 
        onClick={(value) => {handleScroll(value)}}>Булки</Tab></a>
      <a className={styles.tab}><Tab value="sauces" active={currentTab === 'sauces'} 
        onClick={(value) => {handleScroll(value)}}>Соусы</Tab></a>
      <a className={styles.tab}><Tab value="mains" active={currentTab === 'mains'} 
        onClick={(value) => {handleScroll(value)}}>Начинки</Tab></a>
    </div>
  )
}

export default Tabs;