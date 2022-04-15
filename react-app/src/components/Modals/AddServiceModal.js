import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ServiceForm from '../Forms/ServiceForm';

import '../Navigation/NavBar.css'

function AddServiceModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>Add Service</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ServiceForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default AddServiceModal;
