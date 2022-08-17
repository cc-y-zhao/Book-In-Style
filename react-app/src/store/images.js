
const UPLOAD_IMAGE = 'images/UPLOAD_IMAGE';


const uploadedImage = (image) => ({
  type: UPLOAD_IMAGE,
  image
});


export const uploadImage = (image) => async (dispatch) => {

  const response = await fetch('/api/images/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(image),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(uploadedImage(data))
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
    case UPLOAD_IMAGE:
      const newImage = action.image;
    //   newState[newBusiness.id] = newBusiness;

    //   return newState;

    default:
      return state;
  }
}
