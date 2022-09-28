import React from "react";
import styles from './inputSection.module.css';

type TInputSectionProps = {
  padding?: string;
  children: React.ReactNode
}

const InputSection: React.FC<TInputSectionProps> = ({ children, padding }) => {
  return (
    <div className={`${styles.inputSection} ${padding}`}>{children}</div>
  )
};

export default InputSection;