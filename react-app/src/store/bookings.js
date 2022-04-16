
const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const GET_BOOKINGS_BY_USER_WHO_BOOKED = 'bookings/GET_BOOKINGS_BY_USER_WHO_BOOKED';

const createdBooking = (booking) => ({
  type: CREATE_BOOKING,
  booking
});

const bookingsByUser = (bookings) => ({
  type: GET_BOOKINGS_BY_USER_WHO_BOOKED,
  bookings
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

    default:
      return state;
  }
}
