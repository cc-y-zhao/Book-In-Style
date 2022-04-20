import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useHistory, NavLink } from "react-router-dom";

import CustomerAppointments from './Customer/Appointments';
import { loadBookingsByUser } from "../../store/bookings";

import './Profile.css'

const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user?.id);

  const [selectedTab, setSelectedTab] = useState(<CustomerAppointments/>)

  let appointmentsTab = document?.getElementById("appointments-tab-prof-title");
  let favoritesTab = document?.getElementById("favorites-tab-prof-title");
  let reviewsTab = document?.getElementById("reviews-tab-prof-title");
  const [selectedTabTitle, setSelectedTabTitle] = useState(appointmentsTab)

  if (selectedTabTitle) {
    selectedTabTitle.style.fontWeight = 'bold';
    selectedTabTitle.style.borderBottom = 'solid';
  }

  const onClickAppointments = async (e) => {
    e.preventDefault();
    setSelectedTabTitle(appointmentsTab);
    favoritesTab.style.fontWeight = 'normal';
    favoritesTab.style.borderBottom = 'none';
    reviewsTab.style.fontWeight = 'normal';
    reviewsTab.style.borderBottom = 'none';
    setSelectedTab(<CustomerAppointments />)
  }



  useEffect(() => {
    dispatch(loadBookingsByUser(userId));
  }, [dispatch, userId]);


  return (
    <>
      <div className='profile-container'>
        <div className='nav-in-profile'>
          <div
            id='appointments-tab-prof-title'
            onClick={(e) => onClickAppointments(e)}
            >
            Appointments
          </div>
          <div id='favorites-tab-prof-title'>
            Favorites
          </div>
          <div id='reviews-tab-prof-title'>
            Reviews
          </div>
        </div>


        <div className='selected-tab-in-profile'>
          {selectedTab}
        </div>
      </div>
  </>
  );
};

export default Profile;
