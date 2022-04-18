import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AddReviewModal from "../Modals/AddReviewModal";
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
    // console.log('IN first IF STATEMENT----------',reviewsState);
    if (reviewsState.reviews_by_business) {
      // console.log('IN second STATEMENT----------',reviewsState.reviews_by_business);
      if (reviewsState.reviews_by_business[business_id]) {
        // console.log('IN third IF STATEMENT----------',reviewsState.reviews_by_business[business_id]);
        reviews = Object.values(reviewsState.reviews_by_business[business_id]);
      }
    }
  }

  // console.log('reviews in reviews page-------------', reviews);
  // console.log('reviews TO STRING in reviews page-------------', reviews.toString());



  // let services;
  // if (business) services = business.services;
  // let servicesArr;
  // if (services) servicesArr = Object.values(services);
  // const businessName = business?.name;


  useEffect(() => {
    dispatch(loadReviewsByBusiness(businessIdParsed));
  }, [dispatch, businessIdParsed]);

  let showAddReviewButton = false;
  if (userId) showAddReviewButton = true;

  // "Mon, 18 Apr 2022 10:26:41 GMT"

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
