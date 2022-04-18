import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import AddReviewModal from "../Modals/AddReviewModal";
import { loadBusiness } from "../../store/businesses";

const Reviews = () => {
  const dispatch = useDispatch();

  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);
  const business_id = businessIdParsed;

  const userId = useSelector((state) => state.session.user?.id);
  const businesses = useSelector((state) => state?.businesses);
  let business;
  if (businesses) business = businesses[business_id];

  // let services;
  // if (business) services = business.services;
  // let servicesArr;
  // if (services) servicesArr = Object.values(services);
  // const businessName = business?.name;


  useEffect(() => {
    dispatch(loadBusiness(businessIdParsed));
  }, [dispatch, businessIdParsed]);

  let showAddReviewButton = false;
  if (userId) showAddReviewButton = true;


  return (
    <>
      {showAddReviewButton && (
      <div>
        <AddReviewModal businessId={business_id}/>
      </div>
      )}
      <div>
        All reviews will go here
      </div>
    </>
  );
};

export default Reviews;
