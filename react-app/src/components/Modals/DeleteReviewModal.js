import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReview from '../DeleteReview';

import '../Forms/EditReviewForm/EditReviewForm.css';

function DeleteReviewModal({setEditReviewModal, businessId, reviewId, userId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        class="fa-solid fa-trash-can"
        onClick={() => setShowModal(true)}
      >
      </i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteReview setEditReviewModal={setEditReviewModal} businessId={businessId} reviewId={reviewId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteReviewModal;
