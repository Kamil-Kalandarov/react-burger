import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burgerIngredients.module.css';
import Tabs from '../Tabs/Tabs';
import { getInitialIngredients } from '../../services/actions/initialIngredients';
import IngredientsItemsList from '../IngredientsItemsList/IngredientsItemsList';

/* Выбор ингредиентов для бургера */
const BurgerIngredients = () => {

  const initialIngredients = useSelector(store => store.initialIngredients.ingredients);

  console.log(initialIngredients)

  const buns = initialIngredients.filter((ingredeint) => ingredeint.type === 'bun');
  const sauces = initialIngredients.filter((ingredeint) => ingredeint.type === 'sauce');
  const mains = initialIngredients.filter((ingredeint) => ingredeint.type === 'main');

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitialIngredients())
  }, [dispatch])

  return (
      <section className={`${styles.burgerIngredients} pt-10 mr-10`}>
        <h1 className='text text_type_main-large pb-5'>Соберите бургер</h1>
        <Tabs />
        <IngredientsItemsList 
          title="Булки"
          titleId="buns"
          ingredients={buns}
        />
        <IngredientsItemsList 
          title="Соусы"
          titleId="sauces"
          ingredients={sauces}
        />
        <IngredientsItemsList 
          title="Начинки"
          titleId="mains"
          ingredients={mains}
        />
      </section>
  );
};

export default BurgerIngredients;