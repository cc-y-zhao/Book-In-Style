// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import hours from './hours'

// import { createBusiness, loadBusiness } from "../../../store/businesses";

// // import "./CreateBusinessForm.css";

// const BusinessHoursForm = ({setShowModal, businessId}) => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const [errors, setErrors] = useState([]);
//   const [state, setState] = useState("");

//   const [mondayOpen, setMondayOpen] = useState('');
//   const [mondayClose, setMondayClose] = useState('');
//   const [tuesday, setTuesday] = useState('');
//   const [wednesday, setWednesday] = useState('');
//   const [thursday, setThursday] = useState('');
//   const [friday, setFriday] = useState('');
//   const [saturday, setSaturday] = useState('');
//   const [sunday, setSunday] = useState('');


//   // const updateName = (e) => setName(e.target.value);
//   // const updateDescription = (e) => setDescription(e.target.value);
//   // const updatePhone = (e) => setPhone(e.target.value);
//   // const updateStreetAddress = (e) => setStreetAddress(e.target.value);
//   // const updateUnit = (e) => setUnit(e.target.value);
//   // const updateCity = (e) => setCity(e.target.value);
//   const updateState = (e) => setState(e.target.value);
//   // const updateZipcode = (e) => setZipcode(e.target.value);
//   // const updateCoverPhoto = (e) => setCoverPhoto(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       mondayOpen,
//       tuesday,
//       wednesday,
//       thursday,
//       friday,
//       saturday,
//       sunday,
//     };

//     // console.log('payload-------------', payload)

//     let data;

//     data = await dispatch(createBusiness(payload));

//     console.log('data in beofre if data--------------', data)

//     if (data?.id) {
//       setErrors([]);

//       await dispatch(loadBusiness(data.id))
//       setShowModal(false)
//       return history.push(`/businesses/${data.id}`);
//       // return <Redirect to={`/businesses/${data.id}`}/>
//     } else {
//       return setErrors(data)
//     }
//   };

//   let disabled;

//   // if (name.length === 0 || description.length === 0 || phone.length < 10 || streetAddress.length === 0 || state.length === 0 || zipcode.length < 5 || coverPhoto.length < 10 || city.length < 3) {
//   //   disabled = true;
//   // } else {
//   //   disabled = false;
//   // }
//   let to = ' - ';

//   return (
//     <>
//       <h2>TBD</h2>
//     </>
//   )

//   // return (
//   //   <div className="CreateBusinessFormWrapper">
//   //     <div className="CreateBusinessFormHeader">
//   //       <h3 className='list-biz-title'>List Your Business</h3>
//   //     </div>
//   //     <div className="CreatChannelFormBody">
//   //       <form className='create-biz-form' onSubmit={handleSubmit}>
//   //         <div className="CreateBusinessFormErrors">
//   //           <ul>
//   //             {errors && errors.map((error) => <li key={error}>{error}</li>)}
//   //           </ul>
//   //         </div>
//   //         <div>
//   //           <span>Monday: </span>
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //           {to}
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //           {/* <label>closed</label>
//   //           <input
//   //             type='checkbox'
//   //             name='businessOwner'
//   //             onChange={updateBusinessOwner}
//   //             value={businessOwner}
//   //           ></input> */}
//   //         </div>
//   //         <div>
//   //           <span>Tuesday: </span>
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //           {to}
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //         </div>
//   //         <div>
//   //           <span>Wednesday: </span>
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //           {to}
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //         </div>
//   //         <div>
//   //           <span>Thursday: </span>
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //           {to}
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //         </div>
//   //         <div>
//   //           <span>Friday: </span>
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //           {to}
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //         </div>
//   //         <div>
//   //           <span>Saturday: </span>
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //           {to}
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //         </div>
//   //         <div>
//   //           <span>Sunday: </span>
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //           {to}
//   //           <select onChange={updateState} value={state}>
//   //             {hours.map(hour =>
//   //               <option key={hour}>{hour}</option>
//   //             )}
//   //           </select>
//   //         </div>
//   //         <div className="create-biz-btn">
//   //           <button type="submit" disabled={disabled}>
//   //             Update Hours
//   //           </button>
//   //         </div>
//   //       </form>
//   //     </div>
//   //   </div>
//   // );
// };

// export default BusinessHoursForm;
