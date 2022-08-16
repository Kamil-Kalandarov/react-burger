import React, { useCallback, useEffect, useState } from "react";
import styles from './profilePage.module.css';
import Form from "../../components/Form/Form";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import InputSection from "../../components/Form/InputSection/InputSection";
import { EmailInput, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/actions/logout";
import { updateUserData } from "../../services/actions/updateUserData";
import Preloader from "../../components/Preloader/Preloader";
import Modal from "../../components/Modal/Modal";
import RequestInfo from "../../components/RequestInfo/RequestInfo";

export const ProfilePage = () => {

  const user = useSelector(store => store.getUser.user)
  const { updateUserRequest, updateUserSuccess, updateUserFailed } = useSelector(store => store.updateUserData)
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [buttonIsVisible, setButtonsVisible] = useState(false)
  const [requestInfo, setRequestInfo] = useState(false)

  useEffect(() => {
    setUserName(user.name)
    setEmail(user.email)
  })

  const exitProfile = useCallback(() => {
    dispatch(logout())
  });

  const onInputNameChange = useCallback((e) => {
      const newNameValue = e.target.value
      setUserName(newNameValue)
      setButtonsVisible(true)
    }
  );

  const onInputEmailChange = useCallback((e) => {
      const newEmailValue = e.target.value
      setEmail(newEmailValue)
      setButtonsVisible(true)
    }
  );

  const onInputPasswordChange = useCallback((e) => {
      const newPasswordValue = e.target.value
      setPassword(newPasswordValue)
      setButtonsVisible(true)
    }
  );

  const handleSubmit = useCallback((e) => {
      e.preventDefault()
      dispatch(updateUserData(userName, email, password))
      setRequestInfo(true)
    },
    [dispatch, userName, email, password]
  );

  const handleCancel = useCallback((e) => {
      e.preventDefault()
      setUserName(user.name)
      setEmail(user.email)
      setPasswordError('')
      setButtonsVisible(false)
    }
  )

  const userNameValidation = useCallback(() => {
    userName.length < 3 ? setUserNameError(true) : setUserNameError(false)
  }, [userName]);

  const passwordValidation = useCallback(() => {
    password.length < 6 ? setPasswordError(true) : setPasswordError(false)
  }, [password])

  const onNameFocus = useCallback(() => {
    setUserNameError(false);
  });
  const onPasswordFocus = useCallback(() => {
    setPasswordError(false);
  });
  
  const buttonDisabled = email && userName && password && !userNameError 
    && !passwordError && password.length >= 6 ? false : true

  const handleClose = useCallback(() => {
    setRequestInfo(false)
  })

  return (
    <main className={styles.profilePage}>
      <div>
        <ul className={styles.profilePage__navigationList}>
          <li>
            <NavLink 
              to='/profile' 
              className={`${styles.profilePage__navigationLink} text text_type_main-medium`}
              activeClassName={styles.profilePage__navigationLink_active}>Профиль</NavLink>
          </li>
          <li className="pt-9">
            <NavLink 
              to='/profile/orders' 
              className={`${styles.profilePage__navigationLink} text text_type_main-medium`}
              activeClassName={styles.profilePage__navigationLink_active}>История заказов</NavLink>
          </li>
          <li className="pt-9">
            <NavLink 
              to='/login' 
              onClick={exitProfile}
              className={`${styles.profilePage__navigationLink} text text_type_main-medium`}
              activeClassName={styles.profilePage__navigationLink_active}>Выход</NavLink>
          </li>
        </ul>
        <p className={`${styles.profilePage__navigationInfo} text text_type_main-default text_color_inactive pt-20`}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      {updateUserRequest && !updateUserFailed ? (<Preloader />) :
        (<Form name='profile' onSubmit={handleSubmit}>
          <InputSection>
            <Input
              name={'userName'}
              type={'text'}
              placeholder={'Имя'}
              onChange={onInputNameChange}
              onFocus={onNameFocus}
              onBlur={userNameValidation}
              value={userName}
              error={userNameError}
              errorText={'имя слишком короткое'}
              size={'default'}
              icon={'EditIcon'}
            />
          </InputSection>
          <InputSection padding='pt-6'>
            <EmailInput 
                name={'email'} 
                onChange={onInputEmailChange}
                value={email} 
              />
          </InputSection>
          <InputSection padding='pt-6 pb-6'>
            <Input
              name={'password'}
              type={'text'}
              placeholder={'Пароль'}
              onChange={onInputPasswordChange}
              onFocus={onPasswordFocus}
              onBlur={passwordValidation}
              value={password}
              error={passwordError}
              errorText={'Пароль слишком короткий'}
              size={'default'}
              icon={'EditIcon'}
            />
          </InputSection>
          {buttonIsVisible && (
          <div className={styles.profilePage__formButtons}>
            <Button type='secondary' size='medium' onClick={handleCancel}>Отмена</Button>
            <Button type='primary' size='medium' disabled={buttonDisabled}>Сохранить</Button>
          </div> 
          )}     
        </Form>)
      }
      {updateUserSuccess && requestInfo &&
      (
        <Modal onCloseClick={handleClose}>
          <RequestInfo />
        </Modal>
      )
      }
    </main>
  )
}