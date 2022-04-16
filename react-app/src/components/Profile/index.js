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

  // const handleEditRedirect = (e) => {
  //   e.preventDefault();
  //   return history.push(`/businesses/${businessIdParsed}/edit`)
  //   // return <Redirect to={`/businesses/${businessIdParsed}/edit`}/>
  // }

  return (
    <>
      <div>
        <h2>Upcoming Appointments</h2>
        <div className='services-container'>
          {/* <div>{bookings && bookings[0][0].toString()}</div> */}
          {bookings && bookings.map((booking) =>
          <div key={booking.id}>
            {booking.time}
            {booking.date}
            <EditBookingModal booking={booking}/>
          </div>
          )}
        </div>
      </div>
  </>
  );
};

export default Profile;
