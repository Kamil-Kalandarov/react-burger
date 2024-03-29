import React from "react";
import styles from './orderInfoIngredient.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientOrderIcon from "../../IngredientOrderIcon/IngredientOrderIcon";
import { TIngredients } from "../../../utils/types/dataTypes";

type OrderInfoIngredientProps = {
  ingredient: TIngredients | undefined;
  myKey: number;
  quantity: number | undefined
};

const OrderInfoIngredient: React.FC<OrderInfoIngredientProps> = ({ ingredient, myKey, quantity }) => {

  return (
    <li className={styles.orderInfoIngredient__ingredientItem} key={myKey}>
      <IngredientOrderIcon ingredient={ingredient}/>
      <div className={styles.orderInfoIngredient__ingredientInfo}>
        <h3 className='text ext_type_main-medium'>{ingredient?.name}</h3>
        <div className={styles.orderInfoIngredient__price}>
          <span className='text text_type_digits-default'>{quantity} X {ingredient?.price}</span>
          <CurrencyIcon type='primary'/>
        </div>
      </div>
    </li>
  )
}

export default OrderInfoIngredient;