import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navigation/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import CreateBusinessForm from './components/Forms/BusinessForm';
import EditBusinessForm from './components/Forms/EditBusinessForm';
import BusinessPage from './components/BusinessPage';
// import BusinessesPage from './components/Businesses';
import CategoryPage from './components/CategoryPage';
import HomePage from './components/HomePage';
import ErrorPage from './components/Errors/ErrorPage';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';

import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className='app-container'>
        <NavBar />
        <Switch>
          <Route path='/' exact={true}>
            <HomePage />
          </Route>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          {/* <Route path='/businesses' exact={true}>
            <BusinessesPage />
          </Route> */}
          <Route path='/businesses/categories/:category' exact={true}>
            <CategoryPage />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/businesses/new' exact={true} >
            <CreateBusinessForm/>
          </ProtectedRoute>
          <ProtectedRoute path='/businesses/:businessId/edit' exact={true} >
            <EditBusinessForm/>
          </ProtectedRoute>
          <ProtectedRoute path='/profile' exact={true} >
            <Profile/>
          </ProtectedRoute>
          <Route path='/businesses/:businessId' exact={true}>
            <BusinessPage />
          </Route>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path='/' exact={true} >
            <h1>My Home Page</h1>
          </ProtectedRoute>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
      <AboutMe/>
    </BrowserRouter>
  );
}

export default App;
