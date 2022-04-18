import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from '../Forms/EditReviewForm';

import '../Navigation/NavBar.css'

function EditReviewModal({review}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm setShowModal={setShowModal} origReview={review}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewModal;
