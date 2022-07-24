import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import { 
  LoginPage, 
  MainPage, 
  SigninPage, 
  ForgotPasswordPage,
  ResetPasswordPage
} from '../../pages/pages';


const App = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path='/' exact={true}>
          <MainPage />
        </Route>
        <Route path='/log-in' exact={true}>
          <LoginPage />
        </Route>
        <Route path='/sign-in' exact={true}>
          <SigninPage />
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