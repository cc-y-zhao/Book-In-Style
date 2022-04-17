import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateBookingForm from '../Forms/BookingForm';

import '../Services/Services.css';

function BookingModal({service, userId, businessId, businessName}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='see-times-btn' onClick={() => setShowModal(true)}>See Times</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateBookingForm setShowModal={setShowModal} service={service} userId={userId} businessId={businessId} businessName={businessName}/>
        </Modal>
      )}
    </>
  );
}

export default BookingModal;
