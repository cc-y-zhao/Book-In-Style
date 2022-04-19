import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteReview, loadReviewsByBusiness } from "../../store/reviews";

import './DeleteReview.css';

const DeleteReview = ({businessId, reviewId, setShowModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedReview;

    deletedReview = await dispatch(deleteReview(reviewId));

    if (deletedReview) {
      await dispatch(loadReviewsByBusiness(businessId));
      await setShowModal(false);
      return window.alert('Your review has been deleted');
      // return history.push('/');
    }
  }

  return (
    <>
      <div className='delete-review-modal'>
        <h4>Are you sure you want to delete this review?</h4>
        <div>
          <button className='yes-sure' onClick={(e) => handleDelete(e)}>Yes, I'm sure</button>
          <button onClick={() => setShowModal(false)}>No, nevermind</button>
        </div>
      </div>
    </>
  );
};

export default DeleteReview;
