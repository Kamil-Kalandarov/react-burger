import React, { useState } from "react";
import styles from './registerPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { store } from "../../services/store";
import { createUser } from "../../services/actions/user";
import { 
  Input, 
  PasswordInput,
  Button 
  } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link } from "react-router-dom";

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

 

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = ({name, email, password}) => {
    dispatch(createUser({name, email, password}))
  };

  return (
    <main className={styles.registerPage}>
      <Form name='register' onSubmit={handleSubmit(userName, email, password)} title='Регистрация'>
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
        <div className={`${styles.registerPage__submitBtnContainer} pt-6`}>
          <Button type="primary" size="medium">Зарегистрироваться</Button>
        </div>
        <div className={`${styles.registerPage__autorisationInfo} pt-20`}>
          <p className='text text_type_main-default'>Уже зарегистрированы?
            <Link className={styles.registerPage__link} to='/login'>Войти</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}