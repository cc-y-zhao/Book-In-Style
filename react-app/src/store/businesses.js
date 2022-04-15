
const CREATE_BUSINESS = 'businesses/CREATE_BUSINESS';
const GET_ONE_BUSINESS = 'businesses/GET_ONE_BUSINESS';
const GET_ALL_BUSINESSES = 'businesses/GET_ALL_BUSINESSES';
const EDIT_ONE_BUSINESS = 'businesses/EDIT_ONE_BUSINESS';
const DELETE_ONE_BUSINESS = 'businesses/DELETE_ONE_BUSINESS';

const createdBusiness = (business) => ({
  type: CREATE_BUSINESS,
  business
});

const loadOneBusiness = (business) => ({
  type: GET_ONE_BUSINESS,
  business
});

const loadBusinesses = (businesses) => ({
  type: GET_ALL_BUSINESSES,
  businesses
});

const editOneBusiness = (business) => ({
  type: EDIT_ONE_BUSINESS,
  business
});

const deleteOneBusiness = (business) => ({
  type: DELETE_ONE_BUSINESS,
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
    // console.log('data in action creator-----------', data)
    dispatch(createdBusiness(data))
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

export const loadBusiness = (businessId) => async (dispatch) => {

  // console.log('business id before fetch------------', businessId)
  const response = await fetch(`/api/businesses/${businessId}`);

  if (response.ok) {
    const business = await response.json();
    dispatch(loadOneBusiness(business));
    return business;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const loadAllBusinesses = () => async (dispatch) => {

  const response = await fetch(`/api/businesses/`);

  if (response.ok) {
    const businesses = await response.json();
    dispatch(loadBusinesses(businesses));
    return businesses;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const editBusiness = (editedBusiness) => async (dispatch) => {

  const response = await fetch(`/api/businesses/${editedBusiness.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedBusiness),
  });

  if (response.ok) {
    const updatedBusiness = await response.json();
    dispatch(editOneBusiness(updatedBusiness))
    return updatedBusiness;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};

export const deleteBusiness = (businessId) => async (dispatch) => {
  console.log('business id in action creator------', businessId)
  const response = await fetch(`/api/businesses/${businessId}`, {
    method: "DELETE",
  });

  // console.log('response in action creator----------', response.json())
  if (response.ok) {
    const deletedBusiness = await response.json();
    // console.log('deleted business in action creator-------', deletedBusiness)
    dispatch(deleteOneBusiness(deletedBusiness));
    return deletedBusiness;
  } else {
    const errors = await response.json();
    return errors;
  }
};

/////////////////////////////////SERVICES////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
const CREATE_SERVICE = 'services/CREATE_SERVICE'


const createdService = (service) => ({
  type: CREATE_SERVICE,
  service
});


export const createService = (service) => async (dispatch) => {

  const response = await fetch('/api/services/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(service),
  });

  if (response.ok) {
    const data = await response.json();
    // console.log('data in action creator-----------', data)
    dispatch(createdBusiness(data))
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
    case CREATE_BUSINESS:
      const newBusiness = action.business;
      newState[newBusiness.id] = newBusiness;

      return newState;

    case GET_ONE_BUSINESS:
      newState[action.business.id] = action.business;
      return newState;

    case GET_ALL_BUSINESSES:
      // console.log('action in get all businesses------------', action)
      newState['businesses_list'] = action.businesses.businesses;
      // console.log('action.businesses in get all businesses------------', action.businesses)
      action.businesses.businesses.forEach((business) => {
        newState[business.id] = business;
      });

      return newState;

    case EDIT_ONE_BUSINESS:
      const updatedBusiness = action.business;
      newState[updatedBusiness.id] = updatedBusiness;

      return newState;

    case DELETE_ONE_BUSINESS:
      const deletedBusiness = action.business;
      delete newState[deletedBusiness.id];
      return newState;

    default:
      return state;
  }
}
