import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './burgerConstructor.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import Preloader from '../Preloader/Preloader';
import { store } from '../../services/store';
import { addIngredient } from '../../services/actions/burgerConstructor';
import { deleteIngredient, changeFillingPosition } from '../../services/actions/burgerConstructor';
import { postOrder } from '../../services/actions/orderDetails';
import { useDrop, useDrag } from 'react-dnd';
import { useRef } from 'react';
import EmptyConstructorElement from './EmptyConstructorElement/EmptyConstructorElement';
import { emptyConstructor } from '../../services/actions/orderDetails';
import FiilingCOnstructorElement from './FillingConstructorElement/FillingConstructorElement';


/* Конструктор бургера */
const BurgerConstructor = () => {
  const [isOrderDetailsOpened, setOrderDetailsOpened] = useState(false);

  const dispatch = useDispatch();
  
  const currentOrderNumber = useSelector(store => store.orderDetails.currentOrderNumber);
  const bun = useSelector(store => store.constructorIngredients.bun);
  const fillings = useSelector(store => store.constructorIngredients.fillings);
  const allConstructorIngredients = useSelector(store => store.constructorIngredients)

  const totalPrice = useMemo(() => {
    return (bun ? bun.price * 2 : 0) + fillings.reduce((prev, next) => prev + next.price, 0);
  }, [bun, fillings]);

  const fillingsIds = fillings.map((filling) => filling.id)

  const handleDrop = (ingredient) => {
    dispatch(addIngredient(ingredient))
  }

  const handleOrder =(orderedIngredients) => {
      dispatch(postOrder([
        orderedIngredients.bun._id,
        ...orderedIngredients.fillings.map((filling) => filling._id),
        orderedIngredients.bun._id,
      ]))
    setOrderDetailsOpened(true)
  }

  const handleClose = () => {
    setOrderDetailsOpened(false)
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'ingredient',
    drop({ ingredient }, monitor) {
      handleDrop(ingredient)
    },
    collect: (monitor) => ({
      isHover: monitor.isOver()
    })
  })

  const borderColor = isHover ? 'darkblue' : 'transparent'
  
  return (
    <>
      <section className={`${styles.burgerConstructor} pl-4 mt-25`}>
        <div className={`${styles.burgerConstructor__ingredientsContainer}`} style={{ borderColor }} ref={dropTarget}>
          { bun ? (
            <article key={bun.id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2`}>
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
                  { fillings.map((filling, index) => (
                  <FiilingCOnstructorElement key={filling.id} filling={filling} index={index} />
                ))}
                </ul>
                ) : ( <EmptyConstructorElement>{'Выберите начинку или соус и перенесите ее сюда'}</EmptyConstructorElement>)
              }
          </div>
          { bun ? (
            <article key={bun.id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2 mb-6`}>
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
        </div>
        <div className={`${styles.burgerConstructor__totalPriceContainer} mr-4`}>
          <div className={`${styles.burgerConstructor__totalPrice} pr-10`}>
            <p className={`${styles.burgerConstructor__price} $text text_type_digits-medium`}>{ totalPrice }</p>
            <CurrencyIcon type="primary" />
          </div>
            {bun && fillings !== undefined ? 
              (<Button type="primary" size="large" onClick={() => handleOrder(allConstructorIngredients)}>Оформить заказ</Button>) :
              (<Button type="primary" size="large" disabled={true}>Оформить заказ</Button>)
            }           
          </div> 
      </section>
      {isOrderDetailsOpened && (
        <Modal onCloseClick={handleClose}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

/* Проверка типов данных, полученных на вход */
/* BurgerConstructor.propTypes = {
  ingredientsId: PropTypes.array,
  onOrderButtonClick: PropTypes.func.isRequired
}; */

export default BurgerConstructor;