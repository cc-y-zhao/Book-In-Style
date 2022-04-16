import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import hours from "../BookingForm/hours";
import "../BusinessForm/CreateBusinessForm.css";
import DeleteBookingModal from "../../Modals/DeleteBookingModal";

import { editBooking, loadBookingsByUser } from "../../../store/bookings";

const EditBookingForm = ({setShowModal, booking}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);

  //business id will grabbed from modal context
  // will need to grab business' services from useselector... or pass through modal context?

  const [time, setTime] = useState(booking.time);
  const [date, setDate] = useState('2022-05-06');

  // const [date, setDate] = useState(booking.date);
  const bookingId = booking.id;
  const serviceId = booking.service_id;
  const userId = booking.user_id;
  const businessId = booking.business_id;
  const serviceName = booking.service_name;
  const businessName = booking.business_name;

  // console.log('date-----------------', date);

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

    // console.log('payload in frontend-------------', payload)

    let data;

    data = await dispatch(editBooking(payload));

    // console.log('data in beofre if data--------------', data)

    if (data?.id) {
      // setErrors([]);
      // setTime('');
      // setDate('');

      await dispatch(loadBookingsByUser(userId))
        .then(() => setShowModal(false))
        .then(() => window.alert('Your appointment was successfully updated!'));
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

  return (
    <div className="CreateBusinessFormWrapper">
      <div className="CreateBusinessFormHeader">
        <h2 className='list-biz-title'>{businessName}</h2>
        <h3 className='list-biz-title'>{serviceName}</h3>
      </div>
      <div className="CreatChannelFormBody">
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
              required
              placeholder="Date"
              value={date}
              onChange={updateDate}
            />
          </div>
          <div>
            <span>Time: </span>
            <select onChange={updateTime} value={time}>
              {hours.map(hour =>
                <option key={hour}>{hour}</option>
              )}
            </select>
          </div>
          <div className="create-biz-btn">
            <button type="submit" disabled={disabled}>
              Update
            </button>
          </div>
        </form>
        <div className='delete-biz-btn'>
          <DeleteBookingModal booking={booking} setEditBookingModal={setShowModal}/>
        </div>
      </div>
    </div>
  );
};

export default EditBookingForm;
