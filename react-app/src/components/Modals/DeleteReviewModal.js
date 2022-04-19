import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReview from '../DeleteReview';

import '../Forms/EditReviewForm/EditReviewForm.css';

function DeleteReviewModal({setEditReviewModal, businessId, reviewId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-review-modal-btn' onClick={() => setShowModal(true)}>Delete Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReview setEditReviewModal={setEditReviewModal} businessId={businessId} reviewId={reviewId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;

// className='navlink nav-element login-nav login-btn-nav'
