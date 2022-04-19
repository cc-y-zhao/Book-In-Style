const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const GET_REVIEWS_BY_BUSINESS = 'reviews/GET_REVIEWS_BY_BUSINESS';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';

const createdReview = (review) => ({
  type: CREATE_REVIEW,
  review
});

const loadAllReviewsByBusiness = (payload, businessId) => ({
  type: GET_REVIEWS_BY_BUSINESS,
  payload,
  businessId,
});

const editedReview = (review) => ({
  type: GET_REVIEWS_BY_BUSINESS,
  review
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
    // console.log('data in action creator-----------', data)
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

export const editReview = (editedReview) => async (dispatch) => {

  console.log('edited booking beofre fetch----------', editedReview);

  const response = await fetch(`/api/reviews/${editedReview.reviewId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedReview),
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

      let businessId = newReview.business_id;
      console.log('businessId in reducer-----------', businessId);
      console.log('new review in reducer-----------', newReview);

      newState['reviews_by_business_dict'][newReview.business_id] = newReview;
      newState['reviews_by_business_list'].push(newReview);

      return newState;

      // if (newState['reviews_by_business']) {
      //   if (newState['reviews_by_business'][newReview.business_id]) {
      //     // let newReviewId = newReview.id;
      //     newState['reviews_by_business'][newReview.business_id].push(newReview);
      //     // newState['reviews_by_business'][newReview.business_id].push(newReview)
      //   } else {
      //     let newReviewId = newReview.id;
      //     newState['reviews_by_business'][newReview.business_id] = [];
      //     newState['reviews_by_business'][newReview.business_id].push(newReview);
      //   }
      // } else {
      //   newState['reviews_by_business'] = {};
      //   newState['reviews_by_business'][newReview.business_id] = [newReview];
      // }

      // return newState;

    case GET_REVIEWS_BY_BUSINESS:
      // console.log('action.reviews from reducer ----------', action.reviews);
      // newState['reviews_by_business'] = {};
      // newState['reviews_by_business'][action.businessId] = action.reviews.reviews;
      newState['reviews_by_business_dict'] = action.payload.reviews_dict;
      newState['reviews_by_business_list'] = action.payload.reviews_list;

      return newState;

    case EDIT_REVIEW:
      newState['reviews_by_business'][action.review.business_id] = action.review;

      return newState;

    default:
      return state;
  }
}

    // case CREATE_REVIEW:
    //   let newReview = action.review;
    //   console.log('new review in reducer-----------', newReview);
    //   if (newState[newReview.business_id]['reviews_by_business']) {
    //     newState[newReview.business_id]['reviews_by_business'][newReview.id] = newReview
    //   } else {
    //     let newReviewId = newReview.id;
    //     newState[newReview.business_id]['reviews_by_business'] = {newReviewId: newReview}

    //   }

    //   return newState;
