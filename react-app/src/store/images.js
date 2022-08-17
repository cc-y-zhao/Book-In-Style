const LOAD_IMAGE_BY_BUSINESS = 'images/LOAD_IMAGE_BY_BUSINESS';


const loadedImage = (payload) => ({
  type: LOAD_IMAGE_BY_BUSINESS,
  payload
});


export const loadImageByBusiness = (businessId) => async (dispatch) => {

  const response = await fetch(`/api/images/businesses/${businessId}`);

  if (response.ok) {
    const payload = await response.json();
    dispatch(loadedImage(payload, businessId));
    return payload;
  } else {
    const errors = await response.json();
    return errors;
  }
};

const initialState = {};
export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case LOAD_IMAGE_BY_BUSINESS:
      let newImage = action.image;
      newState['business_image'] = newImage;

      return newState;

    default:
      return state;
  }
}
