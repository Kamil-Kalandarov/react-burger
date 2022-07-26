import React, { useState, useCallback } from "react";
import styles from './forgotPasswordPage.module.css';
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/Form/Form";
import InputSection from "../../components/Form/InputSection/InputSection";
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';

export const ForgotPasswordPage = () => {

  const [email, setEmail] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <main className={styles.forgotPasswordPage}>
      <Form name='login' onSubmit={handleSubmit(onSubmit)} title='Восстановление пароля'>
        <InputSection padding='pt-6'>
          <Input
          {...register('e-mail', {
            required: true,
          })}
          type={'email'}
          placeholder={'укажите e-mail'}
          onChange={e => setEmail(e.target.value)}
          value={email}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          />
        </InputSection>
        <div className={`${styles.forgotPasswordPage__submitBtnContainer} pt-6`}>
          <Button type="primary" size="medium">Восстановить</Button>
        </div>
        <div className={`${styles.forgotPasswordPage__autorisationInfo} pt-20`}>
          <p className='text text_type_main-default'>Вспомнили пароль?
            <Link className={styles.forgotPasswordPage__link} to='/login'>Войти</Link>
          </p>
        </div>
      </Form>
    </main>
  )
}