import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBusinessForm from '../Forms/EditBusinessForm';

import '../Navigation/NavBar.css'

function EditBusinessModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className='edit-listing-modal'
        onClick={() => setShowModal(true)}>
        Edit Listing
        <span className='space-in-edit-listing-modal'></span>
        <i class="fa-solid fa-pencil"></i>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBusinessForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditBusinessModal;
