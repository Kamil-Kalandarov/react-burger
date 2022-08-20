import React, { useCallback, useEffect, useState } from "react";
import { store } from "../../services/store";
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

  const {user, updateUserRequest, updateUserSuccess, updateUserFailed } = useSelector(store => store.user)
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonIsVisible, setButtonsVisible] = useState(false)
  const [requestInfo, setRequestInfo] = useState(false)

  useEffect(() => {
    setUserName(user.name)
    setEmail(user.email)
  }, [])

  const exitProfile = useCallback(() => {
    dispatch(logout())
  });

  const onInputNameChange = (e) => {
      const newNameValue = e.target.value
      setUserName(newNameValue)
      setButtonsVisible(true)
  };

  const onInputEmailChange = (e) => {
      const newEmailValue = e.target.value
      setEmail(newEmailValue)
      setButtonsVisible(true)
  };

  const onInputPasswordChange = (e) => {
      const newPasswordValue = e.target.value
      setPassword(newPasswordValue)
      setButtonsVisible(true)
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(updateUserData(userName, email, password))
      setRequestInfo(true)
  };

  const handleCancel = useCallback((e) => {
      e.preventDefault()
      setUserName(user.name)
      setEmail(user.email)
      setPassword('')
      setButtonsVisible(false)
    }
  );

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
              value={userName}
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
              value={password}
              errorText={'Пароль слишком короткий'}
              size={'default'}
              icon={'EditIcon'}
            />
          </InputSection>
          {buttonIsVisible && (
          <div className={styles.profilePage__formButtons}>
            <Button type='secondary' size='medium' onClick={handleCancel}>Отмена</Button>
            <Button type='primary' size='medium'>Сохранить</Button>
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