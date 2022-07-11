import React, { useState } from "react";
import styles from './burgerIngredientItem.module.css';
import { useDispatch } from "react-redux";
import { useDrag } from 'react-dnd';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { openIngredientDetailsModal } from "../../services/actions/ingredientDetails";

const BurgerIngredientItem = ({ ingredient, counter }) => {

  const dispatch = useDispatch();

  const [isIngredientsDetailsOpened, setIsIngredientsDetailsOpened] = useState(false);

  const handleIngredientClick = (ingredient) => {
    dispatch(openIngredientDetailsModal(ingredient))
    setIsIngredientsDetailsOpened(true)
  };

  const closeIngredientModal = () => {
    setIsIngredientsDetailsOpened(false)
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

 /*  const opacity = isDragging ? 0 : 1 */

  return (
    <>
      <li className='pl-4 pr-2 pb-10' key={ingredient._id} /* style={{opacity}} */>
        <article className={styles.cardElement} 
          onClick={() => handleIngredientClick(ingredient)} ref={dragRef}>
          <Counter count={counter} size="default" />
          <div className='pl-4 pb-1 pr-4'>
            <img src={ingredient.image}/>
            <div className={styles.cardPrice}>
              <p className='text text_type_digits-default pt-1'>{ingredient.price}</p>
              <CurrencyIcon type='primary'/>
            </div>
          </div>
          <h3 className={`${styles.cardName} text text_type_main-default`}>{ingredient.name}</h3>
        </article>
    </li>
    {isIngredientsDetailsOpened && (
      <Modal onCloseClick={closeIngredientModal}>
        <IngredientDetails />
      </Modal>
    )}
    </>
  )
};

export default BurgerIngredientItem;