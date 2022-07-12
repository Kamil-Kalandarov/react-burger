import React from "react";
import styles from './emptyBunTop.module.css';

function EmptyBunTop({children}) {
  return (
    <div className={styles.emptyBunTop}>
      <span className={'${styles.emptyBunTop__text} text text_type_main-default'}>{children}</span>
    </div>
  );
}

export default EmptyBunTop;