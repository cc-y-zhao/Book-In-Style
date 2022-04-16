import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import hours from './hours';

import { loadBusiness } from "../../../store/businesses";
import { createBooking } from "../../../store/bookings";

const CreateBookingForm = ({setShowModal, businessId, userId, service, businessName}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);

  //business id will grabbed from modal context
  // will need to grab business' services from useselector... or pass through modal context?

  const [time, setTime] = useState('--Select a time--');
  const [date, setDate] = useState("");
  const serviceId = service.id;
  const serviceName = service.name;

  const updateTime = (e) => setTime(e.target.value);
  const updateDate = (e) => setDate(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId,
      serviceId,
      businessId,
      date,
      time,
      serviceName,
      businessName,
    };

    // console.log('payload-------------', payload)

    let data;

    data = await dispatch(createBooking(payload));

    console.log('data in beofre if data--------------', data)

    if (data?.id) {
      setErrors([]);
      setTime('');
      setDate('');

      await dispatch(loadBusiness(data.id))
      window.alert('Your booking has been confirmed!')
      setShowModal(false)
      return history.push(`/profile`);
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
        <h3 className='list-biz-title'>{service.name}</h3>
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
      			<label htmlFor="date" style={{ marginTop: "10px" }}></label>
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
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBookingForm;
