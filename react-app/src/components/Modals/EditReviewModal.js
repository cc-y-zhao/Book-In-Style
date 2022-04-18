import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from '../Forms/ReviewForm';

import '../Navigation/NavBar.css'

function EditReviewModal({businessId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm setShowModal={setShowModal} businessId={businessId}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;
