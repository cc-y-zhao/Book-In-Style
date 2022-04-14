
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import ProfileButtonModal from './ProfileButtonModal';

const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButtonModal user={sessionUser} />
        <span className='welcome-msg nav-element'>Welcome, {sessionUser.first_name}!</span>
        <div>
          <LogoutButton />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <nav>
      <div>
        <NavLink className='navlink nav-element nav-home' exact to="/">
          <img
            className='logo-in-nav'
            src='/images/logo.ico'
            alt='BiS logo'
            height='40px'
            width='150px'
          />
        </NavLink>
      </div>
      {sessionLinks}
    </nav>
  );
}

export default NavBar;
