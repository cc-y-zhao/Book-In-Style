import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateBusinessForm from '../Forms/BusinessForm'

import '../Navigation/NavBar.css'

function CreateBusinessModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='setup-biz-link' onClick={() => setShowModal(true)}>Set Up My Business</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateBusinessForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateBusinessModal;
