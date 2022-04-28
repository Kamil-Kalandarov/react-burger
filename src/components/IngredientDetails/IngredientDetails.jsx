import React from "react";
import styles from './ingredientDetails.module.css';

const IngredientDetails = () => {
  return (
    <div className={styles.ingredientDetails}>
      <h3 className="text text_type_main-medium">Детали инредиента</h3>
      <img className={styles.ingredientDetails__image} src='https://clck.ru/gfuuo'/>
    </div>
  )
}

export default IngredientDetails