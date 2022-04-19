import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ServiceForm from '../Forms/ServiceForm';

import '../Navigation/NavBar.css'

function AddServiceModal({businessId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className='add-service-modal'
        onClick={() => setShowModal(true)}>
        Add Service
        <span className='space-in-edit-listing-modal'></span>
        <i class="fa-solid fa-pencil"></i>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ServiceForm setShowModal={setShowModal} businessId={businessId}/>
        </Modal>
      )}
    </>
  );
}

export default AddServiceModal;
