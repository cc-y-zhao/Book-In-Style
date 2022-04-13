import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import states from './states'

import { createBusiness } from "../../store/businesses";

import "./CreateBusinessForm.css";

const CreateBusinessForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  // const ownerId = useSelector((state) => state.session.user?.id);
  const capacity = 1;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateStreetAddress = (e) => setStreetAddress(e.target.value);
  const updateUnit = (e) => setUnit(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);


  // useEffect(() => {
  //   const validationErrors = [];
  //   if (title.length === 0) validationErrors.push("");
  //   if (title.length > 50)
  //     validationErrors.push("Title must be 50 characters or less");
  //   if (description.length > 150)
  //     validationErrors.push("Description must be 150 characters or less");

  //   setErrors(validationErrors);
  // }, [title, description]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      capacity,
      name,
      description,
      phone,
      streetAddress,
      unit,
      state,
      zipcode,
      capacity
    };

    let newBusiness;

    newBusiness = await dispatch(createBusiness(payload));

    if (newBusiness) {
      setErrors([]);
      // await dispatch(hideModal());
      // await dispatch(loadChannel(newBusiness.id));
      // history.push(`/channels/${newBusiness.id}`);
    }
  };

  let disabled;

  if (name.length === 0 || description.length === 0 || phone.length < 10 || streetAddress.length === 0 || state.length === 0 || zipcode.length < 5) {
    disabled = true;
  } else {
    disabled = false;
  }

  return (
    <div className="CreateBusinessFormWrapper">
      <div className="CreateBusinessFormHeader">
        <h1>Create Business Listing</h1>
      </div>
      <div className="CreatChannelFormBody">
        <form onSubmit={handleSubmit}>
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
              placeholder="Description"
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
            <span>State: </span>
            <select onChange={updateState} value={state}>
              {states.map(state =>
                <option key={state}>{state}</option>
              )}
            </select>
          </div>
          <div>
            <input
              type="text"
              placeholder="Zipcode"
              value={zipcode}
              onChange={updateZipcode}
            />
          </div>
          <div className="CreateChannelButton">
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
