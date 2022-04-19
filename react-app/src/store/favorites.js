const CREATE_FAVORITE = 'favorites/CREATE_FAVORITE';

const createdFavorite = (favorite) => ({
  type: CREATE_FAVORITE,
  favorite
});


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


const initialState = {
  'user': {},
  'business': {},
};

export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case CREATE_FAVORITE:
      let newFavorite = action.favorite

      return newState;


    default:
      return state;
  }
}
