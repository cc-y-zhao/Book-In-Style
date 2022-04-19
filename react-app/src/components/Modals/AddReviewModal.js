import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from '../Forms/ReviewForm';

import '../Navigation/NavBar.css'

function AddReviewModal({businessId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='add-review-modal' onClick={() => setShowModal(true)}>Add Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm setShowModal={setShowModal} businessId={businessId}/>
        </Modal>
      )}
    </>
  );
}

export default AddReviewModal;
