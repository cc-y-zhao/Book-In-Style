import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import states from "../BusinessForm/states";
import DeleteBusinessModal from "../../Modals/DeleteBusinessModal"

import { loadBusiness, editBusiness } from "../../../store/businesses";

import "./CreateBusinessForm.css";

const EditBusinessFormTWO = ({setShowModal}) => {
  const dispatch = useDispatch();

  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);

  const businesses = useSelector((state) => state?.businesses)
  const business = businesses[businessIdParsed]

  useEffect(() => {
    dispatch(loadBusiness(businessIdParsed));
  }, [dispatch, businessIdParsed]);

  const [errors, setErrors] = useState([]);
  const capacity = 1;
  const id = businessIdParsed;
  const [name, setName] = useState(business?.name);
  const [description, setDescription] = useState(business?.description);
  const [phone, setPhone] = useState(business?.phone);
  const [streetAddress, setStreetAddress] = useState(business?.street_address);
  const [unit, setUnit] = useState(business?.unit);
  const [city, setCity] = useState(business?.city);
  const [state, setState] = useState(business?.state);
  const [zipcode, setZipcode] = useState(business?.zip_code);
  const [coverPhoto, setCoverPhoto] = useState(business?.cover_photo);

  const [isWomenHaircut, setIsWomenHaircut] = useState(business?.);
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


  const updateIsWomenHaircut = (e) => {
    if (isWomenHaircut) setIsWomenHaircut(false);
    else (setIsWomenHaircut(true));
  }
  const updateIsLashes = (e) => {
    if (isLashes) setIsLashes(false);
    else (setIsLashes(true));
  }
  const updateIsMenHaircut = (e) => {
    if (isMenHaircut) setIsMenHaircut(false);
    else (setIsMenHaircut(true));
  }
  const updateIsSpa = (e) => {
    if (isSpa) setIsSpa(false);
    else (setIsSpa(true));
  }
  const updateIsNailSalon = (e) => {
    if (isNailSalon) setIsNailSalon(false);
    else (setIsNailSalon(true));
  }
  const updateIsKidHaircut = (e) => {
    if (isKidHaircut) setIsKidHaircut(false);
    else (setIsKidHaircut(true));
  }
  const updateHairStyling = (e) => {
    if (isHairStyling) setIsHairStyling(false);
    else (setIsHairStyling(true));
  }
  const updateIsMakeup = (e) => {
    if (isMakeup) setIsMakeup(false);
    else (setIsMakeup(true));
  }
  const updateIsHairColoring = (e) => {
    if (isHairColoring) setIsHairColoring(false);
    else (setIsHairColoring(true));
  }
  const updateIsPerm = (e) => {
    if (isPerm) setIsPerm(false);
    else (setIsPerm(true));
  }


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

    console.log('payload-------------', payload)

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

  if (name.length === 0 || description.length === 0 || phone.length === 0 || streetAddress.length === 0 || state.length === 0 || zipcode.length === 0 || coverPhoto.length === 0 || city.length === 0) {
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
              <div className='left-column-field'>
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
              <div className='left-column-field'>
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

              <div className='left-column-field'>
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
              <div className='left-column-field'>
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
              <div className='left-column-field'>
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
              <div className='left-column-field'>
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
              <div className='left-column-field'>
                <span>State: </span>
                <select onChange={updateState} value={state}>
                  {states.map(state =>
                    <option key={state}>{state}</option>
                  )}
                </select>
              </div>
              <div className='left-column-field'>
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
              <div className='left-column-field'>
                <div>
                  <label>Cover Photo</label>
                  <span className='optional'> (Image URL)</span>
                </div>
                <input
                  type="text"
                  placeholder="Please provide an image to represent your business"
                  value={coverPhoto}
                  onChange={updateCoverPhoto}
                />
              </div>
            </div>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////           */}

            <div className='right-column'>
              <div>Service types (check all that may apply):</div>
              <div className='service-right-column'>
                <span>Women's Haircut: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='isWomenHaircut'
                  onChange={updateIsWomenHaircut}
                  value={isWomenHaircut}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Men's Haircut: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='isMenHaircut'
                  onChange={updateIsMenHaircut}
                  value={isMenHaircut}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Hair Coloring: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='businessOwner'
                  onChange={updateIsHairColoring}
                  value={isHairColoring}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Kid's Haircut: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='businessOwner'
                  onChange={updateIsKidHaircut}
                  value={isKidHaircut}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Hair Styling: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='businessOwner'
                  onChange={updateHairStyling}
                  value={isHairStyling}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Nail Salon: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='businessOwner'
                  onChange={updateIsNailSalon}
                  value={isNailSalon}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Makeup: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='businessOwner'
                  onChange={updateIsMakeup}
                  value={isMakeup}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Lashes: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='isLashes'
                  onChange={updateIsLashes}
                  value={isLashes}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Perm: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='businessOwner'
                  onChange={updateIsPerm}
                  value={isPerm}
                ></input>
              </div>

              <div className='service-right-column'>
                <span>Spa: </span>
                <input
                  className='checkbox-input'
                  type='checkbox'
                  name='businessOwner'
                  onChange={updateIsSpa}
                  value={isSpa}
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

export default EditBusinessFormTWO;
