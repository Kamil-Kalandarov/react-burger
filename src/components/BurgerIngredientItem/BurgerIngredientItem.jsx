import React, { useState } from "react";
import styles from './burgerIngredientItem.module.css';
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useDrag } from 'react-dnd';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { openIngredientDetailsModal } from "../../services/actions/ingredientDetails";

const BurgerIngredientItem = ({ ingredient, counter }) => {

  const location = useLocation();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ingredient },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1

  return (
    <>
      <li className='pl-4 pr-2 pb-10'  style={{opacity}}>
        <Link 
          className={styles.cardElement__link} 
          to={{
            pathname: `/ingredients/${ingredient._id}`,
            state: { background: location }
          }}>
          <article className={styles.cardElement} ref={dragRef}>
            <Counter count={counter} size="default" />
            <div className='pl-4 pb-1 pr-4'>
              <img src={ingredient.image}/>
              <div className={styles.cardElement__price}>
                <p className='text text_type_digits-default pt-1'>{ingredient.price}</p>
                <CurrencyIcon type='primary'/>
              </div>
            </div>
            <h3 className={`${styles.cardElement__name} text text_type_main-default`}>{ingredient.name}</h3>
          </article>
        </Link>
      </li>
    </>
  )
};

export default BurgerIngredientItem;