
const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const GET_BOOKINGS_BY_USER_WHO_BOOKED = 'bookings/GET_BOOKINGS_BY_USER_WHO_BOOKED';
const DELETE_ONE_BOOKING = 'bookings/DELETE_ONE_BOOKING';

const createdBooking = (booking) => ({
  type: CREATE_BOOKING,
  booking
});

const bookingsByUser = (bookings) => ({
  type: GET_BOOKINGS_BY_USER_WHO_BOOKED,
  bookings
});

const deleteOneBooking = (booking) => ({
  type: DELETE_ONE_BOOKING,
  booking
});

export const createBooking = (booking) => async (dispatch) => {

  const response = await fetch('/api/bookings/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  });

  if (response.ok) {
    const data = await response.json();
    // console.log('data in action creator-----------', data)
    dispatch(createdBooking(data))
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const loadBookingsByUser = (userId) => async (dispatch) => {

  const response = await fetch(`/api/bookings/users/${userId}`);

  if (response.ok) {
    const data = await response.json();
    // console.log('data in action creator-----------', data)
    dispatch(bookingsByUser(data))
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const deleteBooking = (businessId) => async (dispatch) => {
  console.log('business id in action creator------', businessId)
  const response = await fetch(`/api/businesses/${businessId}`, {
    method: "DELETE",
  });

  // console.log('response in action creator----------', response.json())
  if (response.ok) {
    const deletedBooking = await response.json();
    // console.log('deleted business in action creator-------', deletedBooking)
    dispatch(deleteOneBooking(deletedBooking));
    return deletedBooking;
  } else {
    const errors = await response.json();
    return errors;
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case CREATE_BOOKING:
      const newBooking = action.booking;
      newState[newBooking.id] = newBooking;

      return newState;

    case GET_BOOKINGS_BY_USER_WHO_BOOKED:
      const bookings = action.bookings.bookings;
      // console.log('bookings in store----------', bookings);
      newState['bookings_by_user'] = bookings;

      return newState;

    case DELETE_ONE_BOOKING:
      const booking = action.booking;
      delete newState[booking.id];

      return newState;

    default:
      return state;
  }
}
