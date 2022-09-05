import React from "react";
import styles from './orderInfoIngredient.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientOrderIcon from "../../IngredientOrderIcon/IngredientOrderIcon";

const OrderInfoIngredient = ({ ingredient, key }) => {
  return (
    <li className={styles.orderInfoIngredient__ingredientItem} key={key}>
      <IngredientOrderIcon ingredient={ingredient.image.mobile}/>
      <div className={styles.orderInfoIngredient__ingredientInfo}>
        <h3 className='text ext_type_main-medium'>Флюоресцентная булка R2-D3</h3>
        <div className={styles.orderInfoIngredient__price}>
          <span className='text text_type_digits-default'>2 X 20</span>
          <CurrencyIcon type='primary'/>
        </div>
      </div>
    </li>
  )
}

export default OrderInfoIngredient;