import React, { FC, useRef } from "react";
import styles from "../burgerConstructor.module.css";
import { ConstructorElement ,DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "../../../services/hooks";
import { changeFillingPosition } from "../../../services/actions/burgerConstructor";
import { deleteIngredient } from "../../../services/actions/burgerConstructor";
import { TIngredients } from "../../../utils/types/dataTypes";

type TFiilingConstructorElementProps = {
  filling: TIngredients;
  index: number;
  id: string;
}

const FiilingConstructorElement: FC<TFiilingConstructorElementProps> = ({ filling, index, id }) => {

  const dispatch = useDispatch()

  const ref = useRef<HTMLLIElement>(null)

  const [, drop] = useDrop({
    accept: 'newIndex',
    hover(item: {index: number; filling: TIngredients}, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();

      if (!hoverBoundingRect || !clientOffset) {
        return
      };
      
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      };

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      };
      dispatch(changeFillingPosition(dragIndex, hoverIndex))
      item.index = hoverIndex
    }
  });

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


  const handleDelete = (orderedIngredients: string) => {
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
          handleClose={() => handleDelete(id)}
        />
      </article>
  </li>
  )  
}

export default FiilingConstructorElement;