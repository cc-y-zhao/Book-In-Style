import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBusiness from '../DeleteBusiness';

function DeleteBusinessModal({businessId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='navlink nav-element login-nav login-btn-nav' onClick={() => setShowModal(true)}>Delete Listing</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBusiness businessId={businessId} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteBusinessModal;
