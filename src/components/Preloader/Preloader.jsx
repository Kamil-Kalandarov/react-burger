import React from "react";
import styles from './preloader.module.css';
import preloaderImage from './images/spiner-loader.gif'

const Preloader = () => {
  return (
    <img className={styles.preloader} src={preloaderImage} alt='preloaderImage'/>
  )
}

export default Preloader;