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
import { useDispatch, useSelector } from 'react-redux';
import { getInitialIngredients } from '../../services/actions/initialIngredients';
import OrderInfo from '../OrderInfo/OrderInfo';
import { OrderInfoPage } from '../../pages/OrderInfoPage/OrderInfoPage';


const App = () => {

  const orders = useSelector(store => store.ws.orders)
  
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;


  useEffect(() => {
    dispatch(getInitialIngredients())
    dispatch(checkUserAuth())
  }, [dispatch]);

  const closeModal = useCallback(() => {
    history.goBack()
  }, [history]);

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <ProtectedRoute path='/profile' exact>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path='/login' exact>
          <LoginPage />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path='/register' exact>
          <RegisterPage />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path='/forgot-password' exact>
          <ForgotPasswordPage />
        </ProtectedRoute>
        <ProtectedRoute onlyUnAuth={true} path='/reset-password' exact>
          <ResetPasswordPage />
        </ProtectedRoute>
        <Route path='/ingredients/:ingredientId' exact>
          <IngredientDetailsPage />
        </Route>
        <Route path='/feed' exact>
          <FeedPage />
        </Route>
        <Route path='/feed/:orderNumber' exact>
          <OrderInfoPage />
        </Route>
      </Switch>

      {background &&
        <Route path='/ingredients/:ingredientId' exact>
          <Modal onCloseClick={closeModal}>
            <IngredientDetails />
          </Modal>
        </Route>
      }

      {background &&
        <Route path='/feed/:orderNumber' exact>
          <Modal onCloseClick={closeModal}>
            <OrderInfo orders={orders}/>
          </Modal>
        </Route>
      }
    </>
  );
}

export default App;