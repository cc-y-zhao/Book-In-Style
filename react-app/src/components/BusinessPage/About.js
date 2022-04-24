import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { loadBusiness } from "../../store/businesses";
import './BusinessPage.css';

const About = () => {
  const dispatch = useDispatch();

  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);
  const business_id = businessIdParsed;

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

  return (
    <>
      <div className='description-biz-pg'>
        {business?.description}
      </div>
    </>
  );
};

export default About;
