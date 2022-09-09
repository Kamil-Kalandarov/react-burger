import React from 'react';
import styles from './lastIngredientOrderIcon.module.css';

const LastIngredientOrderIcon = ({ingredient, getIngredientsId}) => {
  return (
    <div className={styles.lastIngredientOrderIconContainer}>
      <img className={styles.lastIngredientOrderIconContainer__icon} src={ingredient.image} alt='ингредиент' />
      <span className={`${styles.lastIngredientOrderIconContainer__counter} text text_type_main-default`}>
        {`+${getIngredientsId.length - 5}`}
      </span>
    </div>
  );
};

export default LastIngredientOrderIcon;