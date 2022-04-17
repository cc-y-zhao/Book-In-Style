import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";

import BookingModal from "../Modals/BookingModal";

import './Services.css';

const Services = ({services, userId, businessId, businessName}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const servicesArr = Object.values(services)

  // useEffect(() => {
  //   dispatch(loadBusiness(businessIdParsed));
  // }, [dispatch, businessIdParsed]);

  let disableBookingForm = true;
  if (userId) disableBookingForm = false;

  let dollarSign = '$';

  return (
    <>
      <div className='services-container'>
        {servicesArr && servicesArr.map((service) =>
        <div>
          <div className='each-service' key={service.id}>
            <div className='service-name-biz-pg'>{service.name}</div>
            <div className='service-price-biz-pg'>{dollarSign}{service.price}</div>
          </div>
          <div><BookingModal service={service} userId={userId} businessId={businessId} businessName={businessName}/></div>
        </div>
        )}
      </div>
    </>
  );
};

export default Services;
