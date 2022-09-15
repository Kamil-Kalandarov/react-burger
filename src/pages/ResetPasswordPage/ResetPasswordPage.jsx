import React, { useState, useCallback } from "react";
import styles from './resetPasswordPage.module.css';
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../../services/api";
import { 
  Input, 
  PasswordInput,
  Button 
  } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link } from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ResetPasswordPage = () => {

  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordReseted, setIsPasswordReseted] = useState(false);

  const forgotPasswordSuccess = useSelector(store => store.user.forgotPasswordSuccess)

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault(e);
      setIsLoading(true)
      fetch(`${apiConfig.baseUrl}/password-reset/reset`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({
          "password": newPassword,
          "token": token
        })
      })
      .then(checkResponse)
      .then(setIsLoading(false), setIsPasswordReseted(true))
      .catch((err) => console.log(err.status))
    }
  );

  const buttonDisabled = newPassword && token ? false : true;

  if (isPasswordReseted) {
    return (
      <Redirect to={{pathname: '/login'}}/>
    )
  };

  if (!forgotPasswordSuccess) {
    return (
      <Redirect to={"/forgot-password"} />
    )
  }


  return (
    <main className={styles.resetPasswordPage}>
      {isLoading ? 
        (<Preloader />) :
        (<Form name='reset-password' onSubmit={handleSubmit} title='Сброс пароля'>
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
              size={'default'}
            />
          </InputSection>
          <div className={`${styles.resetPasswordPage__submitBtnContainer} pt-6`}>
            <Button type="primary" size="medium" disabled={buttonDisabled}>Восстановить</Button>
          </div>
          <div className={`${styles.resetPasswordPage__autorisationInfo} pt-20`}>
            <p className='text text_type_main-default'>Вспомнили пароль?
              <Link className={styles.resetPasswordPage__link} to='/login'>Войти</Link>
            </p>
          </div>
        </Form>
        )
      }
    </main>
  )
}