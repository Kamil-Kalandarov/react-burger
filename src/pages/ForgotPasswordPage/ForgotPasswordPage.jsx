import React, { useState, useCallback } from "react";
import styles from './forgotPasswordPage.module.css';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link, useHistory } from "react-router-dom";

export const ForgotPasswordPage = () => {

  const [email, setEmail] = useState('');

  const history = useHistory();
  console.log(history)
  const reset = useCallback(() => {

  })

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.loginPage}>
      <Form name='log-in' onSubmit={handleSubmit} title='Восстановление пароля'>
        <InputSection padding='pt-6'>
          <Input
          name={'e-mail'}
          type={'text'}
          placeholder={'укажите e-mail'}
          onChange={e => setEmail(e.target.value)}
          value={email}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          />
        </InputSection>
        <div className={`${styles.loginPage__submitBtnContainer} pt-6`}>
          <Button type="primary" size="medium">Восстановить</Button>
        </div>
        <div className={`${styles.loginPage__autorisationInfo} pt-20`}>
          <p className='text text_type_main-default'>Вспомнили пароль?
            <Link className={styles.loginPage__link} to='/log-in'>Войти</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}