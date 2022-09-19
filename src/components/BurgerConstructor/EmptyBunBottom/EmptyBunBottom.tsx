import React, { FC, ReactNode } from "react";
import styles from './emptyBunBottom.module.css';

type TEmptyBunBottomProps = {
  children: ReactNode
}

const EmptyBunBottom: FC<TEmptyBunBottomProps> = ({ children }) => {
  return (
    <div className={styles.emptyBunBottom}>
      <span className={'${styles.emptyBunBottom__text} text text_type_main-default'}>{children}</span>
    </div>
  );
}

export default EmptyBunBottom;