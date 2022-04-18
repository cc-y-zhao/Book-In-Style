import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from '../Forms/ReviewForm';

import '../Navigation/NavBar.css'

function AddReviewModal({businessId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)}>Add Review</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm setShowModal={setShowModal} businessId={businessId}/>
        </Modal>
      )}
    </>
  );
}

export default AddReviewModal;
