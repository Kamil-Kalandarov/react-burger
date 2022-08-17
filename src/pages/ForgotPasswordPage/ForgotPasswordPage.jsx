import React, { useState, useCallback } from "react";
import styles from './forgotPasswordPage.module.css';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link, Redirect } from "react-router-dom";
import { apiConfig } from "../../constans/apiConfig";
import { checkResponse } from "../../services/api";
import { emailRegExp } from "../../utils/validation";
import Preloader from '../../components/Preloader/Preloader'

export const ForgotPasswordPage = () => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [canResetPassword, setCanResetPassword] = useState(false)

  const emailValidation = useCallback((e) => {
    const newEmailValue = e.target.value
    setEmail(newEmailValue)
    newEmailValue && setEmailError(!emailRegExp.test(newEmailValue));
  }, [email]);

 /*  const onEmailFocus = useCallback(() => {
    setEmailError(false);
  }); */

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault(e);
      setIsLoading(true)
      fetch(`${apiConfig.baseUrl}/password-reset`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({
          'email': email
        })
      })
      .then(checkResponse)
      .then(setIsLoading(false))
      .then(setCanResetPassword(true))
      .then((response) => console.log(response))
      .catch((err) => console.log(err.status))
    }
  );

  const buttonDisabled = email && !emailError ? false : true

  if(canResetPassword) {
    return (
      <Redirect to={{pathname: '/reset-password'}}/>
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
            /* onFocus={onEmailFocus}
            onBlur={emailValidation} */
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