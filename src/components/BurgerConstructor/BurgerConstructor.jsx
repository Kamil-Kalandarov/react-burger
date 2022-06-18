import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burgerConstructor.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getInitialIngredients } from '../../services/actions/initialIngredients';
/* import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import Preloader from '../Preloader/Preloader';
import { postOrderNumber } from '../../services/actions/orderDetails'; */
import { store } from '../../services/store';
import { useDrop } from 'react-dnd';


/* Конструктор бургера */
const BurgerConstructor = () => {
  const bun = useSelector(store => store.constructorIngredients.bun)
  const fillings = useSelector(store => store.constructorIngredients.fillings)

  const [{ isOver }, dropTarget] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })

  /* console.log(bun)
  console.log(fillings) */
  const dispatch = useDispatch()

 /*  const [isOrderDetailsOpened, setOrderDetailsOpened] = useState(false) */

/*   const handleOrderButtonClick = (ingredientsId) => {
    postOrderNumber(ingredientsId)
    setOrderDetailsOpened(true)
  } */

 /*  useEffect(() => {
    dispatch(getInitialIngredients())
  }, [dispatch]) */

 
/*const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');

  const fillings = ingredients.filter((ingredient) => ingredient.type !=='bun');
 
  const bunsPrice = buns.reduce((prevValue, ingredient) => {
    return prevValue + ingredient.price
  }, 0)
 
  const fillingsPrice = fillings.reduce((prevValue, ingredient) => {
    return prevValue + ingredient.price
  }, 0)

  const IngredientsTotalPrice = bunsPrice + fillingsPrice */
  
  return (
    <>
      <section className={`${styles.burgerConstructor} pl-4`} ref={dropTarget}>
       {/* {ingredients
          .filter((ingredient) => ingredient.name === 'Краторная булка N-200i')
          .map((ingredient) => {
            return (
              <article key={ingredient._id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2 mt-25`}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text="Краторная булка N-200i (верх)"
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </article>
            )
          })
        }
        <div className={styles.burgerConstructor__wrapper}>
          <ul className={`${styles.burgerConstructor__list} pr-4`}>
            {fillings
              .map((ingredient) => {
                return (
                  <li key={ingredient._id}>
                    <article className={styles.burgerConstructor__cardElement}>
                      <p className={styles.burgerConstructor__dragIcon}>
                        <DragIcon type='primary'/>
                      </p>
                      <ConstructorElement
                        key={ingredient._id}
                        isLocked={false}
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image}
                      />
                    </article>
                  </li>
                )
              })
            }
          </ul>
        </div>
          {ingredients
            .filter((ingredient) => ingredient.name === 'Краторная булка N-200i')
            .map((ingredient) => {
              return (
                <article key={ingredient._id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2 mb-6`}>
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </article>
              )
            })
          } 
        <div className={`${styles.burgerConstructor__totalPriceContainer} mr-4`}>
          <div className={`${styles.burgerConstructor__totalPrice} pr-10`}>
            <p className={`${styles.burgerConstructor__price} $text text_type_digits-medium`}>{IngredientsTotalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={() => handleOrderButtonClick(ingredientsId)}>Оформить заказ</Button>
        </div> */}
      </section>
     {/*  {isOrderDetailsOpened && (
        <Modal onCloseClick={closeOrderModal}>
          {state.isLoading ? ( <Preloader />) : (<OrderDetails />)}
        </Modal>
      )} */}
    </>
    
  );
};

/* Проверка типов данных, полученных на вход */
/* BurgerConstructor.propTypes = {
  ingredientsId: PropTypes.array,
  onOrderButtonClick: PropTypes.func.isRequired
}; */

export default BurgerConstructor;