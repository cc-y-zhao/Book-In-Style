import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateBookingForm from '../Forms/BookingForm';

function BookingModal({service, userId, businessId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>See Times</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateBookingForm setShowModal={setShowModal} service={service} userId={userId} businessId={businessId}/>
        </Modal>
      )}
    </>
  );
}

export default BookingModal;
