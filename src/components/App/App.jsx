import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import { 
  ProfilePage,
  MainPage, 
  LoginPage,
  RegisterPage, 
  ForgotPasswordPage,
  ResetPasswordPage,
  IngredientDetailsPage
} from '../../pages/pages';
import { checkUserAuth } from '../../services/actions/getUser';
import { useDispatch, useSelector } from 'react-redux';
import { getInitialIngredients } from '../../services/actions/initialIngredients';


const App = () => {

  const dispatch = useDispatch()
  /* const ingredients = useSelector(store => store.initialIngredients.ingredients) */

  useEffect(() => {
    dispatch(getInitialIngredients())
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
        <Route path='/ingredients/:ingredientId' exact={true}>
          <IngredientDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;