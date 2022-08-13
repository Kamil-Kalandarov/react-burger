import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ children, ...rest }) => {

  const user  = useSelector(store => store.getUser.user);
  const userAuthCheck = useSelector(store => store.getUser.userAuthCheck)
  const location = useLocation();


  return (
    <Route
      {...rest}
      render={() =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );

  /* if (!userAuthCheck) {
    return <Preloader />
  }

  if (user) {
    return  <Redirect to='/profile' />
  }

  if (!user) {
    return <Redirect to={{
      pathname: '/login',
      state: {from: location}
    }}/>
  }

  return <Route {...rest}>{children}</Route> */

}

export default ProtectedRoute;