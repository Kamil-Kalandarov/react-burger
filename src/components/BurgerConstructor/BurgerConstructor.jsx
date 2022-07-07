import React, { useEffect, useState } from 'react';
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


/* Конструктор бургера */
const BurgerConstructor = ({ index }) => {
  const dispatch = useDispatch();
  
  const [isOrderDetailsOpened, setOrderDetailsOpened] = useState(false);
  const isLoading = useSelector(store => store.orderDetails.orederRequest); 

  const bun = useSelector(store => store.constructorIngredients.bun);
  const fillings = useSelector(store => store.constructorIngredients.fillings);
  const allConstructorIngredients = useSelector(store => store.constructorIngredients)

  const id = fillings.forEach((filling) => filling.id)

  const ref = useRef(null)

  const [{ handlerId }, drop] = useDrop({
    accept: 'newIndex',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      dispatch(changeFillingPosition(dragIndex, hoverIndex))
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'newIndex',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  const handleDrop = (ingredient) => {
    dispatch(addIngredient(ingredient))
  }

  const handleDelete = (orderedIngredients) => {
    dispatch(deleteIngredient(orderedIngredients))
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
      <section className={`${styles.burgerConstructor} pl-4`} style={{ borderColor }} ref={dropTarget}>
        { bun ? (
          <article key={bun.id} className={`${styles.burgerConstructor__cardBunElement} ml-8 mr-2 mt-25`} 
            style={{ opacity }} ref={drag} data-handler-id={ handlerId } index={index}>
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
                <li key={filling.id}>
                  <article className={styles.burgerConstructor__cardElement}>
                    <p className={styles.burgerConstructor__dragIcon}>
                      <DragIcon type='primary'/>
                    </p>
                    <ConstructorElement
                      isLocked={false}
                      text={filling.name}
                      price={filling.price}
                      thumbnail={filling.image}
                      handleClose={() => handleDelete(filling.id)}
                    />
                  </article>
                </li>
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
        <div className={`${styles.burgerConstructor__totalPriceContainer} mr-4`}>
          <div className={`${styles.burgerConstructor__totalPrice} pr-10`}>
            <p className={`${styles.burgerConstructor__price} $text text_type_digits-medium`}></p>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={() => handleOrder(allConstructorIngredients)}>Оформить заказ</Button>
        </div> 
      </section>
      {isOrderDetailsOpened && (
        <Modal onCloseClick={handleClose}>
          {isLoading ? ( <Preloader />) : (<OrderDetails />)}
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