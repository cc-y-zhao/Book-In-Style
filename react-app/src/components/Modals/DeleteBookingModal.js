import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBooking from '../DeleteBooking';

function DeleteBookingModal({booking, setEditBookingModal}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='cancel-appt' onClick={() => setShowModal(true)}>Cancel Appointment</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBooking booking={booking} setShowModal={setShowModal} setEditBookingModal={setEditBookingModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteBookingModal;
