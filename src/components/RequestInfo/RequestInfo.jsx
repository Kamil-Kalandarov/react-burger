import React from "react";
import styles from './requestInfo.module.css';
import { useSelector } from "react-redux";
import { store } from "../../services/store";

/* Соержимое модалки с ингредиентом, которые устанваливаются кликом по выбранному ингредиенту */
const RequestInfo = () => {
  
  const { updateUserRequest, updateUserFailed } = useSelector(store => store.user)

  return (
    <div className={`${styles.requestInfo} pt-10 pb-15 pl-10 pr-10`}>
    <div className={styles.requestInfo__content}>
      <p className={`${styles.requestInfo__name} text text_type_main-medium pt-4 pb-8`}>
        {!updateUserFailed && !updateUserRequest ? 'Данные успешно изменены' : 'Ошибка попробуйте изменить данные еще раз'}
      </p>
    </div>
    </div>
  );
};

export default RequestInfo;