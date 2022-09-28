import React from 'react';
import { TIngredients } from '../../../utils/types/dataTypes';
import styles from './lastIngredientOrderIcon.module.css';

type LastIngredientOrderIcon = {
  ingredient?: TIngredients;
  getIngredientsId: (TIngredients | undefined)[];
};


const LastIngredientOrderIcon: React.FC<LastIngredientOrderIcon> = ({ingredient, getIngredientsId}) => {
  return (
    <div className={styles.lastIngredientOrderIconContainer}>
      <img className={styles.lastIngredientOrderIconContainer__icon} src={ingredient?.image} alt='ингредиент' />
      <span className={`${styles.lastIngredientOrderIconContainer__counter} text text_type_main-default`}>
        {`+${getIngredientsId.length - 5}`}
      </span>
    </div>
  );
};

export default LastIngredientOrderIcon;