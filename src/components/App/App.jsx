import React, { useCallback, useEffect } from 'react';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { 
  ProfilePage,
  MainPage, 
  FeedPage,
  LoginPage,
  RegisterPage, 
  ForgotPasswordPage,
  ResetPasswordPage,
  IngredientDetailsPage
} from '../../pages/pages';
import { checkUserAuth } from '../../services/actions/getUser';
import { useDispatch } from 'react-redux';
import { getInitialIngredients } from '../../services/actions/initialIngredients';



const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
/*   console.log('location', location); */
  const background = location.state?.background
 /*  console.log('background', background) */

  useEffect(() => {
    dispatch(getInitialIngredients())
    dispatch(checkUserAuth())
  }, [dispatch])

  const closeIngredientModal = useCallback((e) => {
    history.goBack()
  }, [history])

  return (
    <>
      <AppHeader />
      <Switch background={background || location}>
        <Route path='/' exact={true}>
          <MainPage />
        </Route>
        <Route path='/feed' exact={true}>
          <FeedPage />
        </Route>
        <ProtectedRoute path='/profile' exact={true}>
          <ProfilePage />
        </ProtectedRoute>
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
      {background &&
        <Route path='/ingredients/:ingredientId' exact={true}>
          <Modal onCloseClick={closeIngredientModal}>
            <IngredientDetails />
          </Modal>
        </Route>
      }
    </>
  );
}

export default App;