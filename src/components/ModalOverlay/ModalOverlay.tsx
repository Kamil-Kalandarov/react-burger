import React from 'react';
import styles from './modalOverlay.module.css';
import PropTypes from "prop-types";

/* Полупрозрачная подложка под модальное окно */
const ModalOverlay = ({onClick} : { onClick: () => void }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClick}></div>
  );
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;