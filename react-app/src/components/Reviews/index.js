import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AddReviewModal from "../Modals/AddReviewModal";
import EditReviewModal from "../Modals/EditReviewModal";
import DeleteReviewModal from "../Modals/DeleteReviewModal";
import { loadReviewsByBusiness } from "../../store/reviews";

import './Reviews.css';
import ratingStars from "./stars";

const Reviews = () => {
  const dispatch = useDispatch();

  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);
  const business_id = businessIdParsed;

  const userId = useSelector((state) => state.session.user?.id);
  const businesses = useSelector((state) => state?.businesses);
  const reviewsState = useSelector((state) => state?.reviews);
  let business;
  if (businesses) business = businesses[business_id];
  let reviews;

  if (reviewsState) {
    if (reviewsState.reviews_by_business_list) {
      reviews = reviewsState.reviews_by_business_list;
    }
  }

  useEffect(() => {
    dispatch(loadReviewsByBusiness(businessIdParsed));
  }, [dispatch, businessIdParsed]);

  let showAddReviewButton = false;
  if (userId) showAddReviewButton = true;

  const createdAt = (date) => {
    let array = date.split(" ");
    let newDate = array[2] + " " + array[1] + ", " + array[3];
    return newDate;
  }


  return (
    <>
    <div className='reviews-container'>
      {showAddReviewButton && (
      <div>
        <AddReviewModal businessId={business_id}/>
      </div>
      )}
      <div>
        {reviews && reviews.map((review) =>
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
                    <span><EditReviewModal review={review} services={business?.services} businessName={business?.name}/></span>
                    <span className='space-after-pencil'></span>
                    <span><DeleteReviewModal businessId={businessIdParsed} reviewId={review.id}/></span>
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

export default Reviews;
