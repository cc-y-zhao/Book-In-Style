import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory, NavLink } from "react-router-dom";

import EditBookingModal from "../Modals/EditBookingModal";
import { loadBookingsByUser } from "../../store/bookings";

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const bookingsObj = useSelector((state) => state?.bookings?.bookings_by_user);

  console.log('bookingsOBJ in profile-------------', bookingsObj)

  let bookings;
  if (bookingsObj) {
    bookings = Object.values(bookingsObj);
  }
  console.log('bookings in profile-------------', bookings)
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(loadBookingsByUser(userId));
  }, [dispatch]);

  // const prevDate = "Tue, 26 Apr 2022 00:00:00 GMT";
  // const prevDateArr = prevDate.split(' ');
  // console.log('prev data array-----------', prevDateArr);

  const formatDate = (date) => {
    let dateArr = date.split(" ");
    let newDate = dateArr[0] + " " + dateArr[2] + " " + dateArr[1] + ", " + dateArr[3];
    return newDate;
  }

  // console.log('formatted date----------', formatDate(prevDate));


  return (
    <>
      <div>
        <h2>Upcoming Appointments</h2>
        <div className='services-container'>
          {/* <div>{bookings && bookings[0][0].toString()}</div> */}
          {bookings && bookings.map((booking) =>
          <div key={booking.id}>
            {booking.time}
            {formatDate(booking.date)}
            <EditBookingModal booking={booking}/>
          </div>
          )}
        </div>
      </div>
  </>
  );
};

export default Profile;
