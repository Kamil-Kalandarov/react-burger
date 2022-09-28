import React from 'react';
import styles from './ingredientOrderIcon.module.css';
import { TIngredients } from '../../utils/types/dataTypes';

type IngredientOrderIconProps = {
  ingredient?: TIngredients;
};

const IngredientOrderIcon : React.FC<IngredientOrderIconProps> = ({ ingredient }) => {
  
  return (
    <div className={styles.ingredientOrderIconContainer}>
      <img className={styles.ingredientOrderIconContainer__icon} src={ingredient?.image_mobile} alt='ингредиент' />
    </div>
  );
};

export default IngredientOrderIcon;