import React, { useState, useRef } from "react";
import styles from './loginPage.module.css';
import { 
  Input, 
  PasswordInput,
  Button 
  } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";

export const LoginPage = () => {

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.loginPage}>
      <Form name='login' onSubmit={handleSubmit} title='Вход'>
        <InputSection padding='pt-6'>
          <Input
          name={'e-mail'}
          type={'text'}
          placeholder={'e-mail'}
          onChange={e => setEmailValue(e.target.value)}
          value={emailValue}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          />
        </InputSection>
        <InputSection padding='pt-6'>
          <PasswordInput 
            name={'password'}
            onChange={e => setPasswordValue(e.target.value)} 
            value={passwordValue} />
        </InputSection>
        <div className={`${styles.loginPage__submitBtnContainer} pt-6`}><Button type="primary" size="medium">Войти</Button></div>
      </Form>
    </main>
  )
}