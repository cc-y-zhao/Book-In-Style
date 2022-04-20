import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useHistory, NavLink } from "react-router-dom";

import CustomerAppointments from './Customer/Appointments';
import UserFavorites from "./Customer/Favorites";
import UserReviews from "./Customer/Reviews";
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
    if (favoritesTab) {
      favoritesTab.style.fontWeight = 'normal';
      favoritesTab.style.borderBottom = 'none';
    }
    if (reviewsTab) {
      reviewsTab.style.fontWeight = 'normal';
      reviewsTab.style.borderBottom = 'none';
    }
    setSelectedTab(<CustomerAppointments />)
  }

  const onClickFavorites = async (e) => {
    e.preventDefault();
    setSelectedTabTitle(favoritesTab);
    if (appointmentsTab) {
      appointmentsTab.style.fontWeight = 'normal';
      appointmentsTab.style.borderBottom = 'none';
    }
    if (reviewsTab) {
      reviewsTab.style.fontWeight = 'normal';
      reviewsTab.style.borderBottom = 'none';
    }
    setSelectedTab(<UserFavorites userId={userId}/>)
  }

  const onClickReviews = async (e) => {
    e.preventDefault();
    setSelectedTabTitle(reviewsTab);
    if (appointmentsTab) {
      appointmentsTab.style.fontWeight = 'normal';
      appointmentsTab.style.borderBottom = 'none';
    }
    if (favoritesTab) {
      favoritesTab.style.fontWeight = 'normal';
      favoritesTab.style.borderBottom = 'none';
    }
    setSelectedTab(<UserReviews userId={userId}/>)
  }



  useEffect(() => {
    dispatch(loadBookingsByUser(userId));
  }, [dispatch, userId]);


  let showSelectedTab = false;
  if (selectedTab) showSelectedTab = true;


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
          <div
            id='favorites-tab-prof-title'
            onClick={(e) => onClickFavorites(e)}
            >
            Favorites
          </div>
          <div
            id='reviews-tab-prof-title'
            onClick={(e) => onClickReviews(e)}
            >
            Reviews
          </div>
        </div>

        {showSelectedTab && (
          <div className='selected-tab-in-profile'>
            {selectedTab}
          </div>
        )}

      </div>
  </>
  );
};

export default Profile;
