
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginModal from '../Modals/LoginModal';
import SignUpModal from '../Modals/SignUpModal';
import ProfileButtonModal from './ProfileButtonModal';
import CreateBusinessModal from '../Modals/CreateBusinessModal';
import './NavBar.css'


const NavBar = () => {

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className='logged-in-div'>
          <div className='set-up-business'>
            <NavLink className='prof-modal-navlink' exact to="/profile">My Profile</NavLink>
          </div>
          <div className='set-up-business'><CreateBusinessModal/></div>
          {/* <NavLink to='/businesses/new' className='set-up-business'>Set Up My Business</NavLink> */}
          <span className='welcome-msg nav-element'>Welcome, {sessionUser.first_name}!</span>
          <ProfileButtonModal user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className='logged-out-div'>
          <NavLink className='login-nav no-underline' exact to="/login">
            Log In
          </NavLink>
          <NavLink className='signup-nav no-underline' exact to="/sign-up">
            Sign Up
          </NavLink>
          {/* <div className='signup-nav'><SignUpModal /></div> */}
        </div>
      </>
    );
  }

  return (
    <nav>
      <div className='nav-container'>
        <NavLink className='navlink nav-element nav-home' exact to="/">
          <img
            className='logo-in-nav'
            src='../../images/logo.png'
            alt='BiS logo'
            height='40px'
            width='150px'
          />
        </NavLink>
        {sessionLinks}
      </div>
    </nav>
  );
}

export default NavBar;


{/* <div className='signup-nav'><NavLink to='/sign-up' exact={true}>Sign Up</NavLink></div> */}
