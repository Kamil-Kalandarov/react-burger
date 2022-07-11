import React from "react";
import styles from './emptyBunBottom.module.css';

function EmptyBunBottom({children}) {
  return (
    <div className={styles.emptyBunBottom}>
      <span className={'${styles.emptyBunBottom__text} text text_type_main-default'}>{children}</span>
    </div>
  );
}

export default EmptyBunBottom;