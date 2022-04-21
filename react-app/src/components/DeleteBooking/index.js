import React from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import './DeleteBooking.css';

import { deleteBooking, loadBookingsByUser } from "../../store/bookings";

const DeleteBooking = ({booking, setShowModal, setEditBookingModal}) => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedBooking;

    // console.log('business in in frontend---------'. businessId)

    deletedBooking = await dispatch(deleteBooking(booking.id));

    if (deletedBooking) {
      await dispatch(loadBookingsByUser(deletedBooking.user_id))
      await setShowModal(false);
      return setEditBookingModal(false);
      // return window.alert('Your appointment has been cancelled');
      //TO DO: DISPATCH PROFILE TO SHOW ALL USER'S UPCOMING APPOINTMENTS----------
      // return history.push('/profile');
    }
  }

  return (
    <>
      <div className='delete-booking-modal'>
        <h3 className='h3-delete-booking'>Are you sure you want to cancel your appointment with {booking?.business_name}?</h3>
        <div className='buttons-delete-booking'>
          <button className='yes-delete-booking' onClick={(e) => handleDelete(e)}>Yes</button>
          <button onClick={() => setShowModal(false)}>No, nevermind</button>
        </div>
      </div>
    </>
  );
};

export default DeleteBooking;
