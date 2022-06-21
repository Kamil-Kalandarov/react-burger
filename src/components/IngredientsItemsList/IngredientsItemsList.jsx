import React, { forwardRef, useMemo } from "react";
import styles from './ingredientsItemsList.module.css';
import { useSelector } from "react-redux";
import BurgerIngredientItem from "../BurgerIngredientItem/BurgerIngredientItem";

const IngredientsItemsList = forwardRef(({
  title,
  titleId,
  ingredients,
}, ref) => {

  const constructorIngredients = useSelector(store => store.constructorIngredients)

  const ingredientsCounter = useMemo(() => {
    const { bun, fillings } = constructorIngredients;
    const counters = {};
    fillings.forEach((filling) => {
      if(!counters[filling._id]) counters[filling._id] = 0;
      counters[ingredients._id]++;
    })
      if(bun) counters[bun._id] = 2
      return counters
  }, [constructorIngredients]);
  return (
    <>
      <h3 className='text text_type_main-medium' id={titleId}>{title}</h3>
      <ul className={styles.cardList} ref={ref}>
        {ingredients.map((ingredient) => {
          return (
            <BurgerIngredientItem 
              ingredients={ ingredient }
              key={ ingredient._id }
              counter={ ingredientsCounter[ingredient._id] }
            />
          )
        })}
      </ul>
    </>
          )
});

export default IngredientsItemsList;