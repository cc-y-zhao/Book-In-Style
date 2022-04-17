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


  // useEffect(() => {
  //   const validationErrors = [];
  //   if (title.length === 0) validationErrors.push("");
  //   if (title.length > 50)
  //     validationErrors.push("Title must be 50 characters or less");
  //   if (description.length > 150)
  //     validationErrors.push("Description must be 150 characters or less");

  //   setErrors(validationErrors);
  // }, [date, time]);


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
      // setTime('');
      // setDate('');

      await setShowModal(false)
      window.alert('Your booking has been confirmed!')
      return history.push(`/profile`);
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
    <div className="CreateBusinessFormWrapper">
      <div className="CreateBusinessFormHeader">
        <h3 className='list-biz-title'>{service.name}</h3>
        <div>You can book up to 3 months in advance</div>
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
              min={today}
              max={max}
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
