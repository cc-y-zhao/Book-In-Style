import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../auth/SignUpForm';

import '../Navigation/NavBar.css'

function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='login-nav' onClick={() => setShowModal(true)}>Sign Up</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;
