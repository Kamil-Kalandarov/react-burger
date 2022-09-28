import React, { FC, ReactNode } from "react";
import styles from './emptyBunTop.module.css';

type TEmptyBunTopProps = {
  children: ReactNode
}

const EmptyBunTop: FC<TEmptyBunTopProps> =  ({ children }) => {
  return (
    <div className={styles.emptyBunTop}>
      <span className={'${styles.emptyBunTop__text} text text_type_main-default'}>{children}</span>
    </div>
  );
}

export default EmptyBunTop;