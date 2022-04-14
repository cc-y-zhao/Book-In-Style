import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect, useHistory } from "react-router-dom";
import states from "../BusinessForm/states";
import DeleteBusinessModal from "../../components/Modals/DeleteBusinessModal"

import { loadBusiness, editBusiness, deleteBusiness } from "../../store/businesses";

const EditBusinessForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { businessId } = useParams();
  const businessIdParsed = parseInt(businessId);

  const businesses = useSelector((state) => state?.businesses)
  const business = businesses[businessIdParsed]
  const userId = useSelector((state) => state.session.user?.id);

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

  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateStreetAddress = (e) => setStreetAddress(e.target.value);
  const updateUnit = (e) => setUnit(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);
  const updateCoverPhoto = (e) => setCoverPhoto(e.target.value);


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

    const editedBusiness = {
      id,
      capacity,
      name,
      description,
      phone,
      streetAddress,
      unit,
      city,
      state,
      zipcode,
      coverPhoto,
    };

    let data;

    data = await dispatch(editBusiness(editedBusiness));

    console.log('data in edit form----------', data)
    if (data?.id === businessIdParsed) {
      setErrors([]);
      setName('');
      setDescription('');
      setPhone('');
      setStreetAddress('');
      setUnit('');
      setState('');
      setZipcode('');
      history.push(`/businesses/${data.id}`);
    } else {
      return setErrors(data)
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
  }

  let disabled;

  if (name?.length === 0 || description?.length === 0 || phone?.length < 10 || streetAddress?.length === 0 || state?.length === 0 || zipcode?.length < 5) {
    disabled = true;
  } else {
    disabled = false;
  }

  let showEditForm = false;

  if (business) showEditForm = true;

  return (
    <>
      {showEditForm && (
      <div className="CreateBusinessFormWrapper">
        <div className="CreateBusinessFormHeader">
          <h1>Edit Business Listing</h1>
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
            <div className="CreateChannelButton">
              <button type="submit" disabled={disabled}>
                Update Listing
              </button>
            </div>
          </form>
          <div>
            <DeleteBusinessModal businessId={businessIdParsed}/>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default EditBusinessForm;
