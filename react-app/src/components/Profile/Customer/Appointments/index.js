import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


import EditBookingModal from '../../../Modals/EditBookingModal';
import { loadBookingsByUser } from "../../../../store/bookings";

import './CustomerAppointments.css'

const CustomerAppointments = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const bookingsObj = useSelector((state) => state?.bookings?.bookings_by_user);

  let bookings;
  if (bookingsObj) {
    bookings = Object.values(bookingsObj);
  }

  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(loadBookingsByUser(userId))
      .then(() => setIsLoaded(true));
  }, [dispatch, userId]);


  const formatDate = (date) => {
    let dateArr = date.split(" ");
    let newDate = dateArr[0] + " " + dateArr[2] + " " + dateArr[1] + ", " + dateArr[3];
    return newDate;
  }

  let hasBookings = false;
  if (bookings?.length > 0) hasBookings = true;


  return (
    <>
      {isLoaded && (
        <>
          {hasBookings ? (
            <div className='bookings-in-profile'>
              {/* <h2>Upcoming Appointments</h2> */}
              <div className='bookings-container'>
                {/* <div>{bookings && bookings[0][0].toString()}</div> */}
                {bookings && bookings.map((booking) =>
                <div className='each-booking' key={booking.id}>
                  <NavLink className='no-underline theme-color' key={booking.id} exact to={`/businesses/${booking.business_id}`}>
                    <div className='biz-name-bookings'>{booking.business_name}</div>
                  </NavLink>
                  <div className='service-name-bookings'>{booking.service_name}</div>
                  <div className='time-in-bookings'>{booking.time}</div>
                  <div className='calendar-icon'>
                    <i class="far fa-calendar-alt"></i>
                    <div className='date-calendar'>{formatDate(booking.date)}</div>
                  </div>
                  <EditBookingModal booking={booking}/>
                </div>
                )}
              </div>
            </div>
          ) : (
            <div className='bookings-in-profile'>
              <h4>No upcoming appointments</h4>
            </div>

          )}
        </>
      )}
  </>
  );
};

export default CustomerAppointments;
