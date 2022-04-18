import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AddReviewModal from "../Modals/AddReviewModal";
import { loadReviewsByBusiness } from "../../store/reviews";

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

  console.log('reviews in reviews page-------------', reviews);


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
            <div>{review.serviceName}</div>
            <div>{review.user_first_name}</div>
            <div>{review.rating}</div>
            <div>{review.review}</div>
          </div>
        </>
        )}
      </div>
    </div>
    </>
  );
};

export default Reviews;
