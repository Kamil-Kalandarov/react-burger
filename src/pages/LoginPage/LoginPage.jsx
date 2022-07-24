import React, { useState } from "react";
import styles from './loginPage.module.css';
import { 
  Input, 
  PasswordInput,
  Button 
  } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link } from "react-router-dom";

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.loginPage}>
      <Form name='log-in' onSubmit={handleSubmit} title='Вход'>
        <InputSection padding='pt-6'>
          <Input
          name={'e-mail'}
          type={'text'}
          placeholder={'e-mail'}
          onChange={e => setEmail(e.target.value)}
          value={email}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          />
        </InputSection>
        <InputSection padding='pt-6'>
          <PasswordInput 
            name={'password'}
            onChange={e => setPassword(e.target.value)} 
            value={password} />
        </InputSection>
        <div className={`${styles.loginPage__submitBtnContainer} pt-6`}>
          <Button type="primary" size="medium">Войти</Button>
        </div>
        <div className={`${styles.loginPage__autorisationInfo} pt-20`}>
          <p className='text text_type_main-default'>Вы — новый пользователь?
            <Link className={styles.loginPage__link} to='/sign-in'>Зарегистрироваться</Link>
          </p>
          <p className='text text_type_main-default'>Забыли пароль?
            <Link className={styles.loginPage__link} to='/forgot-password'>Восстановить пароль</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}