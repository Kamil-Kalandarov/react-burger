import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';
import { LoginPage, MainPage } from '../../pages/pages';


const App = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path='/' exact={true}>
          <MainPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;