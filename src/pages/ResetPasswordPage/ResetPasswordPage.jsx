import React, { useState } from "react";
import styles from './resetPasswordPage.module.css';
import { 
  Input, 
  PasswordInput,
  Button 
  } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link } from "react-router-dom";

export const ResetPasswordPage = () => {

  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles.loginPage}>
      <Form name='reset-password' onSubmit={handleSubmit} title='Восстановление пароля'>
        <InputSection padding='pt-6'>
          <PasswordInput 
            name={'new-passord'}
            placeholder={'Введите новый пароль'}
            onChange={e => setNewPassword(e.target.value)} 
            value={newPassword} />
        </InputSection>
        <InputSection padding='pt-6'>
          <Input
            name={'token'}
            type={'text'}
            placeholder={'Введите код из письма'}
            onChange={e => setToken(e.target.value)}
            value={token}
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