import React from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';

const reactModalCOntainer = document.querySelector('#react-modals')

const Modal = ({onCloseClick, onEsckeyDown, children}) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onEsckeyDown)
    return () => {
      document.removeEventListener("keydown", onEsckeyDown)
    }
  }, [])

  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modal__container}>
        <button className={styles.modal__closeButton} type='button'><CloseIcon type='primary' onClick={onCloseClick}/></button>
        {children}
      </div>
    </div>,
    reactModalCOntainer
  )
}

export default Modal