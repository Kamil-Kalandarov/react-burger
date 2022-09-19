import React, { FC, ReactNode } from "react";
import styles from './emptyConstructorElement.module.css';

type TEmptyConstructorElementProps = {
  children?: ReactNode;
}

const EmptyConstructorElement: FC<TEmptyConstructorElementProps> = ({ children }) => {
  return (
    <div className={styles.emptyConstructorElement}>
      <span className={'${styles.emptyConstructorElement__text} text text_type_main-default'}>{children}</span>
    </div>
  );
}

export default EmptyConstructorElement;