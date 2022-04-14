
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginModal from '../Modals/LoginModal';
import ProfileButtonModal from './ProfileButtonModal';
import './NavBar.css'


const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='logged-in-div'>
          <NavLink to='/businesses/new' className='set-up-business'>Set Up My Business</NavLink>
          <span className='welcome-msg nav-element'>Welcome, {sessionUser.first_name}!</span>
          <ProfileButtonModal user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className='logged-out-div'>
          <div className='login-nav'><LoginModal /></div>
          <div><NavLink className='signup-nav' to='/sign-up' exact={true}>Sign Up</NavLink></div>
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
