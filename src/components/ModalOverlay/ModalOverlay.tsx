import React from 'react';
import styles from './modalOverlay.module.css';

/* Полупрозрачная подложка под модальное окно */
const ModalOverlay = ({onClick} : { onClick: () => void }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClick}></div>
  );
};

export default ModalOverlay;