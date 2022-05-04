import React from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const reactModalCOntainer = document.querySelector('#react-modals')

const Modal = ({onCloseClick, onEsckeyDown, children}) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onEsckeyDown)
    return () => {
      document.removeEventListener("keydown", onEsckeyDown)
    }
  }, [])

  return createPortal(
    <>
      <div className={styles.modal}>
        <button className={styles.modal__closeButton} type='button'><CloseIcon type='primary' onClick={onCloseClick}/></button>
        {children}
      </div>
      <ModalOverlay onClick={onCloseClick}/>
    </>,
    reactModalCOntainer
  )
}

export default Modal