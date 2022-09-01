import React, { useState, useCallback } from "react";
import styles from './forgotPasswordPage.module.css';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link, Redirect } from "react-router-dom";
import { emailRegExp } from "../../utils/validation";
import Preloader from '../../components/Preloader/Preloader'
import { forgotPassword } from "../../services/actions/forgotPassword";
import { useDispatch } from "react-redux";

export const ForgotPasswordPage = () => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [canResetPassword, setCanResetPassword] = useState(false)

  const emailValidation = useCallback((e) => {
    const newEmailValue = e.target.value
    setEmail(newEmailValue)
    newEmailValue && setEmailError(!emailRegExp.test(newEmailValue));
  }, [email]);


  const handleSubmit = useCallback((e) => {
    e.preventDefault(e)
    dispatch(forgotPassword(email))
    setCanResetPassword(true)
  });

  const buttonDisabled = email && !emailError ? false : true

  if(canResetPassword) {
    return (
      <Redirect to={'/reset-password'} />
    )
  }

  return (
    <main className={styles.forgotPasswordPage}>
      {isLoading ? 
        (<Preloader />) :
        (<Form name='login' onSubmit={handleSubmit} title='Восстановление пароля'>
          <InputSection padding='pt-6'>
            <Input
            name={'email'}
            type={'email'}
            placeholder={'укажите e-mail'}
            onChange={emailValidation}
            value={email}
            error={emailError}
            errorText={'email некорректный'}
            size={'default'}
          />
          </InputSection>
          <div className={`${styles.forgotPasswordPage__submitBtnContainer} pt-6`}>
            <Button type="primary" size="medium" disabled={buttonDisabled}>Восстановить</Button>
          </div>
          <div className={`${styles.forgotPasswordPage__autorisationInfo} pt-20`}>
            <p className='text text_type_main-default'>Вспомнили пароль?
              <Link className={styles.forgotPasswordPage__link} to='/login'>Войти</Link>
            </p>
          </div>
        </Form>
        )
      }
    </main>
  )
}