import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessOwner, setBusinessOwner] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {

    e.preventDefault();
    if (password === repeatPassword) {
      const payload = {
        firstName,
        lastName,
        email,
        phone,
        businessOwner,
        imageURL,
        password,
      }
      const data = await dispatch(signUp(payload));
      if (data) {
        return setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhone = (e) => {
    setPhone(e.target.value);
  };

  const updateBusinessOwner = (e) => {
    setBusinessOwner(true);
  };

  const updateImageURL = (e) => {
    setImageURL(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className>
      <form className='signup-form-wrapper' onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <div>First Name:</div>
          <input
            type='text'
            name='firstName'
            onChange={updateFirstName}
            value={firstName}
            required={true}
          ></input>
        </div>
        <div>
          <div>Last Name:</div>
          <input
            type='text'
            name='lastName'
            onChange={updateLastName}
            value={lastName}
            required={true}
          ></input>
        </div>
        <div>
          <div>Email:</div>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            required={true}
          ></input>
        </div>
        <div>
          <div>Phone:</div>
          <input
            type='text'
            name='phone'
            onChange={updatePhone}
            value={phone}
            required={true}
          ></input>
        </div>
        <div>
          <div>Profile Picture: </div>
          <input
            type='text'
            name='image_url'
            onChange={updateImageURL}
            value={imageURL}
          ></input>
        </div>
        <div>
          <div>Password: </div>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            required={true}
          ></input>
        </div>
        <div>
          <div>Repeat Password: </div>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          <label>I want to list my business: </label>
          <input
            type='checkbox'
            name='businessOwner'
            onChange={updateBusinessOwner}
            value={businessOwner}
          ></input>
        </div>



        <button className='signup-btn' type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
