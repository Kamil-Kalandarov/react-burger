import React from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from "prop-types";

const reactModalCOntainer = document.querySelector('#react-modals')

/* Передача props для модального окна, используются в компоненте App */
const Modal = ({onCloseClick, onEsckeyDown, children}) => {
  /* Монитрование случателя нажатия клваиши */
  React.useEffect(() => {
    document.addEventListener("keydown", onEsckeyDown)
    return () => {
      document.removeEventListener("keydown", onEsckeyDown)
    }
  }, [])

  /* Рендер вне корневого элемента */
  return createPortal(
    <>
      <div className={styles.modal}>
        <button className={styles.modal__closeButton} type='button'><CloseIcon type='primary' onClick={onCloseClick}/></button>
        {children}
      </div>
      <ModalOverlay onClick={onCloseClick}/>
    </>,
    reactModalCOntainer
  );
};

Modal.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  onEsckeyDown: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Modal;