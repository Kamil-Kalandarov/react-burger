import React, { FC } from 'react';
import { useSelector } from '../../services/hooks';
import { useInView } from 'react-intersection-observer';
import styles from './burgerIngredients.module.css';
import Tabs from '../Tabs/Tabs';
import IngredientsItemsList from './IngredientsItemsList/IngredientsItemsList';


const BurgerIngredients: FC = () => {
  
  const initialIngredients = useSelector(store => store.initialIngredients.ingredients);

  const buns = initialIngredients.filter((ingredeint) => ingredeint.type === 'bun');
  const sauces = initialIngredients.filter((ingredeint) => ingredeint.type === 'sauce');
  const mains = initialIngredients.filter((ingredeint) => ingredeint.type === 'main');

  const [ bunsRef, inViewBuns ] = useInView({ threshold: 0 });
  const [ saucesRef, inViewSauces ] = useInView({ threshold: 0 });
  const [ mainsRef, inViewMains ] = useInView({ threshold: 0 });

  return (
      <section className={`${styles.burgerIngredients} pt-10 mr-10`}>
        <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
        <Tabs inViewBuns={inViewBuns} inViewSauces={inViewSauces} inViewMains={inViewMains} />
        <div className={`${styles.burgerIngredients__cardsWrapper} mt-10`}>
          <IngredientsItemsList 
            title="Булки"
            titleId="buns"
            ingredients={buns}
            ref={bunsRef}
          />
          <IngredientsItemsList 
            title="Соусы"
            titleId="sauces"
            ingredients={sauces}
            ref={saucesRef}
          />
          <IngredientsItemsList 
            title="Начинки"
            titleId="mains"
            ingredients={mains}
            ref={mainsRef}
          />
          </div>
      </section>
  );
};

export default BurgerIngredients;