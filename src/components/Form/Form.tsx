import React, { FC, ReactNode } from "react";
import styles from './form.module.css';

type TFormProps = {
  name: string;
  title?: string;
  children: ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form: FC<TFormProps> = ({ name, onSubmit, title, children}) => {
  return (
    <form className={styles.form} name={name} onSubmit={onSubmit}>
      <h2 className={`${styles.form__title} text text_type_main-medium`}>{title}</h2>
      {children}
    </form>
  )
}

export default Form;