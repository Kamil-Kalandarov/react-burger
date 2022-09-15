import React from "react";
import styles from './form.module.css';

const Form = ({ name, onSubmit, title, children}) => {
  return (
    <form className={styles.form} name={name} onSubmit={onSubmit}>
      <h2 className={`${styles.form__title} text text_type_main-medium`}>{title}</h2>
      {children}
    </form>
  )
}

export default Form;