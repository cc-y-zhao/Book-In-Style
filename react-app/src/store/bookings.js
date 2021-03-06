
const CREATE_BOOKING = 'bookings/CREATE_BOOKING';
const GET_BOOKINGS_BY_USER_WHO_BOOKED = 'bookings/GET_BOOKINGS_BY_USER_WHO_BOOKED';
const EDIT_BOOKING = 'bookings/EDIT_BOOKING';
const DELETE_BOOKING = 'bookings/DELETE_BOOKING';

const createdBooking = (booking) => ({
  type: CREATE_BOOKING,
  booking
});

const bookingsByUser = (bookings) => ({
  type: GET_BOOKINGS_BY_USER_WHO_BOOKED,
  bookings
});

const editOneBooking = (booking) => ({
  type: EDIT_BOOKING,
  booking
});

const deleteOneBooking = (booking) => ({
  type: DELETE_BOOKING,
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

export const editBooking = (editedBooking) => async (dispatch) => {

  const response = await fetch(`/api/bookings/${editedBooking.bookingId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedBooking),
  });


  if (response.ok) {
    const updatedBooking = await response.json();
    dispatch(editOneBooking(updatedBooking))
    return updatedBooking;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};

export const deleteBooking = (bookingId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/${bookingId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const deletedBooking = await response.json();
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
      newState['bookings_by_user'] = bookings;

      return newState;

    case EDIT_BOOKING:
      let updatedBooking = action.booking;
      newState[updatedBooking.id] = updatedBooking;

      return newState;

    case DELETE_BOOKING:
      let deletedBooking = action.booking;
      delete newState[deletedBooking.id];

      return newState;

    default:
      return state;
  }
}
