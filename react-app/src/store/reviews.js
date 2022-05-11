const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const GET_REVIEWS_BY_BUSINESS = 'reviews/GET_REVIEWS_BY_BUSINESS';
const GET_REVIEWS_BY_USER = 'reviews/GET_REVIEWS_BY_USER';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const createdReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

const loadAllReviewsByBusiness = (payload, businessId) => ({
  type: GET_REVIEWS_BY_BUSINESS,
  payload,
  businessId,
});

const loadAllReviewsByUser = (payload) => ({
  type: GET_REVIEWS_BY_USER,
  payload,
});

const editedReview = (review) => ({
  type: EDIT_REVIEW,
  review,
});

const deleteOneReview = (payload) => ({
  type: DELETE_REVIEW,
  payload,
})

export const createReview = (review) => async (dispatch) => {

  const response = await fetch('/api/reviews/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(createdReview(data))
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

export const loadReviewsByBusiness = (businessId) => async (dispatch) => {

  const response = await fetch(`/api/reviews/businesses/${businessId}`);

  if (response.ok) {
    const payload = await response.json();
    dispatch(loadAllReviewsByBusiness(payload, businessId));
    return payload;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const loadReviewsByUser = (userId) => async (dispatch) => {

  const response = await fetch(`/api/reviews/users/${userId}`);

  if (response.ok) {
    const payload = await response.json();
    dispatch(loadAllReviewsByUser(payload));
    return payload;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const editReview = (review) => async (dispatch) => {

  const response = await fetch(`/api/reviews/${review.reviewId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });


  if (response.ok) {
    const updatedReview = await response.json();
    dispatch(editedReview(updatedReview))
    return updatedReview;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {

  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    const payload = await response.json();
    dispatch(deleteOneReview(payload));
    return payload;
  } else {
    const errors = await response.json();
    return errors;
  }
};


const initialState = {
  'reviews_by_business_dict': {},
  'reviews_by_business_list': [],
  'reviews_by_user_dict': {},
  'reviews_by_user_list': [],
};

export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case CREATE_REVIEW:
      let newReview = action.review;

      // let businessId = newReview.business_id;

      newState['reviews_by_business_dict'][newReview.business_id] = newReview;
      newState['reviews_by_business_list'].push(newReview);

      return newState;

    case GET_REVIEWS_BY_BUSINESS:

      newState['reviews_by_business_dict'] = action.payload.reviews_dict;
      newState['reviews_by_business_list'] = action.payload.reviews_list;

      return newState;

    case GET_REVIEWS_BY_USER:

      newState['reviews_by_user_dict'] = action.payload.reviews_dict;
      newState['reviews_by_user_list'] = action.payload.reviews_list;

      return newState;

    case EDIT_REVIEW:
      newState['reviews_by_business_dict'][action.review.id] = action.review;

      return newState;

    case DELETE_REVIEW:
      newState['reviews_by_business_dict'] = action.payload.reviews_dict;
      newState['reviews_by_business_list'] = action.payload.reviews_list;

      return newState;


    default:
      return state;
  }
}
