const CREATE_FAVORITE = 'favorites/CREATE_FAVORITE';
const GET_FAVORITES_BY_BUSINESS = 'favorites/GET_FAVORITES_BY_BUSINESS';

const createdFavorite = (data) => ({
  type: CREATE_FAVORITE,
  data
});

const favoritesByUser = (data) => ({
  type: GET_FAVORITES_BY_BUSINESS,
  data,
})


export const createFavorite = (payload) => async (dispatch) => {

  console.log('payload frrom store-----------', payload)

  const response = await fetch('/api/favorites/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
    // console.log('data in action creator-----------', data)
    dispatch(createdFavorite(data))
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

export const loadFavoritesByUser = (userId) => async (dispatch) => {

  const response = await fetch(`/api/favorites/users/${userId}`);

  if (response.ok) {
    const data = await response.json();
    // console.log('data in action creator-----------', data)
    dispatch(favoritesByUser(data))
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

const initialState = {
  'user': {},
  'business': {},
};

export default function reducer(state = initialState, action) {
  let newState = {...state};
  let newFavorite;
  let businessId;
  let userId;
  let businessName;
  let businessCoverPhoto;
  switch (action.type) {
    case CREATE_FAVORITE:
      newFavorite = action.data.favorite;
      userId = newFavorite.user_id;
      businessId = newFavorite.business_id;
      businessName = action.data.business_name;
      businessCoverPhoto = action.data.business_cover_photo

      if (newState['user'][userId]) {
        newState['user'][userId][businessId] = {'businessName': businessName, 'businessCoverPhoto': businessCoverPhoto};
      } else {
        newState['user'][userId] = {businessId: {'businessName': businessName, 'businessCoverPhoto': businessCoverPhoto}};
      }

      if (newState['business'][businessId]) {
        newState['business'][businessId][userId] = newFavorite
      } else {
        newState['business'][businessId] = {userId: newFavorite}
      }
      return newState;


    default:
      return state;
  }
}
