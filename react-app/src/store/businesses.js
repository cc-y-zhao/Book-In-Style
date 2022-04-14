
const CREATE_BUSINESS = 'businesses/CREATE_BUSINESS';
const GET_ONE_BUSINESS = 'businesses/GET_ONE_BUSINESS';
const EDIT_ONE_BUSINESS = 'businesses/EDIT_ONE_BUSINESS';

const createdBusiness = (business) => ({
  type: CREATE_BUSINESS,
  business
});

const loadOneBusiness = (business) => ({
  type: GET_ONE_BUSINESS,
  business
});

const editOneBusiness = (business) => ({
  type: EDIT_ONE_BUSINESS,
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
    // console.log('new business from businesses store-----------', data)
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

export const loadBusiness = (businessId) => async (dispatch) => {

  console.log('business id before fetch------------', businessId)
  const response = await fetch(`/api/businesses/${businessId}`);

  if (response.ok) {
    const business = await response.json();
    dispatch(loadOneBusiness(business));

    // console.log('business after fetch---------', business)

    return business;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const editBusiness = (editedBusiness) => async (dispatch) => {
  console.log('editedbusiness in store-------------', editedBusiness)
  console.log('editedbusiness ID in store-------------', editedBusiness.id)

  const response = await fetch(`/api/businesses/${editedBusiness.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedBusiness),
  });

  if (!response.ok) {
    return response.errors;
  }
  const updatedBusiness = await response.json();

  dispatch(editOneBusiness(updatedBusiness));
  return updatedBusiness;
};


const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case CREATE_BUSINESS:
      const newBusiness = action.business;
      newState[newBusiness.id] = newBusiness;

      return newState;

    case GET_ONE_BUSINESS:
      // console.log('action in reducer----------', action)
      // console.log('action.business in reducer----------', action.business)
      // console.log('action.business.id in reducer----------', action.business.id)

      newState[action.business.id] = action.business;

      // console.log('new state------------', newState);
      return newState;

    case EDIT_ONE_BUSINESS:
      const updatedBusiness = action.business
      newState[updatedBusiness.id] = updatedBusiness

      return newState;

    default:
      return state;
  }
}
