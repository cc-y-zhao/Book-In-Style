
const CREATE_BUSINESS = 'businesses/CREATE_BUSINESS';

const createdBusiness = (business) => ({
  type: CREATE_BUSINESS,
  business
});


export const createBusiness = (business) => async (dispatch) => {

  const response = await fetch('/api/businesses/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(business),
  });

  if (response.ok) {
    const data = await response.json();
    console.log('new business from businesses store-----------', data)
    dispatch(createdBusiness(data))
    return null;
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
  let newState;
  switch (action.type) {
    case CREATE_BUSINESS:
      newState = { ...state };
      const newBusiness = action.business;
      newState[newBusiness.id] = newBusiness;

      return newState;
    default:
      return state;
  }
}
