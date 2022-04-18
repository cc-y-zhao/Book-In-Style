const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const GET_REVIEWS_BY_BUSINESS = 'reviews/GET_REVIEWS_BY_BUSINESS';

const createdReview = (review) => ({
  type: CREATE_REVIEW,
  review
})

const loadAllReviewsByBusiness = (reviews, businessId) => ({
  type: GET_REVIEWS_BY_BUSINESS,
  reviews,
  businessId,
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
    const reviews = await response.json();
    dispatch(loadAllReviewsByBusiness(reviews, businessId));
    return reviews;
  } else {
    const errors = await response.json();
    return errors;
  }
};


const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case CREATE_REVIEW:
      let newReview = action.review;

      let businessId = newReview.business_id;
      console.log('businessId in reducer-----------', businessId);
      console.log('new review in reducer-----------', newReview);

      if (newState['reviews_by_business']) {
        if (newState['reviews_by_business'][newReview.business_id]) {
          // let newReviewId = newReview.id;
          newState['reviews_by_business'][newReview.business_id][newReview.id] = newReview;
          // newState['reviews_by_business'][newReview.business_id].push(newReview)
        } else {
          let newReviewId = newReview.id;
          newState['reviews_by_business'][newReview.business_id] = {newReviewId: newReview};
        }
      } else {
        newState['reviews_by_business'] = {};
        newState['reviews_by_business'][newReview.business_id] = newReview
      }

      return newState;

    case GET_REVIEWS_BY_BUSINESS:
      // console.log('action.reviews from reducer ----------', action.reviews);
      newState['reviews_by_business'] = {};
      newState['reviews_by_business'][action.businessId] = action.reviews;

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
