import React, {useCallback, useEffect} from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const reactModalCOntainer = document.querySelector('#react-modals')

type TModalProps = {
  onCloseClick: () => void;
  children: React.ReactNode;
};

/* Передача props для модального окна, используются в компоненте App */
const Modal:React.FC<TModalProps> = ({onCloseClick, children}) => {

  /* Хендлер нажатия на клваишу 'Escape' */
  const handleEscKeydownModal = (event: KeyboardEvent) => {
    event.key === 'Escape' && onCloseClick()
  };

  /* Монитрование случателя нажатия клваиши 'Escape' */
  useEffect(() => {
    document.addEventListener("keydown", handleEscKeydownModal)
    return () => {
      document.removeEventListener("keydown", handleEscKeydownModal)
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
    reactModalCOntainer as HTMLDivElement
  );
};

export default Modal;