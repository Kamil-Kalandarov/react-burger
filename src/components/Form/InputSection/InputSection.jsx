import React from "react";
import styles from './inputSection.module.css';

const InputSection = ({ children, padding }) => {
  return (
    <div className={`${styles.inputSection} ${padding}`}>{children}</div>
  )
};

export default InputSection;