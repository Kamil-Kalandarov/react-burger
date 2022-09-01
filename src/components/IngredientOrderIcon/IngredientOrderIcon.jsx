import React from 'react';
import styles from './ingredientOrderIcon.module.css';

const IngredientOrderIcon = (src) => {
  return (
    <div className={styles.ingredientOrderIconContainer}>
      <img className={styles.ingredientOrderIconContainer__icon} src={src} alt='ингредиент' />
    </div>
  );
};

export default IngredientOrderIcon;