import React from 'react';
import styles from './ingredientOrderIcon.module.css';

const IngredientOrderIcon = ({ingredient}) => {
  return (
    <div className={styles.ingredientOrderIconContainer}>
      <img className={styles.ingredientOrderIconContainer__icon} src={ingredient.image} alt='ингредиент' />
    </div>
  );
};

export default IngredientOrderIcon;