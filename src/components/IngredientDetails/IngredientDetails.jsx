import React from "react";
import styles from './ingredientDetails.module.css';
/* import PropTypesIngredientsData from '../../utils/propTypes'; */
import { useSelector } from "react-redux";
import { store } from "../../services/store";

/* Соержимое модалки с ингредиентом, которые устанваливаются кликом по выбранному ингредиенту */
const IngredientDetails = () => {
  const ingredient = useSelector(store => store.ingredientDetails)
  return (
    <div className={`${styles.ingredientDetails} pt-10 pb-15 pl-10 pr-10`}>
      <h3 className={`${styles.ingredientDetails__title} text text_type_main-large pb-5`}>Детали ингредиента</h3>
      <div className={styles.ingredientDetails__content}>
        <img className='pr-5 pl-5' src={ingredient.ingredient.image} alt='изображение ингредиента'/>
        <p className={`${styles.ingredientDetails__name} text text_type_main-medium pt-4 pb-8`}>{ingredient.ingredient.name}</p>
        <ul className={styles.ingredientDetails__nutritionalValueList}>
          <li className={styles.ingredientDetails__nutritionalValueItem}>
            <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
            <span className="text text_type_digits-default text_color_inactive">{ingredient.ingredient.calories}</span>
          </li>
          <li className={styles.ingredientDetails__nutritionalValueItem}> 
            <p className="text text_type_main-default text_color_inactive">Белки, г</p>
            <span className="text text_type_digits-default text_color_inactive">{ingredient.ingredient.proteins}</span>
          </li>
          <li className={styles.ingredientDetails__nutritionalValueItem}> 
            <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
            <span className="text text_type_digits-default text_color_inactive">{ingredient.ingredient.fat}</span>
          </li>
          <li className={styles.ingredientDetails__nutritionalValueItem}> 
            <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
            <span className="text text_type_digits-default text_color_inactive">{ingredient.ingredient.carbohydrates}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

/* IngredientDetails.propTypes = {
  ingredient: PropTypesIngredientsData.isRequired
}; */

export default IngredientDetails;