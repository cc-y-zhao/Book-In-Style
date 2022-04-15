import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import BusinessHoursForm from '../Forms/BusinessHours';

import '../Navigation/NavBar.css'

function EditBusinessHoursModal({businessId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>Update Hours</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BusinessHoursForm setShowModal={setShowModal} businessId={businessId}/>
        </Modal>
      )}
    </>
  );
}

export default EditBusinessHoursModal;
