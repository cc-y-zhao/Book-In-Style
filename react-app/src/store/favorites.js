const CREATE_FAVORITE = 'favorites/CREATE_FAVORITE';
const GET_FAVORITES_BY_USER = 'favorites/GET_FAVORITES_BY_USER';

const createdFavorite = (data) => ({
  type: CREATE_FAVORITE,
  data
});

const favoritesByUser = (data) => ({
  type: GET_FAVORITES_BY_USER,
  data,
})


export const createFavorite = (payload) => async (dispatch) => {

  const response = await fetch('/api/favorites/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
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

export const deleteFavorite = (payload) => async (dispatch) => {

  const response = await fetch('/api/favorites/', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const data = await response.json();
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
  // let newFavorite;
  // let businessId;
  // let userId;
  // let businessName;
  // let businessCoverPhoto;
  switch (action.type) {

    case GET_FAVORITES_BY_USER:
      let favorites_list = action.data.favorites_list;
      let favorites_dict = action.data.favorites_dict;
      let userId = action.data.user_id

      newState.user[userId] = {'favorites_list': favorites_list, 'favorites_dict': favorites_dict};

      return newState;


    default:
      return state;
  }
}
