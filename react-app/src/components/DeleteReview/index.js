import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteReview, loadReviewsByBusiness } from "../../store/reviews";

const DeleteReview = ({setEditReviewModal, businessId, reviewId, setShowModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedReview;

    deletedReview = await dispatch(deleteReview(reviewId));

    if (deletedReview) {
      await dispatch(loadReviewsByBusiness(businessId));
      await setShowModal(false);
      await setEditReviewModal(false);
      return window.alert('Your review has been deleted');
      // return history.push('/');
    }
  }

  return (
    <>
      <div>
        <h3>Are you sure you want to delete this review?</h3>
        <div>
          <button onClick={(e) => handleDelete(e)}>Yes, I'm sure</button>
          <button onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default DeleteReview;
