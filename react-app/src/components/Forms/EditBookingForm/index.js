import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import hours from "../BookingForm/hours";
// import "../BusinessForm/CreateBusinessForm.css";
import './EditBookingForm.css';
import DeleteBookingModal from "../../Modals/DeleteBookingModal";
import convertedDate from "./DateConversion";

import { editBooking, loadBookingsByUser } from "../../../store/bookings";

const EditBookingForm = ({setShowModal, booking}) => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [time, setTime] = useState(booking.time);
  const [date, setDate] = useState(convertedDate(booking.date));

  const bookingId = booking.id;
  const serviceId = booking.service_id;
  const userId = booking.user_id;
  const businessId = booking.business_id;
  const serviceName = booking.service_name;
  const businessName = booking.business_name;

  const updateTime = (e) => setTime(e.target.value);
  const updateDate = (e) => setDate(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      bookingId,
      userId,
      serviceId,
      businessId,
      serviceName,
      businessName,
      date,
      time
    };

    let data;

    data = await dispatch(editBooking(payload));

    if (data?.id) {

      await dispatch(loadBookingsByUser(userId))
        .then(() => setShowModal(false))
        // .then(() => window.alert('Your appointment was successfully updated!'));
      // await setShowModal(false)
      // return window.alert('Your appointment was successfully updated!')
      // return history.push(`/profile`);
      // return <Redirect to={`/businesses/${data.id}`}/>
    } else {
      return setErrors(data)
    }
  };

  let disabled = false;
  if (time.includes('Select') || date.length < 1) disabled = true;

  //Min booking date:
  let today = new Date();
  let dd = today.getDate() + 1;
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  today = yyyy + '-' + mm + '-' + dd;

  //Max booking date:
  let max = new Date();
  let ddMax = max.getDate();
  let mmMax = max.getMonth() + 4;

  if (ddMax < 10) ddMax = '0' + ddMax;
  if (mmMax < 10) mmMax = '0' + mmMax;
  max = yyyy + '-' + mmMax + '-' + ddMax;

  return (
    <div className="CreateListingFormWrapper">
      <div className="EditBookingFormHeader">
        <h2 className='list-biz-title-modal'>{businessName}</h2>
        <h3 className='list-biz-servicename-modal'>{serviceName}</h3>
        <div>You can book up to 3 months in advance</div>
      </div>
      <div className="EditBookingFormBody">
        <form className='create-biz-form' onSubmit={handleSubmit}>
          <div className="CreateBusinessFormErrors">
            <ul>
              {errors && errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
          </div>
          <div>
            <div>
              <label>Date: </label>
            </div>
      			{/* <label htmlFor="date" style={{ marginTop: "10px" }}></label> */}
            <input
              type="date"
              min={today}
              max={max}
              required
              placeholder="Date"
              value={date}
              onChange={updateDate}
            />
          </div>
          <div>
            <div>Time: </div>
            <select onChange={updateTime} value={time}>
              {hours.map(hour =>
                <option key={hour}>{hour}</option>
              )}
            </select>
          </div>
          <div className="update-booking-div">
            <button type="submit" disabled={disabled}>
              Update
            </button>
          </div>
        </form>
        <div className='cancel-appt-modal'>
          <DeleteBookingModal booking={booking} setEditBookingModal={setShowModal}/>
        </div>
      </div>
    </div>
  );
};

export default EditBookingForm;
