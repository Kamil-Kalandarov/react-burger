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
import Preloader from "../../components/Preloader/Preloader";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/hooks";
import { resetPassword } from "../../services/actions/resetPassword";


export const ResetPasswordPage = () => {

  const dispatch = useDispatch()
  const { resetPasswordRequest, resetPasswordSuccess} = useSelector(store => store.user)

  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');


  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();   
    dispatch(resetPassword(newPassword, token))
  }
    
  const buttonDisabled = newPassword && token ? false : true;

  if (resetPasswordSuccess) {
    return (
      <Redirect to={{pathname: '/login'}}/>
    )
  };

  return (
    <main className={styles.resetPasswordPage}>
      {resetPasswordRequest ? 
        (<Preloader />) :
        (<Form name='reset-password' onSubmit={handleSubmit} title='Сброс пароля'>
          <InputSection padding='pt-6'>
            <PasswordInput 
              name={'new-passord'}
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