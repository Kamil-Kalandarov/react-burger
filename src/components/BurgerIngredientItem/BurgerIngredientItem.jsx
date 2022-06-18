import React, { useState } from "react";
import styles from './burgerIngredientItem.module.css';
import { useDispatch } from "react-redux";
import { useDrag } from 'react-dnd';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { openIngredientDetailsModal } from "../../services/actions/ingredientDetails";

const BurgerIngredientItem = (ingredients) => {

  const dispatch = useDispatch();

  const [isIngredientsDetailsOpened, setIsIngredientsDetailsOpened] = useState(false);

  const handleIngredientClick = (ingredient) => {
    dispatch(openIngredientDetailsModal(ingredient))
    setIsIngredientsDetailsOpened(true)
  };

  const closeIngredientModal = () => {
    setIsIngredientsDetailsOpened(false)
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ingredients },
    collect: (monitor) => ({
      isDrag: monitor.isDragging()
    })
  })

  return (
    <>
      <li className='pl-4 pr-2 pb-10' key={ingredients._id}>
        <article className={styles.cardElement} 
          onClick={() => handleIngredientClick(ingredients)} ref={dragRef}>
          <Counter count={0} size="default" />
          <div className='pl-4 pb-1 pr-4'>
            <img src={ingredients.image}/>
            <div className={styles.cardPrice}>
              <p className='text text_type_digits-default pt-1'>{ingredients.price}</p>
              <CurrencyIcon type='primary'/>
            </div>
          </div>
          <h3 className={`${styles.cardName} text text_type_main-default`}>{ingredients.name}</h3>
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