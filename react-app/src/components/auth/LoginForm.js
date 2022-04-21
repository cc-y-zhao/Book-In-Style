import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import './LoginForm.css';

const LoginForm = ({setShowModal}) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  // const handleDemoLogin = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   const credential = 'jeff_winger';
  //   const password = 'password';

  //   return dispatch(sessionActions.login({ credential, password })).catch(
  //     async (res) => {
  //       const data = await res.json();
  //       if (data && data.errors) setErrors(data.errors);
  //     }
  //   );
  // };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <div className='login-modal'>
      <h3 className='sign-in-title'>Sign in for a better experience</h3>
      <form onSubmit={onLogin}>
        <div className='login-form-container'>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <div>
              {/* <label htmlFor='email'>Email: </label> */}
            </div>
            <input
              className='input-sign-in email-field'
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <div>
              {/* <label htmlFor='password'>Password: </label> */}
            </div>
            <input
              className='input-sign-in'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          <div>
            <button className='sign-in-btn' type='submit'>Sign In</button>
          </div>
          </div>
          <div>Don't have an account? Join here!</div>

        </div>
      </form>
    </div>
    </>
  );
};

export default LoginForm;
