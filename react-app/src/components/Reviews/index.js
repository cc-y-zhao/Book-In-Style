import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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

  let disableReviewForm = true;
  if (userId) disableReviewForm = false;

  let dollarSign = '$';

  return (
    <>
      <div>
        This is the review section
      </div>
    </>
  );
};

export default Reviews;
