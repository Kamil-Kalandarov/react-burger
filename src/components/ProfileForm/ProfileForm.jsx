import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../../services/actions/updateUserData";
import styles from './profileForm.module.css';
import { Input, EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../Form/Form";
import InputSection from "../Form/InputSection/InputSection";
import Preloader from "../Preloader/Preloader";
import Modal from "../Modal/Modal";
import RequestInfo from "../RequestInfo/RequestInfo";

const ProfileFrom = () => {

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
    <>
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
        <div className={styles.profileForm__buttons}>
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
    </>
  )
};

export default ProfileFrom;