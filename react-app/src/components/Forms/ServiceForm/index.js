import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { createService, loadBusiness } from "../../../store/businesses";

// import "./CreateBusinessForm.css";

const ServiceForm = ({setShowModal, businessId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  //business id will be passed in from modal context

  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState('');

  const updateName = (e) => setName(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      businessId,
      name,
      price,
    };

    console.log('payload-------------', payload)

    let data;

    data = await dispatch(createService(payload));

    console.log('data in beofre if data--------------', data)

    if (data?.id) {
      setErrors([]);

      await dispatch(loadBusiness(businessId))
      setShowModal(false)
      return window.alert('This service was sucessfully added!')
      // return history.push(`/businesses/${data.id}`);
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
  let to = ' - ';

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
          <div>
              <div>
                <label>Service Name</label>
              </div>
              <input
                type="text"
                required
                placeholder="e.g. Women's Haircut, Manicure, Hair Coloring, Facial, etc."
                value={name}
                onChange={updateName}
              />
          </div>
          <div>
              <div>
                <label>Service Price</label>
              </div>
              <input
                type="number"
                required
                placeholder="Integers only; e.g. '40'"
                value={price}
                onChange={updatePrice}
              />
          </div>

          <div className="create-biz-btn">
            <button type="submit" disabled={disabled}>
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
