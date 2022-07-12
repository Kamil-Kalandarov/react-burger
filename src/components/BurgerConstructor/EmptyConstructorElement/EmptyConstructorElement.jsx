import React from "react";
import styles from './emptyConstructorElement.module.css';

function EmptyConstructorElement({children}) {
  return (
    <div className={styles.emptyConstructorElement}>
      <span className={'${styles.emptyConstructorElement__text} text text_type_main-default'}>{children}</span>
    </div>
  );
}

export default EmptyConstructorElement;