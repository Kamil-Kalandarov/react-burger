import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import { 
  ProfilePage,
  MainPage, 
  LoginPage,
  RegisterPage, 
  ForgotPasswordPage,
  ResetPasswordPage
} from '../../pages/pages';
import { checkUserAuth, getUser, refreshToken } from '../../services/actions/getUser';
import { useDispatch } from 'react-redux';


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAuth())
  }, [dispatch])

  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path='/' exact={true}>
          <MainPage />
        </Route>
        <Route path='/profile' exact={true}>
          <ProfilePage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>
        <Route path='/register' exact={true}>
          <RegisterPage />
        </Route>
        <Route path='/forgot-password' exact={true}>
          <ForgotPasswordPage />
        </Route>
        <Route path='/reset-password' exact={true}>
          <ResetPasswordPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;