import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBookingForm from '../Forms/EditBookingForm';

import '../Profile/Profile.css';

function EditBookingModal({booking}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='modify-booking-btn' onClick={() => setShowModal(true)}>Modify</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBookingForm setShowModal={setShowModal} booking={booking}/>
        </Modal>
      )}
    </>
  );
}

export default EditBookingModal;
