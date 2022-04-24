import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteReview, loadReviewsByBusiness, loadReviewsByUser } from "../../store/reviews";

import './DeleteReview.css';

const DeleteReview = ({businessId, reviewId, setShowModal}) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user?.id);


  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedReview;

    console.log('user id --------------', userId)

    deletedReview = await dispatch(deleteReview(reviewId));

    if (deletedReview) {
      await dispatch(loadReviewsByBusiness(businessId));
      await dispatch(loadReviewsByUser(userId));
      return setShowModal(false);
      // return window.alert('Your review has been deleted');
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
