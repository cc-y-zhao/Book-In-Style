import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useHistory, NavLink } from "react-router-dom";

import EditBookingModal from "../Modals/EditBookingModal";
import { loadBookingsByUser } from "../../store/bookings";

import './Profile.css'

const Profile = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(loadBookingsByUser(userId));
  }, [dispatch, userId]);


  return (
    <>
      <div className='profile-container'>
        <div>
          <div>
            Appointments
          </div>
          <div>
            Favorites
          </div>
          <div>
            Reviews
          </div>
        </div>


        <div className='selected-tab-in-profile'>
          Selected Tab
        </div>
      </div>
  </>
  );
};

export default Profile;
