import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';
import { useSelector } from '../../services/hooks';
import Preloader from '../Preloader/Preloader';

type ProtectedRouteProps = {
  onlyUnAuth?: boolean;
} & RouteProps;


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ onlyUnAuth = false, children, ...rest }) => {

  const user  = useSelector(store => store.user.user);
  const userAuthCheck = useSelector(store => store.user.userAuthCheck)
  const location = useLocation<{ from: Location}>();

  if (!userAuthCheck) {
    <Preloader />
  }

  if (onlyUnAuth && user) {
    const {from} = location.state || {from: {pathname: '/'}} 
    return (
      <Route {...rest}>
        <Redirect to={from} />
     </Route>
    )
  }

  if (!onlyUnAuth && !user) {
    return (
      <Route {...rest}>
        <Redirect to={{pathname: '/login', state: {from: location}}} />
     </Route>
    )
  }

  return (
    <Route {...rest}>{children}</Route>
  )
}

export default ProtectedRoute;