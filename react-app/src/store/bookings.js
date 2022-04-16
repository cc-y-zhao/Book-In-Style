
const CREATE_BOOKING = 'bookings/CREATE_BOOKING';

const createdBooking = (booking) => ({
  type: CREATE_BOOKING,
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

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case CREATE_BOOKING:
      const newBooking = action.booking;
      newState[newBooking.id] = newBooking;

      return newState;

    default:
      return state;
  }
}
