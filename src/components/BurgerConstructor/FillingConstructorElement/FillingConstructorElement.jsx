import React, { useRef } from "react";
import styles from "../burgerConstructor.module.css";
import { ConstructorElement ,DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { changeFillingPosition } from "../../../services/actions/burgerConstructor";
import { deleteIngredient } from "../../../services/actions/burgerConstructor";

const FiilingConstructorElement = ({ filling, index, id }) => {

  const dispatch = useDispatch()

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
      console.log(dragIndex, hoverIndex)
      dispatch(changeFillingPosition(dragIndex, hoverIndex))
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    }
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


  const handleDelete = (orderedIngredients) => {
    dispatch(deleteIngredient(orderedIngredients))
  }

  return (
    <li style={{ opacity }} ref={ref}>
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
  )  
}

export default FiilingConstructorElement;