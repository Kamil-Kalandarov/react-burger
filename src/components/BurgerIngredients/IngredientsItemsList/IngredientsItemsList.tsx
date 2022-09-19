import React, { forwardRef, useMemo } from "react";
import styles from './ingredientsItemsList.module.css';
import { useSelector } from "../../../services/hooks";
import BurgerIngredientItem from "../BurgerIngredientItem/BurgerIngredientItem";
import { TIngredients } from "../../../utils/types/dataTypes";

export type TIngredientsList = {
  title: string;
  titleId: string;
  ingredients: TIngredients;
}

const IngredientsItemsList = forwardRef<HTMLUListElement, TIngredientsList>(({
  title,
  titleId,
  ingredients,
}, ref) => {

  const constructorIngredients = useSelector(store => store.constructorIngredients)

  const ingredientsCounter = useMemo(() => {
    const { bun, fillings } = constructorIngredients;
    const counters: { [key: string]: number } = {};
    fillings.forEach((filling) => {
      if(!counters[filling._id]) counters[filling._id] = 0;
      counters[filling._id]++;
    })
      if(bun) counters[bun._id] = 2
      return counters
  }, [constructorIngredients]);
  return (
    <>
      <h3 className='text text_type_main-medium' id={titleId}>{title}</h3>
      <ul className={styles.cardList} ref={ref}>
        {ingredients.map((ingredient: TIngredients, id: number) => {
          return (
            <BurgerIngredientItem 
              ingredient={ ingredient }
              key={ id }
              counter={ ingredientsCounter[ingredient._id] }
            />
          )
        })}
      </ul>
    </>
          )
});

export default IngredientsItemsList;