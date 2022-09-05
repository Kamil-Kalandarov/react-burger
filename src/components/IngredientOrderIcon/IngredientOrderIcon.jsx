import React from 'react';
import styles from './ingredientOrderIcon.module.css';

const IngredientOrderIcon = (ingredientImg) => {
  return (
    <div className={styles.ingredientOrderIconContainer}>
      <img className={styles.ingredientOrderIconContainer__icon} src={ingredientImg} alt='ингредиент' />
    </div>
  );
};

export default IngredientOrderIcon;