import React, { useState } from "react";
import styles from './signinPage.module.css';
import { 
  Input, 
  PasswordInput,
  Button 
  } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link } from "react-router-dom";

export const SigninPage = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.loginPage}>
      <Form name='sign-in' onSubmit={handleSubmit} title='Регистрация'>
      <InputSection padding='pt-6'>
          <Input
            name={'userName'}
            type={'text'}
            placeholder={'Имя'}
            onChange={e => setUserName(e.target.value)}
            value={userName}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
          />
        </InputSection>
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
          <Button type="primary" size="medium">Зарегистрироваться</Button>
        </div>
        <div className={`${styles.loginPage__autorisationInfo} pt-20`}>
          <p className='text text_type_main-default'>Уже зарегистрированы?
            <Link className={styles.loginPage__link} to='/log-in'>Войти</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}