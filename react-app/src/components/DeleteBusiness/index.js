import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteBusiness } from "../../store/businesses";

const DeleteBusiness = ({businessId, setShowModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedBusiness;

    deletedBusiness = await dispatch(deleteBusiness(businessId));

    if (deletedBusiness) {
      setShowModal(false);
      window.alert('Your listing has been deleted');
      return history.push('/');
    }
  }

  return (
    <>
      <div className='delete-review-modal'>
        <h4>Are you sure you want to remove your business from Book-In-Style?</h4>
        <div>
          <button className='yes-sure' onClick={(e) => handleDelete(e)}>Yes, remove this listing</button>
          <button onClick={() => setShowModal(false)}>No, nevermind</button>
        </div>
      </div>
    </>
  );
};

export default DeleteBusiness;
