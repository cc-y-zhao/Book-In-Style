import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect, useHistory, NavLink } from "react-router-dom";

import { loadFavoritesByUser } from "../../../../store/favorites";

import '../Appointments/CustomerAppointments.css'

const UserFavorites = ({userId}) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const favoritesState = useSelector((state) => state?.favorites?.user?.userId);

  console.log('favorites state ----------------', favoritesState);

  // console.log('bookingsOBJ in profile-------------', bookingsObj)

  // let favoritesList;
  // if (bookingsObj) {
  //   bookings = Object.values(bookingsObj);
  // }
  // console.log('bookings in profile-------------', bookings)

  useEffect(() => {
    dispatch(loadFavoritesByUser(userId))
      .then(() => setIsLoaded(true));
  }, [dispatch, userId]);


  // let hasFavorites = false;
  // if (bookings?.length > 0) hasFavorites = true;

    return (
      <h1>hi</h1>
    )

  // return (
  //   <>
  //     {isLoaded && (
  //       <>
  //         {hasFavorites ? (
  //           <div className='bookings-in-profile'>
  //             {/* <h2>Upcoming Appointments</h2> */}
  //             <div className='bookings-container'>
  //               {/* <div>{bookings && bookings[0][0].toString()}</div> */}
  //               {bookings && bookings.map((booking) =>
  //               <div className='each-booking' key={booking.id}>
  //                 <div className='biz-name-bookings'>{booking.business_name}</div>
  //                 <div className='service-name-bookings'>{booking.service_name}</div>
  //                 <div className='time-in-bookings'>{booking.time}</div>
  //                 <div className='calendar-icon'>
  //                   <i class="far fa-calendar-alt"></i>
  //                   <div className='date-calendar'>{formatDate(booking.date)}</div>
  //                 </div>
  //                 <EditBookingModal booking={booking}/>
  //               </div>
  //               )}
  //             </div>
  //           </div>
  //         ) : (
  //           <div className='bookings-in-profile'>
  //             <h4>No Favorites</h4>
  //           </div>

  //         )}
  //       </>
  //     )}
  // </>
  // );
};

export default UserFavorites;
