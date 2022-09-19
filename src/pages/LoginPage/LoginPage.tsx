import React, { useCallback, useState, FC, FormEvent, ChangeEvent } from "react";
/* import { useSelector, useDispatch } from 'react-redux'; */
import { useSelector, useDispatch } from "../../services/hooks";
import styles from './loginPage.module.css';
import { 
  Input, 
  PasswordInput,
  Button 
  } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../services/actions/login";
import Preloader from "../../components/Preloader/Preloader";
import { emailRegExp } from "../../utils/validation";


declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
};

export const LoginPage = () => {

  const { user, loginRequest } = useSelector(store => store.user)
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(login(email, password))
    },
    [dispatch, email, password]
  );

  const emailValidation = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newEmailValue = e.target.value
    setEmail(newEmailValue)
    newEmailValue && setEmailError(!emailRegExp.test(newEmailValue));
  }, [email]);

  const buttonDisabled = email && password && !emailError ? false : true

  if(user !== null) {
    return (
      <Redirect to={{pathname: '/profile'}}/>
    )
  }

  return (
    <main className={styles.loginPage}>
      {loginRequest ?
        (<Preloader />) :
        (<Form name='login' onSubmit={handleSubmit} title='Вход'>
          <InputSection padding='pt-6'>
            <Input
              name={'email'}
              placeholder={'e-mail'}
              onChange={emailValidation}
              type={'email'}
              value={email}
              error={emailError}
              errorText={'email некорректный'}
              size={'default'}
            />
          </InputSection>
          <InputSection padding='pt-6'>
            <PasswordInput
              name={'password'}
              onChange={e => setPassword(e.target.value)} 
              value={password} 
            />
          </InputSection>
          <div className={`${styles.loginPage__submitBtnContainer} pt-6`}>
            <Button type="primary" size="medium" disabled={buttonDisabled}>Войти</Button>
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
        )
      }
    </main>
  )
}