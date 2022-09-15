import React, { useMemo } from "react";
import styles from './userOrderCard.module.css';
import { Link, useLocation } from "react-router-dom";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientOrderIcon from "../../IngredientOrderIcon/IngredientOrderIcon";
import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/formatDate";
import LastIngredientOrderIcon from "../../IngredientOrderIcon/LastIngredientOrderIcon/LastIngredientOrderIcon";

const UserOrderCard = ({ order }) => {

  const initialIngredients = useSelector(store => store.initialIngredients.ingredients)
  
  const location = useLocation();

  const getIngredientsId = useMemo(() => {
    return  order?.ingredients.map((ingredientId) => {
        return initialIngredients?.find((ingredient) => {
          return ingredientId === ingredient._id
        })
      })
  }, [order?.ingredients, initialIngredients]);

  const totalOrder = useMemo(() => {
    return getIngredientsId?.reduce((prev, next) => {
      if (next?.type === "bun") {
        return (prev += next.price * 2);
      }
      return (prev += next ? next.price : 0);
    }, 0);
  }, [getIngredientsId]);

  return (
    <li className={styles.userOrderCard}>
      <Link 
          className={styles.userOrderCard__link} 
          to={{
            pathname: `/profile/orders/${order.number}`,
            state: { background: location }
          }}>
        <article className={`${styles.userOrderCard__card} pt-6 pb-6 pl-6 pr-6`}>
          <div className={styles.userOrderCard__header}>
            <p className={`${styles.userOrderCard__number} text text_type_digits-default`}>#{order?.number}</p>
            <p className='text text_type_main-default text_color_inactive'>
              {formatDate(order?.createdAt)}
            </p>
          </div>
          <h3 className={`${styles.userOrderCard__name} text text_type_main-medium`}>{order?.name}</h3>
          <div className={styles.userOrderCard__orderedBurgerInfo}>
            <ul className={styles.userOrderCard__ingredientsList}>
              {Array.from(new Set(getIngredientsId))?.map((ingredient, index) => {
                if (index < 5) {
                  return (
                    <li className={styles.userOrderCard__ingredient} 
                        key={index} 
                        style={{zIndex: `${getIngredientsId.length - index}`}}>
                      <IngredientOrderIcon ingredient={ingredient}/>
                    </li>
                )}
                if (index === 6) {
                  return (
                    <li className={styles.userOrderCard__ingredient} key={index}>
                      <LastIngredientOrderIcon ingredient={ingredient} getIngredientsId={getIngredientsId}/>  
                    </li>
                  )
                }
              })}
            </ul>
            <div className={styles.userOrderCard__price}>
              <p className='text text_type_digits-default pt-1'>{totalOrder}</p>
              <CurrencyIcon type='primary'/>
            </div>
          </div>
        </article>
       </Link>
      </li>
  )
}

export default UserOrderCard;