import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteBusiness from '../DeleteBusiness';

import '../Forms/EditBusinessForm/EditBusiness.css';

function DeleteBusinessModal({businessId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-biz-btn' onClick={() => setShowModal(true)}>Delete Listing</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteBusiness businessId={businessId} showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteBusinessModal;
