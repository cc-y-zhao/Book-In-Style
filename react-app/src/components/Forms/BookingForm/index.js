import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import states from './states'

import { createBusiness, loadBusiness } from "../../../store/businesses";

import "./CreateBusinessForm.css";

const CreateBookingForm = ({setShowModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);

  //business id will grabbed from modal context
  // will need to grab business' services from useselector... or pass through modal context?

  const userId = useSelector((state) => state.session.user?.id);
  const [serviceId, setServiceId] = useState("")
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const updateServiceId = (e) => setServiceId(e.target.value);
  const updateTime = (e) => setTime(e.target.value);
  const updateDate = (e) => setDate(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userId,
      serviceId,
      businessId,
      date,
      time
    };

    // console.log('payload-------------', payload)

    let data;

    data = await dispatch(createBusiness(payload));

    console.log('data in beofre if data--------------', data)

    if (data?.id) {
      setErrors([]);
      setServiceId('');
      setTime('');
      setDate('');

      await dispatch(loadBusiness(data.id))
      setShowModal(false)
      return history.push(`/businesses/${data.id}`);
      // return <Redirect to={`/businesses/${data.id}`}/>
    } else {
      return setErrors(data)
    }
  };

  let disabled;

  // if (name.length === 0 || description.length === 0 || phone.length < 10 || streetAddress.length === 0 || state.length === 0 || zipcode.length < 5 || coverPhoto.length < 10 || city.length < 3) {
  //   disabled = true;
  // } else {
  //   disabled = false;
  // }

  return (
    <div className="CreateBusinessFormWrapper">
      <div className="CreateBusinessFormHeader">
        <h3 className='list-biz-title'>List Your Business</h3>
      </div>
      <div className="CreatChannelFormBody">
        <form className='create-biz-form' onSubmit={handleSubmit}>
          <div className="CreateBusinessFormErrors">
            <ul>
              {errors && errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
          </div>
          <input type="hidden" value={capacity} />
          <div>
            <div>
              <label>Business Name</label>
            </div>
            <input
              type="text"
              required
              placeholder="Business Name"
              value={name}
              onChange={updateName}
            />
          </div>
          <div>
            <div>
              <label>Description</label>
            </div>
            <textarea
              type="text"
              placeholder="Tell us a bit about your business"
              value={description}
              onChange={updateDescription}
            />
          </div>
          <div>
            <div>
              <label>Phone Number</label>
            </div>
            <input
              type="text"
              required
              placeholder="Phone Number"
              value={phone}
              onChange={updatePhone}
            />
          </div>
          <div>
            <div>
              <label>Street Address</label>
            </div>
            <input
              type="text"
              required
              placeholder="Street Address"
              value={streetAddress}
              onChange={updateStreetAddress}
            />
          </div>
          <div>
            <div className='reg-font-weight'>
              <label>Unit</label>
              <span className='optional'> (optional)</span>
            </div>
            <input
              type="text"
              placeholder="Unit"
              value={unit}
              onChange={updateUnit}
            />
          </div>
          <div>
            <div>
              <label>City</label>
            </div>
            <input
              type="text"
              required
              placeholder="City"
              value={city}
              onChange={updateCity}
            />
          </div>
          <div>
            <span>State: </span>
            <select onChange={updateState} value={state}>
              {states.map(state =>
                <option key={state}>{state}</option>
              )}
            </select>
          </div>
          <div className="create-biz-btn">
            <button type="submit" disabled={disabled}>
              Create Business Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBusinessForm;
