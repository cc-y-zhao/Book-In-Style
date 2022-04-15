import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../auth/LoginForm';

import '../Navigation/NavBar.css'

function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>Log In</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
