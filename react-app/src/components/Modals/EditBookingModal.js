import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from '../Forms/EditBookingForm';

function EditBookingModal({booking}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>Edit</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBookingForm setShowModal={setShowModal} booking={booking}/>
        </Modal>
      )}
    </>
  );
}

export default EditBookingModal;
