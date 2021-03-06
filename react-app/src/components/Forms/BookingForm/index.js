import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import hours from './hours';

// import { loadBusiness } from "../../../store/businesses";
import { createBooking } from "../../../store/bookings";
import './BookingForm.css';

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

    let data;

    data = await dispatch(createBooking(payload));


    if (data?.id) {
      setErrors([]);

      await setShowModal(false)
      return history.push(`/profile`);
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
    <div className="CreateBookingFormWrapper">
      <div className="CreateBookingFormHeader">
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
            <span>
              <label>Date: </label>
            </span>
      			<label htmlFor="date" style={{ marginTop: "10px" }}></label>
            <input
              className="calendar"
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
          <div className="create-booking-btn">
            <div className='booking-btn-div'>
              <button className='book-appt-btn' type="submit" disabled={disabled}>
                Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBookingForm;
