import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from '../Forms/EditReviewForm';

import '../Navigation/NavBar.css'

function EditReviewModal({review, services, businessName}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        class="fa-solid fa-pencil"
        onClick={() => setShowModal(true)}
      >
      </i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm setShowModal={setShowModal} origReview={review} services={services} businessName={businessName}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;
