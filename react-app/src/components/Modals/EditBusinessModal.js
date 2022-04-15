import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBusinessForm from '../Forms/EditBusinessForm';

import '../Navigation/NavBar.css'

function EditBusinessModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>Edit Listing</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBusinessForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditBusinessModal;
