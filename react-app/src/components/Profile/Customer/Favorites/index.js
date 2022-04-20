import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useHistory, NavLink } from "react-router-dom";

import { loadFavoritesByUser } from "../../../../store/favorites";

import '../Appointments/CustomerAppointments.css'

const UserFavorites = ({userId}) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const favoritesState = useSelector((state) => state?.favorites?.user[userId]);
  const favoritesArr = favoritesState?.favorites_list;
  const favoritesDict = favoritesState?.favorites_dict;

  console.log('favoritesArr-------------', favoritesArr)
  console.log('favoritesDict-------------', favoritesDict)

  // let favoritesList;
  // if (bookingsObj) {
  //   bookings = Object.values(bookingsObj);
  // }
  // console.log('bookings in profile-------------', bookings)

  useEffect(() => {
    dispatch(loadFavoritesByUser(userId))
      .then(() => setIsLoaded(true));
  }, [dispatch, userId]);


  let hasFavorites = false;
  if (favoritesArr?.length > 0) hasFavorites = true;


  return (
    <>
      {isLoaded && (
        <>
          {hasFavorites ? (
            <div className='bookings-in-profile'>
              <div className='bookings-container'>
                {/* <div>{bookings && bookings[0][0].toString()}</div> */}
                {favoritesArr && favoritesArr.map((favorite) =>
                <div className='each-booking' key={favorite.business_id}>
                  <div>
                    <img
                      className='cover-photo'
                      src={favoritesDict[favorite.business_id]['business_cover_photo']}
                      alt={`${favoritesDict[favorite.business_id]['business_name']}`}
                      height="180px"
                      width="180px"
                    />
                  </div>
                  <div className='biz-name-bookings'>{favoritesDict[favorite.business_id]['business_name']}</div>
                  {/* <div className='service-name-bookings'>{favorite.service_name}</div>
                  <div className='time-in-bookings'>{favorite.time}</div>
                  <div className='calendar-icon'>
                    <i class="far fa-calendar-alt"></i>
                    <div className='date-calendar'>{formatDate(favorite.date)}</div>
                  </div>
                  <EditBookingModal booking={booking}/> */}
                </div>
                )}
              </div>
            </div>
          ) : (
            <div className='bookings-in-profile'>
              <h4>No Favorites</h4>
            </div>

          )}
        </>
      )}
  </>
  );
};

export default UserFavorites;
