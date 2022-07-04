import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burgerConstructor.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
/* import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import Preloader from '../Preloader/Preloader';
import { postOrderNumber } from '../../services/actions/orderDetails'; */
import { store } from '../../services/store';
import { addIngredient } from '../../services/actions/burgerConstructor';
import { useDrop } from 'react-dnd';
import EmptyConstructorElement from './EmptyConstructorElement/EmptyConstructorElement';


/* Конструктор бургера */
const BurgerConstructor = () => {
  const bun = useSelector(store => store.constructorIngredients.bun);
  const fillings = useSelector(store => store.constructorIngredients.fillings);
  const dispatch = useDispatch();

  const handleDrop = (ingredient) => {
    dispatch(addIngredient(ingredient))
  }

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop(ingredeint, monitor) {
      console.log(ingredeint)
      handleDrop(ingredeint)
    },
/*     hover(ingredeint, monitor) {
      console.log(ingredeint)
    }, */
    collect: (monitor) => ({
      isHover: monitor.isOver()
    })
  })

  const borderColor = isHover ? 'darkblue' : 'transparent'
  
  return (
    <>
      <section className={`${styles.burgerConstructor} pl-4`} style={{borderColor}} ref={dropTarget}>
        { bun ? (
          <article key={bun._id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2 mt-25`}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          </article>
        ) : ( <EmptyConstructorElement>{'Выберите булку и перенесите ее сюда'}</EmptyConstructorElement>)
        }
        <div className={styles.burgerConstructor__wrapper}>
            { fillings.length > 0 ? (
              <ul className={`${styles.burgerConstructor__list} pr-4`}>
                { fillings.map((filling) => (
                <li key={filling._id}>
                  <article className={styles.burgerConstructor__cardElement}>
                    <p className={styles.burgerConstructor__dragIcon}>
                      <DragIcon type='primary'/>
                    </p>
                    <ConstructorElement
                      key={filling._id}
                      isLocked={false}
                      text={filling.name}
                      price={filling.price}
                      thumbnail={filling.image}
                    />
                  </article>
                </li>
              ))}
              </ul>
              ) : ( <EmptyConstructorElement>{'Выберите начинку или соус и перенесите ее сюда'}</EmptyConstructorElement>)
            }
        </div>
        { bun ? (
          <article key={bun._id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2 mb-6`}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={bun.price}
              thumbnail={bun.image}
            />
          </article>
        ) : ( <EmptyConstructorElement>{'Выберите булку и перенесите ее сюда'}</EmptyConstructorElement>)
        }
       {/*  <div className={`${styles.burgerConstructor__totalPriceContainer} mr-4`}>
          <div className={`${styles.burgerConstructor__totalPrice} pr-10`}>
            <p className={`${styles.burgerConstructor__price} $text text_type_digits-medium`}>{IngredientsTotalPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={() => handleOrderButtonClick(ingredientsId)}>Оформить заказ</Button>
        </div>  */}
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