import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";

import { loadBusiness, deleteBusiness } from "../../store/businesses";

const DeleteBusiness = ({businessId, setShowModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedBusiness;

    console.log('business in in frontend---------'. businessId)

    deletedBusiness = await dispatch(deleteBusiness(businessId));

    if (deletedBusiness) {
      setShowModal(false);
      window.alert('Your listing has been deleted');
      return history.push('/');
    }
  }

  return (
    <>
      <div>
        <h3>Are you sure you want to remove your business from Book-In-Style?</h3>
        <div>
          <button onClick={(e) => handleDelete(e)}>Yes, remove this listing</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default DeleteBusiness;
