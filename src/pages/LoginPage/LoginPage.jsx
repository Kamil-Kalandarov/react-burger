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
import { useForm } from 'react-hook-form';

export const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm()


  const onSubmit = (data) => { 
    console.log(data);
  };
/* 
  const handleSubmit = (e) => {
    e.preventDefault()
  } */


  return (
    <main className={styles.loginPage}>
      <Form name='login' onSubmit={handleSubmit(onSubmit)} title='Вход'>
        <InputSection padding='pt-6'>
          <Input
            {...register('mail', {
              required: 'обязательное поле'
            })}
            placeholder={'e-mail'}
            onChange={e => setEmail(e.target.value)}
            type={'email'}
            value={email}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            />
           {/*  {errors?.mail && <p className={`${styles.errorMessage} text text_type_main-small pt-2 pl-3`}>{errors?.mail?.message}</p>} */}
        </InputSection>
        <InputSection padding='pt-6'>
          <PasswordInput
            name={'password'}
            onChange={e => setPassword(e.target.value)} 
            value={password} 
          />
        </InputSection>
        <div className={`${styles.loginPage__submitBtnContainer} pt-6`}>
          <Button type="primary" size="medium">Войти</Button>
        </div>
        <div className={`${styles.loginPage__autorisationInfo} pt-20`}>
          <p className='text text_type_main-default'>Вы — новый пользователь?
            <Link className={styles.loginPage__link} to='/register'>Зарегистрироваться</Link>
          </p>
          <p className='text text_type_main-default'>Забыли пароль?
            <Link className={styles.loginPage__link} to='/forgot-password'>Восстановить пароль</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}