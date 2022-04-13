
const CREATE_BUSINESS = 'businesses/CREATE_BUSINESS';

const createOneBusiness = (business) => ({
  type: CREATE_BUSINESS,
  business
});


// export const createBusiness = (business) => async (dispatch) => {

//   const response = await fetch('/api/businesses/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(business),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setUser(data))
//     return null;
//   } else if (response.status < 500) {
//     const data = await response.json();
//     if (data.errors) {
//       return data.errors;
//     }
//   } else {
//     return ['An error occurred. Please try again.']
//   }
// }


const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BUSINESS:
      return {}
    default:
      return state;
  }
}
