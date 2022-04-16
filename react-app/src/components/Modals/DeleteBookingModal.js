import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBooking from '../DeleteBooking';

function DeleteBookingModal({booking}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='navlink nav-element login-nav login-btn-nav' onClick={() => setShowModal(true)}>Cancel Appointment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBooking booking={booking} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookingModal;
