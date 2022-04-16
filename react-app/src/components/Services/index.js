import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";


const Services = ({services, userId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const servicesArr = Object.values(services)

  // useEffect(() => {
  //   dispatch(loadBusiness(businessIdParsed));
  // }, [dispatch, businessIdParsed]);

  let disableBookingForm = true;
  if (userId) disableBookingForm = false;

  let dollarSign = ' - $';

  return (
    <>
      <div className='services-container'>
        {servicesArr && servicesArr.map((service) =>
        <div key={service.id}>
          {service.name}{dollarSign}{service.price}
        </div>)}
      </div>
    </>
  );
};

export default Services;
