import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import EditReviewModal from "../../../Modals/EditReviewModal";
import DeleteReviewModal from "../../../Modals/DeleteReviewModal";
import { loadReviewsByUser } from "../../../../store/reviews";

import '../../../Reviews/Reviews.css';
import ratingStars from "../../../Reviews/stars";

const UserReviews = ({userId}) => {
  const dispatch = useDispatch();

  const reviewsState = useSelector((state) => state?.reviews);

  let reviewsList;

  if (reviewsState) {
  // console.log('IN first IF STATEMENT----------',reviewsState);
    if (reviewsState.reviews_by_user_list) {
      reviewsList = reviewsState.reviews_by_user_list;
    }
  }

  useEffect(() => {
    dispatch(loadReviewsByUser(userId));
  }, [dispatch, userId, reviewsList.toString()]);

  const createdAt = (date) => {
    let array = date.split(" ");
    let newDate = array[2] + " " + array[1] + ", " + array[3];
    return newDate;
  }

  console.log('reviews from userReviews-------------', reviewsList)
  console.log('reviews to string from userReviews-------------', reviewsList.toString())



  return (
    <>
    <div className='reviews-container'>

      <div>
        {reviewsList && reviewsList.map((review) =>
        <>
          <div className='each-review'>
            <div className='stars-and-service'>
              <div className='stars'>
                {ratingStars(review.rating)}
              </div>
              <div className='service-name-in-review'>{review.service_name}</div>
              <div>
                {userId === review.user_id ? (
                  <div>
                    <span><EditReviewModal review={review} services={review.services} businessName={review.business_name}/></span>
                    <span className='space-after-pencil'></span>
                    <span><DeleteReviewModal businessId={review.business_id} reviewId={review.id}/></span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className='reviewer-name-and-date'>
              <div className='reviewer-name'>{review.reviewer_name}</div>
              <div className='review-divider'> | </div>
              <div className='review-date'>{createdAt(review.created_at)}</div>
            </div>
            <div className='review-content'>"{review.review}"</div>
          </div>
        </>
        )}
      </div>
    </div>
    </>
  );
};

export default UserReviews;
