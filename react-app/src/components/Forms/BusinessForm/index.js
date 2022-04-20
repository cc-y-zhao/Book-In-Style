import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import states from './states';
import types from './businessTypes';

import { createBusiness, loadBusiness } from "../../../store/businesses";

import "./CreateBusinessForm.css";

const CreateBusinessForm = ({setShowModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  // const ownerId = useSelector((state) => state.session.user?.id);
  const capacity = 1;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");

  const [isWomenHaircut, setIsWomenHaircut] = useState(false);
  const [isLashes, setIsLashes] = useState(false);
  const [isMenHaircut, setIsMenHaircut] = useState(false);
  const [isSpa, setIsSpa] = useState(false);
  const [isNailSalon, setIsNailSalon] = useState(false);
  const [isKidHaircut, setIsKidHaircut] = useState(false);
  const [isHairStyling, setIsHairStyling] = useState(false);
  const [isMakeup, setIsMakeup] = useState(false);
  const [isHairColoring, setIsHairColoring] = useState(false);
  const [isPerm, setIsPerm] = useState(false);


  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateStreetAddress = (e) => setStreetAddress(e.target.value);
  const updateUnit = (e) => setUnit(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);
  const updateCoverPhoto = (e) => setCoverPhoto(e.target.value);


  const updateIsWomenHaircut = (e) => setIsWomenHaircut(e.target.value);
  const updateIsLashes = (e) => setIsLashes(e.target.value);
  const updateIsMenHaircut = (e) => setIsMenHaircut(e.target.value);
  const updateIsSpa = (e) => setIsSpa(e.target.value);
  const updateIsNailSalon = (e) => setIsNailSalon(e.target.value);
  const updateIsKidHaircut = (e) => setIsKidHaircut(e.target.value);
  const updateHairStyling = (e) => setIsHairStyling(e.target.value);
  const updateIsMakeup = (e) => setIsMakeup(e.target.value);
  const updateIsHairColoring = (e) => setIsHairColoring(e.target.value);
  const updateIsPerm = (e) => setIsPerm(e.target.value);


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
      city,
      zipcode,
      coverPhoto,
      isWomenHaircut,
      isLashes,
      isMenHaircut,
      isSpa,
      isNailSalon,
      isKidHaircut,
      isHairStyling,
      isMakeup,
      isHairColoring,
      isPerm,
    };

    // console.log('payload-------------', payload)

    let data;

    data = await dispatch(createBusiness(payload));

    console.log('data in beofre if data--------------', data)

    if (data?.id) {
      // setErrors([]);
      // setName('');
      // setDescription('');
      // setPhone('');
      // setStreetAddress('');
      // setUnit('');
      // setCity('');
      // setState('');
      // setZipcode('');
      // setCoverPhoto('');

      await dispatch(loadBusiness(data.id))
      setShowModal(false)
      return history.push(`/businesses/${data.id}`);
      // return <Redirect to={`/businesses/${data.id}`}/>
    } else {
      return setErrors(data)
    }
  };

  let disabled;

  if (name.length === 0 || description.length === 0 || phone.length < 10 || streetAddress.length === 0 || state.length === 0 || zipcode.length < 5 || coverPhoto.length < 10 || city.length < 3) {
    disabled = true;
  } else {
    disabled = false;
  }

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
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////           */}
          <div className='biz-form-row'>
            <div className="left-column">
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
              <div>
                <div>
                  <label>Zipcode</label>
                </div>
                <input
                  type="text"
                  placeholder="Zipcode"
                  value={zipcode}
                  onChange={updateZipcode}
                />
              </div>
              <div>
                <div>
                  <label>Cover Photo</label>
                </div>
                <input
                  type="text"
                  placeholder="Please provide an image to represent your business!"
                  value={coverPhoto}
                  onChange={updateCoverPhoto}
                />
              </div>
            </div>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////           */}

            <div className='right-column'>
              <div>Service types (check all that may apply):</div>
              <div>
                <span>Women's Haircut: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='businessOwner'
                  onChange={updateIsWomenHaircut}
                  value={isWomenHaircut}
                ></input>
              </div>

            </div>



          </div>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////           */}


















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
