import React from "react";
import styles from './preloader.module.css';
import preloaderImage from './images/spiner-loader.gif'

const Preloader = () => {
  return (
    <section className={styles.preloader}>
      <div className={styles.preloader__icon} /* src={preloaderImage}  */></div>
    </section>
  )
}

export default Preloader;