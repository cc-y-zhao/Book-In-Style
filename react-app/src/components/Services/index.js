import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookingModal from "../Modals/BookingModal";

import { loadBusiness } from "../../store/businesses";

import './Services.css';

const Services = () => {
  const dispatch = useDispatch();

  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);
  const business_id = businessIdParsed;

  const userId = useSelector((state) => state.session.user?.id);
  const businesses = useSelector((state) => state?.businesses);

  let business;
  if (businesses) business = businesses[business_id];

  let services;
  if (business) services = business.services;
  let servicesArr;
  if (services) servicesArr = Object.values(services);

  const businessName = business?.name;


  useEffect(() => {
    dispatch(loadBusiness(businessIdParsed));
  }, [dispatch, businessIdParsed]);

  let dollarSign = '$';

  return (
    <>
      <div>
        {servicesArr && servicesArr.map((service) =>
        <div className='services-container' key={service.id}>
          <div className='each-service' key={service.id}>
            <div className='service-name-biz-pg'>{service.name}</div>
            <div className='service-price-biz-pg'>{dollarSign}{service.price}</div>
          </div>
          <div className='see-times'><BookingModal service={service} userId={userId} businessId={businessId} businessName={businessName}/></div>
        </div>
        )}
      </div>
    </>
  );
};

export default Services;
